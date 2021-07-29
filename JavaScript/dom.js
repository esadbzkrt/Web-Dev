//document.getElementById("bio").innerHTML="Esad 2017"

// var intro1=document.getElementById("intro1");

// var mesaj=document.getElementById("mesaj");

// mesaj.innerHTML=intro1.innerHTML;

// var tumListeler= document.getElementsByTagName("ul")
// var sehirler=tumListeler[0];

// tumElemanlar=sehirler.getElementsByTagName("li")

// for(i =0;i<tumElemanlar.length;i++){

// 	alert(tumElemanlar[i].innerHTML);
// }

// var classElemanlari=document.getElementsByClassName("intro1")

// alert(classElemanlari[1].innerHTML)

// var queryElemanlari=document.querySelectorAll("p.intro1");
// alert(queryElemanlari[1].innerHTML)

//var isimElemanlari=document.getElementsByName("musteriAdi");
// alert(isimElemanlari[0].value);

// var xvg = document.getElementById("xvg").addEventListener("click",rengiDegistir);

// function rengiDegistir(){
// document.getElementById("xvg").style.color="red";
// isimElemanlari[0].value="xrp"
// }

// var node=document.getElementById("agac");
// alert(node.childNodes[0].nodeValue)

var baslik = document.createElement("h1");
var node = document.createTextNode("hi JS");

baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(baslik, p2);
div1.removeChild(p2)

var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1)