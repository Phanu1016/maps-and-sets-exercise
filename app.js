// Quick Question #1
new Set([1,1,2,2,3,4]) // {1,2,3,4}

// Quick Question #2
[...new Set("referee")].join("") // "ref"

// Quick Question #3
let m = new Map();
m.set([1,2,3], true); // 0: {Array(3) => true}
m.set([1,2,3], false); // 1: {Array(3) => false}
