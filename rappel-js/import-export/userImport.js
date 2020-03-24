/* 
While import is indeed part of ES6, 
it is unfortunately not yet supported in NodeJS by default.
Until support shows up natively, you'll have to continue using classic require statements:
const express = require("express");
*/

import {getFruit, getName} from './user.js';

console.log(getFruit('fraise'));
console.log(getName());

document.getElementById('nom').innerHTML =  getName();