// https://www.hackerrank.com/challenges/plus-minus

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var a = b = c = 0;
    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] > 0) {
            a++;
        } else if(arr[i] < 0) {
            b++;
        } else {
            c++;
        }
    }

    console.log((a/n).toFixed(6));
    console.log((b/n).toFixed(6));
    console.log((c/n).toFixed(6));
}