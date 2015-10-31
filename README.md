# Bin Watch

URL : http://binwatch-ghci.rhcloud.com/

## Installation

* Install node js
* Install mongodb

## Run the server locally

         npm install

         node server.js
         
         
## NPM Packages
       
  * **express**  
        
  * **ejs**
        
  * **body-parser**
        
  * **xss-filters**
  
  * **moment** 
  
  * **json2csv** 
  
        

## API Documentation

https://github.com/hkasera/binWatch/wiki/API-reference

## Deployments

Deployment is fairly simple when using openshift.
The local clone has github url as the remote repo. This remote repo is stored with the alias "origin" (the default alias used by git if we clone). We then add the openshift repo as remote to our clone. We do that while explicitly using an alias for the remote repo we add - used "openshift" as alias here:

    git remote add openshift -f ssh://55e431860c1e66a4bb00013b@binwatch-ghci.rhcloud.com/~/git/binwatch.git/

In order to then be able to push the code from our local git repo to openshift we first have to merge our openshift repo with your local github clone. We do that by issuing locally:

    git merge openshift/master -s recursive -X ours

With this command we tell git to merge the master branch in the openshift git repo with our local git repo. We tell it to merge using the recursive merging strategy and to choose our ("ours") version when there are conflicts.

Once the merge is executed we're ready to push your git repo to openshift. We do that by doing:

     git push openshift HEAD

We tell git to push our local code to the HEAD branch on the remote repo called "openshift" (the alias we stored the openshift git repo).

## References 

[Deployments on Openshift](https://developers.openshift.com/en/managing-deployments.html)
