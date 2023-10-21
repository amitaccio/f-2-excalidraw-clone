const pencil= document.getElementById("pencil");

pencil.addEventListener("click" , OnPencilClick);

let pencilClick=false;

function OnPencilClick(){
    pencilClick= !pencilClick;
    pencil.classList.toggle("pencilActive")

    if(pencilClick){
        canvas.addEventListener("mousedown", OnMouseDown);
    }
    else{
        canvas.removeEventListener("mousedown", OnMouseDown);
    }
}