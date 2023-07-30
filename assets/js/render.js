// coords
function coordsConvertor(value) {
    const x = value.x;
    const y = value.y;
    return {
        x: x*340 + 375,
        y: -y*340 + 375
    }
}

function unitConverotor(value) {
    const x = value.x;
    const y = value.y;
    return {
        x: (x-375) / 340,
        y: (y-375) / -340
    }
}

// triangle
function pointA(coords) {
    document.getElementById(`lineCos`).x1.baseVal.value = coords.x;
    document.getElementById(`lineCos`).y1.baseVal.value = coords.y;
    document.getElementById(`lineRadius`).x2.baseVal.value = coords.x;
    document.getElementById(`lineRadius`).y2.baseVal.value = coords.y;
}

function pointB(coords) {
    document.getElementById(`lineCos`).x2.baseVal.value = coords.x;
    document.getElementById(`lineCos`).y2.baseVal.value = coords.y;
    document.getElementById(`lineSin`).x1.baseVal.value = coords.x;
    document.getElementById(`lineSin`).y1.baseVal.value = coords.y;
}

function pointC(coords) {
    document.getElementById(`lineSin`).x2.baseVal.value = coords.x;
    document.getElementById(`lineSin`).y2.baseVal.value = coords.y;
    document.getElementById(`lineRadius`).x1.baseVal.value = coords.x;
    document.getElementById(`lineRadius`).y1.baseVal.value = coords.y;
}

function triangle() {
    const A = triangleOrientation ? {x: 0, y: 0} : {x: trig.cos, y: trig.sin};
    const B = triangleOrientation ? {x: trig.cos, y: 0} : {x: 0, y: trig.sin};
    const C = triangleOrientation ? {x: trig.cos, y: trig.sin} : {x: 0, y: 0};

    pointA(coordsConvertor(A));
    pointB(coordsConvertor(B));
    pointC(coordsConvertor(C));
}

// radius axis
function radiusAxis() {
    const axis1 = {x: trig.cos*-10, y: trig.sin*-10};
    const axis2 = {x: trig.cos*10, y: trig.sin*10};

    const coords1 = coordsConvertor(axis1);
    const coords2 = coordsConvertor(axis2);

    document.getElementById(`lineRadiusAxis`).x1.baseVal.value = coords1.x;
    document.getElementById(`lineRadiusAxis`).y1.baseVal.value = coords1.y;
    document.getElementById(`lineRadiusAxis`).x2.baseVal.value = coords2.x;
    document.getElementById(`lineRadiusAxis`).y2.baseVal.value = coords2.y;
}

// tangent axis
function tangentAxis() {
    if (trig.tan == "Not defined") return;

    const axis1 = {x: 1, y: 0};
    const axis2 = {x: 1, y: trig.tan};

    const coords1 = coordsConvertor(axis1);
    const coords2 = coordsConvertor(axis2);

    document.getElementById(`lineTan`).x1.baseVal.value = coords1.x;
    document.getElementById(`lineTan`).y1.baseVal.value = coords1.y;
    document.getElementById(`lineTan`).x2.baseVal.value = coords2.x;
    document.getElementById(`lineTan`).y2.baseVal.value = coords2.y;
}

// cotangent axis
function cotangentAxis() {
    if (trig.cot == "Not defined") return;

    const axis1 = {x: 0, y: 1};
    const axis2 = {x: trig.cot, y: 1};

    const coords1 = coordsConvertor(axis1);
    const coords2 = coordsConvertor(axis2);

    document.getElementById(`lineCot`).x1.baseVal.value = coords1.x;
    document.getElementById(`lineCot`).y1.baseVal.value = coords1.y;
    document.getElementById(`lineCot`).x2.baseVal.value = coords2.x;
    document.getElementById(`lineCot`).y2.baseVal.value = coords2.y;
}

// values
function cosValue() {
    const chartElemnet = document.getElementById(`cosTableValue`);
    const elmnt = document.getElementById(`cosValue`);
    elmnt.textContent = trig.cos.toFixed(4);
    chartElemnet.textContent = trig.cos.toFixed(4);

    if (triangleOrientation) {
        switch (true) {
            case Math.abs(trig.cos) < 0.4:
                elmnt.setAttribute("x", coordsConvertor({x: trig.cos >= 0 ? 0.2 : -0.2}).x - elmnt.getBBox().width/2);
                break;
            default:
                elmnt.setAttribute("x", coordsConvertor({x: trig.cos/2}).x - elmnt.getBBox().width/2);
                break;
        }
    
        elmnt.setAttribute("y", 365);

    } else {
        switch (true) {
            case Math.abs(trig.cos) >= 0.5:
                elmnt.setAttribute("x", coordsConvertor({x: trig.cos/2}).x - elmnt.getBBox().width/2);
                elmnt.setAttribute("y", coordsConvertor({y: trig.sin}).y + (trig.sin > 0 ? -10 : 5 + elmnt.getBBox().height));
                break;
            case Math.abs(trig.cos) >= 0.18 && trig.cos < 0:
                elmnt.setAttribute("x", coordsConvertor({x: trig.cos/2}).x - elmnt.getBBox().width/2);
                elmnt.setAttribute("y", coordsConvertor({y: trig.sin}).y + (trig.sin > 0 ? 5 + elmnt.getBBox().height : -10));
                break;
            default:
                elmnt.setAttribute("x", 317.7);
                elmnt.setAttribute("y", trig.sin < 0 ? 699.4 : 62.7);
                break;
        }
    }
}

function sinValue() {
    const elmnt = document.getElementById(`sinValue`);
    const chartElemnet = document.getElementById(`sinTableValue`);
    elmnt.textContent = trig.sin.toFixed(4);
    chartElemnet.textContent = trig.sin.toFixed(4);

    if (!triangleOrientation) {
        switch (true) {
            case Math.abs(trig.sin) < 0.3:
                elmnt.setAttribute("y", coordsConvertor({y: trig.sin >= 0 ? 0.15 : -0.15}).y - elmnt.getBBox().height/2 + (trig.sin >= 0 ? elmnt.getBBox().height : 0));
                break;
            default:
                elmnt.setAttribute("y", coordsConvertor({y: trig.sin/2}).y - elmnt.getBBox().height/2 + (trig.sin >= 0 ? elmnt.getBBox().height : 0));
                break;
        }

        elmnt.setAttribute("x", trig.cos >= 0 ? 365 - elmnt.getBBox().width : 385);

    } else {
        switch (true) {
            case Math.abs(trig.sin) >= 0.7:
                elmnt.setAttribute("x", coordsConvertor({x: trig.cos}).x + (trig.cos > 0 ? 10 : -10 - elmnt.getBBox().width));
                elmnt.setAttribute("y", coordsConvertor({y: trig.sin/2}).y + elmnt.getBBox().height/2);
                break;
            case (Math.abs(trig.sin) >= 0.1 && trig.sin > 0) || (Math.abs(trig.sin) >= 0.2 && trig.sin < 0):
                elmnt.setAttribute("x", coordsConvertor({x: trig.cos}).x + (trig.cos > 0 ? -10 - elmnt.getBBox().width : 10));
                elmnt.setAttribute("y", coordsConvertor({y: trig.sin/2}).y + elmnt.getBBox().height/2);
                break;
            default:
                elmnt.setAttribute("x", trig.cos < 0 ? 46.6 : 654.3);
                elmnt.setAttribute("y", 366.5);
                break;
        }
    }
}

function tanValue() {
    const elmnt = document.getElementById(`tanValue`);
    const chartElemnet = document.getElementById(`tanTableValue`);
    elmnt.textContent = trig.tan === "Not defined" ? "Not defined" : trig.tan.toFixed(4);
    chartElemnet.innerHTML = trig.tan === "Not defined" ? "Not defined" : trig.tan.toFixed(4);

    if (trig.tan == "Not defined") {
        elmnt.setAttribute("y", coordsConvertor({y: 0.5}).y - elmnt.getBBox().width/2);
        elmnt.setAttribute("x", 725);
        elmnt.setAttribute("transform", `rotate(90, ${elmnt.getAttribute("x")}, ${elmnt.getAttribute("y")})`);
        return;
    }

    switch (true) {
        case Math.abs(trig.tan) < 0.4:
            elmnt.setAttribute("y", coordsConvertor({y: trig.tan >= 0 ? 0.2 : -0.2}).y - elmnt.getBBox().width/2);
            break;
        case Math.abs(trig.tan) > 1:
            elmnt.setAttribute("y", coordsConvertor({y: trig.tan >= 0 ? 0.5 : -0.5}).y - elmnt.getBBox().width/2);
            break;
        default:
            elmnt.setAttribute("y", coordsConvertor({y: trig.tan/2}).y - elmnt.getBBox().width/2);
            break;
    }

    elmnt.setAttribute("x", 725);
    elmnt.setAttribute("transform", `rotate(90, ${elmnt.getAttribute("x")}, ${elmnt.getAttribute("y")})`);
}

function cotValue() {
    const elmnt = document.getElementById(`cotValue`);
    const chartElemnet = document.getElementById(`cotTableValue`);
    elmnt.textContent = trig.cot === "Not defined" ? "Not defined" : trig.cot.toFixed(4);
    chartElemnet.textContent = trig.cot === "Not defined" ? "Not defined" : trig.cot.toFixed(4);

    if (trig.cot == "Not defined") {
        elmnt.setAttribute("x", coordsConvertor({x: 0.5}).x - elmnt.getBBox().width/2);
        elmnt.setAttribute("y", 25);
        return;
    }

    switch (true) {
        case Math.abs(trig.cot) < 0.4:
            elmnt.setAttribute("x", coordsConvertor({x: trig.cot >= 0 ? 0.2 : -0.2}).x - elmnt.getBBox().width/2);
            break;
        case Math.abs(trig.cot) > 1:
            elmnt.setAttribute("x", coordsConvertor({x: trig.cot >= 0 ? 0.5 : -0.5}).x - elmnt.getBBox().width/2);
            break;
        default:
            elmnt.setAttribute("x", coordsConvertor({x: trig.cot/2}).x - elmnt.getBBox().width/2);
            break;
    }

    elmnt.setAttribute("y", 25);
}

// rendering
function render(angle) {
    trig.cos = cos(angle);
    trig.sin = sin(angle);
    trig.tan = tan(angle);
    trig.cot = cot(angle);

    radiusAxis();
    triangle();
    tangentAxis();
    cotangentAxis();

    cosValue();
    sinValue();
    tanValue();
    cotValue();

    cosGraphRender(angle);
    sinGraphRender(angle);

    //console.log(`cos: ${trig.cos} \nsin: ${trig.sin} \ntan: ${trig.tan} \ncotan: ${trig.cot}`);
}

setInterval(() => {
    document.getElementById("plane-svg").style.transform = `scale(${(window.innerHeight*0.8)/750})`;
    const scale = window.getComputedStyle(document.getElementById("plane-svg")).getPropertyValue("transform").match(/matrix.*\((.+)\)/)[1].split(", ")[0];
    
    document.getElementById("plane-svg").style.left = `${40 + (750*scale-750) / 2}px`;

    document.getElementById("values").style.left = `${100 + 750*scale}px`;
}, 10);