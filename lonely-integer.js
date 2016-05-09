// https://www.hackerrank.com/challenges/lonely-integer

function processData(input) {

    var lines = input.split('\n');
    var n = lines.shift();
    var a = lines.shift().split(' ').sort(function(a, b){return a-b});
    var l;

    if(a[0] != a[1]) {
        l = a[0];
    } else if(a[a.length-1] != a[a.length-2]) {
        l = a[a.length-1];
    } else {
        for(var i = 1; i < a.length-1; ++i) {
            if(a[i] != a[i-1] && a[i] != a[i+1]) {
                l = a[i];
            }
        }    
    }

    console.log(l);

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
