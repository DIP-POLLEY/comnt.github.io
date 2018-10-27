var a= document.getElementById("button");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");



a.addEventListener("click",function(){
	if(input.value.length>0){
	var li=document.createElement("Li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";}
})



input.addEventListener("keypress",function(event){
	if(input.value.length>0 && event.keyCode=== 13){
	var li=document.createElement("Li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";}
})