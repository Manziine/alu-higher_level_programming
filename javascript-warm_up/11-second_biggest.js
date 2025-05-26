#!/usr/bin/node

const args = process.argv.slice(2).map(Number); // Convert arguments to numbers

if (args.length < 2) {
  console.log(0);
} else {
  console.log([...new Set(args)].sort((a, b) => b - a)[1]);
}
