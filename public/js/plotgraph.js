function getProp(bins, prop) {
	var propArr = [];
	for (index in bins){
		if(prop === "label"){
			propArr.push("Bin");	
		}else{
			propArr.push(bins[index][prop]);
		}
		
	}
	return propArr;
}



function plotGraph(bins){
	var plotdata = {};
		plotdata.data = [];
		plotdata.label = [];
	
	plotdata.data = getProp(bins,"humidity");
	plotdata.label = getProp(bins,"label");


	var barChartData = {
		labels : plotdata.label,
		datasets : [
			{
				fillColor : "#A2B3B1",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "#82A9A5",
				highlightStroke: "rgba(220,220,220,1)",
				data : plotdata.data
			}
		]

	}
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}
}

function handleError(){
  console.log("Ooops error");
}

$.when( $.ajax( "/bins" ) ).then(plotGraph,handleError);