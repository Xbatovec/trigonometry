// trig
const pi = Math.PI;
let triangleOrientation = true;
const trig = {
    cos: 0,
    sin: 0,
    tan: 0,
    cot: 0
}

// event
let isDragged = {
    value: false,
    x: null,
    y: null
}

// graphs
const cosGraph = document.getElementById('cosGraph');
const cosGraphCtx = cosGraph.getContext('2d');

const sinGraph = document.getElementById('sinGraph');
const sinGraphCtx = sinGraph.getContext('2d');

const tanGraph = document.getElementById('tanGraph');
const tanGraphCtx = tanGraph.getContext('2d');

const cotGraph = document.getElementById('cotGraph');
const cotGraphCtx = cotGraph.getContext('2d');

// graph values
const graphValue = {
    cos: [],
    sin: [],
    tan: [],
    cot: []
}

// func
function map(oldMin, oldMax, newMin, newMax, num) {
    const oldRange = oldMax - oldMin;
    const newRange = newMax - newMin;
    return ((num - oldMin) / oldRange * newRange) + newMin;
}

function invertedMap(oldMin, oldMax, newMin, newMax, num) {
    const oldRange = oldMax - oldMin;
    const newRange = newMax - newMin;
    return newMax - ((num - oldMin) / oldRange * newRange) + newMin;
}