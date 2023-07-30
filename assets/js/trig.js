// trigonometry
function cos(angle) {
    return Math.cos(angle);
}

function sin(angle) {
    return Math.sin(angle);
}

function tan(angle) {
    if (angle == pi/2 || angle == 3*pi/2) return "Not defined";
    return Math.tan(angle);
}

function cot(angle) {
    if (angle == 0 || angle == pi) return "Not defined";
    return 1 / Math.tan(angle);
}

function arccos(value) {
    return Math.acos(value);
}

function arcsin(value) {
    return Math.asin(value);
}

function arctan(value) {
    return Math.atan(value);
}