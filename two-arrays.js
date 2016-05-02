function processData(input) {
    lines = input.split('\n');
    lines.shift();

    while(lines.length > 0) {

        var aux = lines.shift().split(' ');
        var n = aux[0];
        var k = aux[1];

        var a = lines.shift().split(' ').sort(function(a, b){return a-b}); 
        var b = lines.shift().split(' ').sort(function(a, b){return b-a});
        
        var res = true;
        for(var i = 0; i < a.length; ++i) {
            if((parseInt(a[i])+parseInt(b[i])) < k) {
                res = false;
                break;
            }
        }

        res ? console.log('YES') : console.log('NO')
        
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
