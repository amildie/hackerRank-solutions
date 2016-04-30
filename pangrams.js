// https://www.hackerrank.com/challenges/pangrams

function processData(input) {

    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(var i = 0; i < input.length; ++i) {
        if(input[i] != ' ') {
            var index = letters.indexOf(input[i].toLowerCase());
            if(index > -1) {
                letters.splice(index, 1);
            }
        }
    }

    if(letters.length > 0) {
        console.log('not pangram');
    } else {
        console.log('pangram');
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