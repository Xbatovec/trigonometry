// mouse move event
document.getElementById("plane-svg").addEventListener('mousemove', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!(isDragged.x == x) && !(isDragged.x == null)) isDragged.x = x;
    if (!(isDragged.y == y) && !(isDragged.y == null)) isDragged.y = y;
});

// on drag event
function dragEvent(startX, startY) {
    if (!isDragged.value) {cancelAnimationFrame(dragEvent); return;}

    if (isDragged.x == null) isDragged.x = startX;
    if (isDragged.y == null) isDragged.y = startY;
    const coords = unitConverotor({x: isDragged.x, y: isDragged.y});
    const x = coords.x;
    const y = coords.y;

    const interpreter = 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    if (interpreter !== Infinity) {
        render(
            arcsin(interpreter*y) < 0 ? 
            2*pi - arccos(interpreter*x) :
            arccos(interpreter*x)
        );
    }

    requestAnimationFrame(dragEvent);
}

document.getElementById("plane-svg").addEventListener('mousedown', (event) => {
    isDragged.value = true;
    dragEvent(event.offsetX, event.offsetY);
    document.getElementById("plane-svg").style.cursor = "grabbing";
});

document.getElementById("plane-svg").addEventListener('mouseup', _ => {
    isDragged.value = false;
    isDragged.x = null;
    isDragged.y = null;
    document.getElementById("plane-svg").style.cursor = "grab";
});