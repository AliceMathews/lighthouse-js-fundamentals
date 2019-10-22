function range (start, end, step) {
  let myArray = [];
  if (step > 0) {
    for(let i = start; i <= end; i += step) {
      myArray.push (i);
    } 
    
  } else{
    myArray = [];
  }
  return myArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range(5, 10, -1)); 