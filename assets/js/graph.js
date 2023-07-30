cosGraphCtx.beginPath();
cosGraphCtx.moveTo(0, cosGraph.height/2);
cosGraphCtx.lineTo(cosGraph.width, cosGraph.height/2);
cosGraphCtx.lineWidth = 0.3;
cosGraphCtx.stroke();

cosGraphCtx.beginPath();
cosGraphCtx.moveTo(cosGraph.width/6, 0);
cosGraphCtx.lineTo(cosGraph.width/6, cosGraph.height);
cosGraphCtx.lineWidth = 0.3;
cosGraphCtx.stroke();

function cosGraphRender(angle) {
    cosGraphCtx.fillStyle = 'red';

    const inputA = 1;
    const inputB = 1;
    const inputC = 1;
    const inputD = 0;

    const i1 = inputA / 3;
    const i2 = inputB * 2;
    const i3 = inputC;
    const i4 = (2 - (Math.ceil(Math.ceil(inputD/2) / 2) * 2 - inputD/2)) == 2 ? 0 : (2 - (Math.ceil(Math.ceil(inputD/2) / 2) * 2 - inputD/2)) * pi;

    const value = i1*cos(angle);

    const x = map(0, 2*pi, cosGraph.width/6, cosGraph.width*5/6, angle * i3/i2 + i4);
    const y = invertedMap(-1, 1, 0, cosGraph.height, value);

    const shift = Math.ceil((cosGraph.width*2/3) / (cosGraph.width*2/3 * i3/i2));
    const minX = Math.floor(-cosGraph.width*1/6 / (cosGraph.width*2/3 * i3/i2) - shift);
    const maxX = Math.ceil(cosGraph.width*5/6 / (cosGraph.width*2/3 * i3/i2) + shift);

    const radius = 0.75; // radius of the points

    for (let i = minX; i < maxX; i++) {
        cosGraphCtx.beginPath();
        cosGraphCtx.arc(x + i*(cosGraph.width*2/3) * i3/i2, y, radius, 0, 2 * pi);
        cosGraphCtx.fill();
    }
}

function sinGraphRender(angle) {
    cosGraphCtx.fillStyle = 'blue';

    const inputA = 1;
    const inputB = 1;
    const inputC = 1;
    const inputD = 0;

    const i1 = inputA / 3;
    const i2 = inputB * 2;
    const i3 = inputC;
    const i4 = (2 - (Math.ceil(Math.ceil(inputD/2) / 2) * 2 - inputD/2)) == 2 ? 0 : (2 - (Math.ceil(Math.ceil(inputD/2) / 2) * 2 - inputD/2)) * pi;

    const value = i1*sin(angle);

    const x = map(0, 2*pi, sinGraph.width/6, sinGraph.width*5/6, angle * i3/i2 + i4);
    const y = invertedMap(-1, 1, 0, sinGraph.height, value);

    const shift = Math.ceil((sinGraph.width*2/3) / (sinGraph.width*2/3 * i3/i2));
    const minX = Math.floor(-sinGraph.width*1/6 / (sinGraph.width*2/3 * i3/i2) - shift);
    const maxX = Math.ceil(sinGraph.width*5/6 / (sinGraph.width*2/3 * i3/i2) + shift);

    const radius = 0.75; // radius of the points

    for (let i = minX; i < maxX; i++) {
        cosGraphCtx.beginPath();
        cosGraphCtx.arc(x + i*(sinGraph.width*2/3) * i3/i2, y, radius, 0, 2 * pi);
        cosGraphCtx.fill();
    }
}