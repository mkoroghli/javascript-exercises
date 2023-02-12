const repeatString = function (str, numb) {
let result = '';
for (let i=0; i<numb; i++) {
result += str;
}
return result;
}

module.exports = repeatString;