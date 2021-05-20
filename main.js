canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";

color="red";
width_of_line=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

   current_position_of_x=e.clientX-canvas.offsetLeft;
   current_position_of_y=e.clientY-canvas.offsetTop; 
   if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    
    console.log("current position of x and y coordinates=       ");
    console.log("x=  "+current_position_of_x+"y=  "+current_position_of_y);
   ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI)

    ctx.stroke();
   }
  
}











