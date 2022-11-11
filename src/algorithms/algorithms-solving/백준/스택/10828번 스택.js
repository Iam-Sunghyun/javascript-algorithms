const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
const stack = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].split(" ").length > 1) {
    stack.push(Number(arr[i].split(" ")[1]));
    
  } else if (arr[i] === "top") {
        if(stack.length > 0) console.log(stack[stack.length - 1]);
        else console.log(-1);
    
  } else if (arr[i] === "empty") {
        if(stack.length === 0) console.log(1);
        else console.log(0);

  } else if (arr[i] === "size") {
        console.log(stack.length);
    
  } else if (arr[i] === "pop") {
        if(stack.length > 0) console.log(stack.pop());
        else console.log(-1);
  }
}