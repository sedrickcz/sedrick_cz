
$(document).ready(function() {
//Get context with jQuery - using jQuery's .get() method.
var ctx1 = $("#myChart1").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart1 = new Chart(ctx1);
//Get context with jQuery - using jQuery's .get() method.
var ctx2 = $("#myChart2").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart2 = new Chart(ctx2);
//Get context with jQuery - using jQuery's .get() method.
var ctx3 = $("#myChart3").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart3 = new Chart(ctx3);
//Get context with jQuery - using jQuery's .get() method.
var ctx4 = $("#myChart4").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart4 = new Chart(ctx4);
//Get context with jQuery - using jQuery's .get() method.
var ctx5 = $("#myChart5").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart5 = new Chart(ctx5);
//Get context with jQuery - using jQuery's .get() method.
var ctx6 = $("#myChart6").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart6 = new Chart(ctx6);
//Get context with jQuery - using jQuery's .get() method.
var ctx7 = $("#myChart7").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart7 = new Chart(ctx7);
//Get context with jQuery - using jQuery's .get() method.
var ctx8 = $("#myChart8").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart8 = new Chart(ctx8);



var data1 = [

    {
        value : 80,
        color : "#35E844"
    },
    {
        value : 20,
        color : "#949FB1"
    }

]

var data2 = [

    {
        value : 80,
        color : "#35E844"
    },
    {
        value : 20,
        color : "#949FB1"
    }

]

var data3 = [

    {
        value : 85,
        color : "#35E844"
    },
    {
        value : 15,
        color : "#949FB1"
    }

]


var data4 = [

    {
        value : 75,
        color : "#35E844"
    },
    {
        value : 25,
        color : "#949FB1"
    }

]

var data5 = [

    {
        value : 75,
        color : "#35E844"
    },
    {
        value : 25,
        color : "#949FB1"
    }
]
var data6 = [

    {
        value : 65,
        color : "#E39C4B"
    },
    {
        value : 35,
        color : "#949FB1"
    }
]
var data7 = [

    {
        value : 60,
        color : "#E39C4B"
    },
    {
        value : 40,
        color : "#949FB1"
    }
]
var data8 = [

    {
        value : 50,
        color : "#E39C4B"
    },
    {
        value : 50,
        color : "#949FB1"
    }
]



var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    
    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout : 50,
    
    //Boolean - Whether we should animate the chart 
    animation : true,
    
    //Number - Amount of animation steps
    animationSteps : 100,
    
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,
    
    //Function - Will fire on animation completion.
    onAnimationComplete : writeText
}


new Chart(ctx1).Doughnut(data1,options);
new Chart(ctx2).Doughnut(data2,options);
new Chart(ctx3).Doughnut(data3,options);
new Chart(ctx4).Doughnut(data4,options);
new Chart(ctx5).Doughnut(data5,options);
new Chart(ctx6).Doughnut(data6,options);
new Chart(ctx7).Doughnut(data7,options);
new Chart(ctx8).Doughnut(data8,options);

});

function writeText(){
    //Get context with jQuery - using jQuery's .get() method.
var ctx1 = $("#myChart1").get(0).getContext("2d");
ctx1.font="20px Istok Web";
ctx1.fillText("80%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx2 = $("#myChart2").get(0).getContext("2d");
ctx2.font="20px Istok Web";
ctx2.fillText("85%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx3 = $("#myChart3").get(0).getContext("2d");
ctx3.font="20px Istok Web";
ctx3.fillText("80%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx4 = $("#myChart4").get(0).getContext("2d");
ctx4.font="20px Istok Web";
ctx4.fillText("75%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx5 = $("#myChart5").get(0).getContext("2d");
ctx5.font="20px Istok Web";
ctx5.fillText("75%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx6 = $("#myChart6").get(0).getContext("2d");
ctx6.font="20px Istok Web";
ctx6.fillText("65%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx7 = $("#myChart7").get(0).getContext("2d");
ctx7.font="20px Istok Web";
ctx7.fillText("60%",32,57); 
//Get context with jQuery - using jQuery's .get() method.
var ctx8 = $("#myChart8").get(0).getContext("2d");
ctx8.font="20px Istok Web";
ctx8.fillText("50%",32,57); 
}