// https://www.hackerrank.com/challenges/the-birthday-bar/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const n: number = parseInt(readLine());
    const arr = readLine().split(` `).map(x=>+x);
    const dm = readLine().split(` `).map(x=>+x);
    const d = dm[0];
    const m = dm[1];

    let c: number = 0;
    for (let i = 0; i < n; ++i) {
      const subArr = arr.slice(i, i+m);
      const subArrSum = subArr.reduce((a,b) => a+b, 0);
      if (subArr.length === m && subArrSum === d) {
        c++;
      }
    }

    console.log(c);
}