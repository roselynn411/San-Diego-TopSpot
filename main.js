//Page can't be manipulated until document is ready
// jQuery detects this state of readiness for you
$(document).ready(function(){
  //getting data from data.json
$.getJSON("data.json", function(data){
//log all data
//grab table and saved it in table var
let table = document.getElementById('table');
//create loop to iterate through each element in array
//grab the name from object and add to first id cell
//grab description to add to second td cell
//grab long * lat, storing in variable caled long & lat
//create link to location using template literal
//display link in third td cell
for(let i = 0; i < data.length ; i++){
  //create new table row and cells
  let newRow = table.insertRow(i+1);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);

 //add name cells
 //create text node and the data : string containing the data to be put in the text node 
 let cell1Text = document.createTextNode(data[i].name);
 cell1.appendChild(cell1Text);

 //add description cells
 let cell2Text = document.createTextNode(data[i].description);
 cell2.appendChild(cell2Text);

 //add location cells
 let lat = data[i].location[0];
 let long = data[i].location[1];
 let locationLink = `https://www.google.com/maps?q=${lat},${long}`;
 cell3.innerHTML = `<a href=${locationLink}>Check It Out on Google Maps</a>`
};
});
});