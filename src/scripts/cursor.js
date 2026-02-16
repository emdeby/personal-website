const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",moveElement);
function moveElement(event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

}
