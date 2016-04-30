// https://www.hackerrank.com/challenges/the-love-letter-mystery

function processData(input) {
    lines = input.split('\n');
    var n = lines.shift();

    for(var i = 0; i < n; ++i) {
        var word = lines.shift();
        var m = 0;

        for(var j = 0, k = word.length-1; j < word.length; j++, k--) {
            if(j >= k) {
                break;
            }

            m += Math.abs(word[j].charCodeAt(0)-word[k].charCodeAt(0));
        }

        console.log(m);
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