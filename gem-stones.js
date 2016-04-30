// https://www.hackerrank.com/challenges/gem-stones

function processData(input) {
    var lines = input.split('\n');
    var n = lines.shift();
    var cG = 0;
    var elems = [];

    for(var i = 0; i < lines[0].length; ++i) {
        if(elems.indexOf(lines[0][i]) == -1) {
            elems.push(lines[0][i]);
        }
    }

    for(var i = 0; i < elems.length; ++i) {
        
        var isGemElm = true;      
        for(var j = 1; j < n; ++j) {
            if(lines[j].indexOf(elems[i]) <= -1) {
                isGemElm = false;
            }
        }

        if(isGemElm) {
            cG++;
        }

    }

    console.log(cG);
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