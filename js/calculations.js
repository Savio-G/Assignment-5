let serial=0
document.getElementById('triangle-btn').addEventListener('click', function(){
    serial+=1;
    const title=document.getElementById('triangle-title').innerText
    const input1=document.getElementById('b1').value
    const input2=document.getElementById('h1').value
   const area= 0.5*parseInt(input1)*parseInt(input2);

   if(input1<=0 && input2<=0){
    alert('type more than 0')
   }

displayData(title,area);
})

// rectangle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial+=1;
    const title=document.getElementById('rectangle-title').innerText
    const input1=document.getElementById('w').value
    const input2=document.getElementById('l').value
   const area= parseInt(input1)*parseInt(input2);

   if(input1<=0 && input2<=0){
    alert('type more than 0')
   }

displayData(title,area);
})

// Parallelogram
document.getElementById('parallel-btn').addEventListener('click', function(){
    serial+=1;
 const titleEl=document.getElementById('parallel-title').innerText
 const value1=10
 const value2=12

const area= value1*value2; 

elements(titleEl, area);
})

// Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    serial+=1;
 const titleEl=document.getElementById('rhombus-title').innerText
 const value1=16
 const value2=8

const area= 0.5*value1*value2; 

elements(titleEl, area);
})

// Pentagon

document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial+=1;
 const titleEl=document.getElementById('pentagon-title').innerText
 const value1=6
 const value2=10

const area= 0.5*value1*value2; 

elements(titleEl, area);
})

// Ellipse
document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial+=1;
 const titleEl=document.getElementById('ellipse-title').innerText
 const value1=10
 const value2=4

const withoutDecimalarea= 3.14*value1*value2; 
const area=parseFloat(withoutDecimalarea).toFixed(2);


elements(titleEl, area);
})





// Triangle and Rectangle function
function displayData( parametre1, parametre2){
    const table=document.getElementById('t-body')
const tr=document.createElement('tr')
tr.innerHTML= `
<td>${serial}}</td>
<td>${parametre1}</td>
<td>${parametre2}cm<sup>2</sup></td>
<td><button class="convert-btn">Area to m <sup>2</sup></button></td>



`
table.appendChild(tr)
}

// Parallelogram and others function

function elements (elementparametre1, elementparametre2){
    const table=document.getElementById('t-body')
const tr=document.createElement('tr')
tr.innerHTML= `
<td>${serial}}</td>
<td>${elementparametre1}</td>
<td>${elementparametre2}cm<sup>2</sup></td>
<td><button class="convert-btn">Area to m <sup>2</sup></button></td>



`
table.appendChild(tr)
}



// Effects
let color = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg").style.background 
    = color[Math.floor(Math.random() * color.length)];
})

let color2 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg2").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg2").style.background 
    = color[Math.floor(Math.random() * color.length)];
})

let color3 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg3").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg3").style.background 
    = color[Math.floor(Math.random() * color.length)];
})

let color4 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg4").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg4").style.background 
    = color[Math.floor(Math.random() * color.length)];
})

let color5 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg5").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg5").style.background 
    = color[Math.floor(Math.random() * color.length)];
})

let color6 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg6").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg6").style.background 
    = color[Math.floor(Math.random() * color.length)];
})