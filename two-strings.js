function processData(input) {
    var n = input.split('\n')[0];

    for(var i = 0, j = 0; i < n; i++, j+=2) {
        var str1 = input.split('\n')[j+1];
        var str2 = input.split('\n')[j+2];

        var exists = false;
        for(var t = 0; t < str1.length; ++t) {
            if (str2.indexOf(str1[t]) >= 0) {
                exists = true;
                break;
            }
        }

        if(!exists) {
            console.log('NO');
        } else {
            console.log('YES');
        }

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
