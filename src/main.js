import vertexShader from './shader/vertexShader.glsl'

import fragmentShader from './shader/fragmentShader.glsl'

const u = require('gl-util');

const canvas = document.getElementById("canvas");

const gl = u.context(canvas);

const shaderProgram = u.program(gl, vertexShader, fragmentShader);

u.attribute(shaderProgram, 'position', [0,0, 1,0, 0,1]);
u.uniform(shaderProgram, 'color', [1, .2, 0, 1.]);

gl.drawArrays(gl.TRIANGLES, 0, 3);
