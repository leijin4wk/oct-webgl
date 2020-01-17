import {initShaderProgram} from './util/shaderUtil'

import vertexShader from './shader/vertexShader.glsl'

import fragmentShader from './shader/fragmentShader.glsl'

const canvas = document.getElementById("canvas");

const gl = canvas.getContext("webgl");

const shaderProgram = initShaderProgram(gl, vertexShader, fragmentShader);

gl.useProgram(shaderProgram);

let positionLocation = gl.getAttribLocation(shaderProgram, "a_position");

let buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0,  1.0, -1.0,  1.0, 1.0, -1.0, 1.0,  1.0]), gl.STATIC_DRAW);

gl.enableVertexAttribArray(positionLocation);

gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

gl.drawArrays(gl.TRIANGLES, 0, 6);
