function getAttributes()
{
 let u = document.getElementById("w3r").href;
 let v = document.getElementById("w3r").hreflang;   
 let w = document.getElementById("w3r").rel; 
 let x = document.getElementById("w3r").target; 
 let y = document.getElementById("w3r").type; 
console.log(`The value of the href attribute of the link is :${u}\n
The value of the hreflang attribute of the link is :${v}\n
The value of the rel attribute of the link is :${w}\n
The value of the taget attribute of the link is :${x}\n
The value of the type attribute of the link is :${y}`);
}