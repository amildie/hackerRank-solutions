function processData(input) {

    var n = input.split('\n')[0];
    
    for(var j = 0; j < n; ++j) {
        var word = input.split('\n')[j+1] += 0;
        var m = 0;

        for(var i = 0; i < word.length; ++i) {
            if(word[i] == word[i+1]) {
                m++;
            }
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

