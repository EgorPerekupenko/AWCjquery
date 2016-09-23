$( document ).ready(function() {   

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];     
planets.reverse();     // method reversing an array 



$.each(planets,function(i,value)                // for loop using jquery .each method 
{ 
  ($('<option/>').val(planets[i][1]).html(planets[i][0]).appendTo('#planetWeight')); /* creaating option , assigning value 
                                                                                          based on idex and applies it to selected user 
                                                                                          option form selected box */
})
                                                                                            /* for (var i=0;i<planets.length;i++)    // same loop using javascript
                                                                                              
                                                                                           {

                                                                                        $('<option/>').val(planets[i][1]).html(planets[i][0]).appendTo('#planetWeight');
                                                                                      
                                                                                      }*/






$("#btnCalculateWeight").click(function()                 // a bit different approach to calculation after click using jquery

{
	var userWeight=$("#userWeight").val();                   // getting a user weight using sizzle selector 
	
	var planetText=$("#planetWeight option:selected").text();    // getting selected option tag text 
	
	var planetValue=$("#planetWeight option:selected").val();    // getting selected option value 
	
	var weightOnPlanet=userWeight*planetValue;                   // calculation

  var roundTotalWeight= Math.round(weightOnPlanet);            // rounding answer 

	$("#output").text("if u were on "+planetText+ " " +"you woud weight"+ " " + roundTotalWeight+" " +"lbs!");   // output 


})
});