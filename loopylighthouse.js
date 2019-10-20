for(let i = 100; i <= 200; i++) {     //loops from 100 to 200 in increments of 1
  if (i % 3 === 0 && i % 4 === 0) {       //checks if i is a multiple of 3 AND 4
    console.log("LoopyLighthouse");   
  } else if (i % 3 === 0) {             //checks if i is a multiple of 3
    console.log("Loopy");             
  } else if (i % 4 === 0) {             //checks if i is a multiple of 4
    console.log("Lighthouse");    
  } else{                             //if none of the above are true it prints i
    console.log(i); 
  }
}