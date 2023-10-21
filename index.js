const canvas= document.getElementById("canvas");
const c= canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;



let previousPosition=null;

function OnMouseDown(e){
    previousPosition=[e.clientX, e.clientY];


    canvas.addEventListener("mousemove", OnMouseMove);
    canvas.addEventListener("mouseup", OnMouseup);
}

function OnMouseMove(e){
    let currentPosition=[e.clientX, e.clientY];

    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    previousPosition = currentPosition;

}

function OnMouseup(e){
    canvas.removeEventListener("mousemove" , OnMouseMove);

}
    