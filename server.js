#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');
var path    =  require('path');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var Bins = require("./app/models/bins.js");
var BinActivity = require("./app/models/binsActivity.js");
var moment = require('moment');
var Utils = require("./app/common/utils.js");
/**
 *  Define the BinWatch application.
 */
var BinWatch = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        

        self.zcache['trends.html'] = fs.readFileSync('./views/trends.html');

        self.zcache['dump.json'] = fs.readFileSync('./public/dump.json','utf8');

        
        
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.render('index.ejs');
        };

        self.routes['/faq'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.render('faq.ejs');
        };

        self.routes['/locate'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.render('locate.ejs',{API_KEY: process.env.GMAPP_BROWSER_KEY});
        };

        self.routes['/contact'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.render('contact.ejs');
        };

        self.routes['/trends'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('trends.html') );
        };

        self.routes['/dashboard'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.render('dashboard.ejs');
        };
		
		self.routes['/admin/addbin'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.render('admin/addbin.ejs');
        };

        self.routes['/bins'] = function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send(self.cache_get('dump.json') );
        };

        self.routes['/bin/:id'] = function(req, res) {
            var oid = Utils.validateXSS(req.params.id);
            var params = {};

            if(!Utils.checkForHexRegExp(oid)){
                res.redirect("/");
            }else{
                params.id = oid;
                Bins.getBinDetails(params,function(err,docs){
                    if(!err){
                        res.setHeader('Content-Type', 'text/html');
                        res.render('bin.ejs',{bin:docs});
                    }else{
                        res.redirect("/");
                    }
                });          
            }
            
        };

        self.routes['/bin/:id/activity'] = function(req, res) {
            var oid = Utils.validateXSS(req.params.id);
            var params = {};

            if(!Utils.checkForHexRegExp(oid)){
                res.redirect("/");
            }else{
                params.id = oid;
                BinActivity.getBinLatestActivity(params,function(err,docs){
                    if(!err){
                        res.setHeader('Content-Type', 'text/html');
                        res.render('bin-activity.ejs',{activity:docs,id:oid});
                    }else{
                        res.redirect("/");
                    }
                });          
            }
            
        };

        self.routes['/bins/:from/:to'] = function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send(self.cache_get('dump.json') );
        };
    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        self.app = express();
        
        self.app.use(bodyParser.json()); // support json encoded bodies
        self.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
        require('./app/routes/apiroutes')(self);
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.locals.relativeTime = function(date){
            return moment(date).fromNow();
        }
        self.app.engine('html', ejs.renderFile);
        self.app.use(express.static(path.join(__dirname, 'public')));
        
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new BinWatch();
zapp.initialize();
zapp.start();

