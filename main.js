$(document).ready(function(){
$.getJSON("data.json", function(data){
//log all data

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

 //add name cells
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