// https://www.hackerrank.com/challenges/counting-valleys/

'use strict';

import { WriteStream, createWriteStream } from "fs";
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

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps: number, path: string): number {
  let res = 0;
  let currentLevel = 0; 
  let isInValley = false;
  
  for(let i = 0; i < steps; ++i) {
    currentLevel = path[i] === 'U' ? currentLevel+1 : currentLevel-1;
    if(!isInValley && currentLevel < 0) {
      res++;
    }
    isInValley = currentLevel < 0;
  }

  return res;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const steps: number = parseInt(readLine().trim(), 10);

    const path: string = readLine();

    const result: number = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
