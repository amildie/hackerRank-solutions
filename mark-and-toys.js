// https://www.hackerrank.com/challenges/mark-and-toys

function processData(input) {
    lines = input.split('\n');
    
    var aux = lines.shift().split(' ');
    var n = aux[0];
    var k = aux[1];
    var a = lines.shift().split(' ').sort(function(a, b){return a-b});
    
    var sum = 0, count = 0;
    for(var i = 0; i < n; ++i) {
        sum += parseInt(a[i]);
        if(sum > k) {
            break;
        }
        count++;
    }

    console.log(count);
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