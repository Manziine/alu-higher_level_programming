#!/usr/bin/node

const x = Number.parseInt(process.argv[2]);

console.log(Number.isNaN(x) || x <= 0 ? 'Missing number of occurrences' : 'C is fun\n'.repeat(x).trim());
