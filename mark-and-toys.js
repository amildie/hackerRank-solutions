// https://www.hackerrank.com/challenges/mark-and-toys

function processData(input) {
    lines = input.split('\n');
    
    var t = lines.shift().split(' ');
    var n = t[0];
    var k = t[1];
    var a = lines.shift().split(' ').sort(function(a, b){return a-b});
    
    var s = 0, c = 0;
    for(var i = 0; i < n; ++i) {
        s += parseInt(a[i]);
        if(s > k) {
            break;
        }
        c++;
    }

    console.log(c);
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