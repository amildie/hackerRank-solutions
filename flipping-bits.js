// https://www.hackerrank.com/challenges/flipping-bits

function processData(input) {
    var a = input.split('\n');
    var n = a.shift();
    
    for(var i = 0; i < a.length; ++i) {
        console.log(~a[i] >>> 0);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
