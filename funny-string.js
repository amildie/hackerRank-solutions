// https://www.hackerrank.com/challenges/funny-string

function processData(input) {
    var a = input.split('\n');
    a.shift();
    
    loop:
    while(a.length > 0) {
        var s = a.shift();
        var r = s.split('').reverse().join('');

        for(var i = 1; i < s.length; ++i) {
            var n = Math.abs(s[i].charCodeAt(0)-s[i-1].charCodeAt(0));
            var m = Math.abs(r[i].charCodeAt(0)-r[i-1].charCodeAt(0));
            if(n != m) {
                console.log('Not Funny');
                continue loop;
            }
        }

        console.log('Funny');
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
