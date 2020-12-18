
// # Legionaries

function sumFibonacci(num) {
    
    let fib0 = 0, fib1 = 1;
    let fib = 1, sum = fib0;

    while (fib < num) {
      if (isOdd(fib)) {
        sum += fib1;
      }
      fib = fib0 + fib1;
      fib1 += fib0;
      fib0 = fib1 - fib0;
    }
  
    return sum;
  
    function isOdd(n) {
      return n % 2;
    }
  }
  
  console.log(sumFibonacci(10000));

// # Legionaries

function calc(x) {
    var ct= 0;
    for (i= 1; i<= x; i++) {
      const r = convToRoman(i);
      r.replace(/X/g, function(){
        ct++;
      });
    }
    return ct;
}
  
function convToRoman(n) {
    let dg = String(n).split("");
    if (typeof n !== "number") throw Error();
    let k = String(";C;CC;CCC;CD;D;DC;DCC;DCCC;CM;;X;XX;XXX;XL;L;LX;LXX;LXXX;XC;;I;II;III;IV;V;VI;VII;VIII;IX").split(';');
    var nx = "", i = 3;
    while (i--) {
        var val = Number(dg.pop()) + i * 10
        nx = (k[val] || "") + nx;
    }
    return Array(+dg.join("") + 1).join("M") + nx;
}
  
console.log(calc(2660));

console.log ('-------------------------------------------------------------');

let dg = String('23434').split("");
console.log(typeof dg.pop());

console.log('-------------------------------------------------------------');


// # Numeric Palindromes Sum

function sumOfPalindromes(n){
    let x = 0;
    for (let i = 0; i < n; i++) {
      //let v = (''+i).split('');
     // v = v.reverse();
      //v = v.join('');
      let v = (''+i).split('').reverse().join('');

      if(i == v){
          x += i;
      }else{
          x += 0;
      }
    }
    return x;
}

console.log(sumOfPalindromes(10000));
console.log(sumOfPalindromes(24));

// # Epigram on Failure


function sum(string) {
    const VOWELS = ["a", "e", "i", "o", "u"];
    return (
      string
        .replace(/[^a-zA-Z]*/g, "")
        .split("")
        .reduce((acc, char, array) => {
          return acc + char.charCodeAt(0) * (isVowel() ? -1 : 1);
  
          function isVowel() {
            return VOWELS.includes(char);
          }
        }, 0)
    );
  }
  
  ///require("assert").equal(sum("iffy"), 220);
  
  console.log(
    sum(
      "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve."
    )
  );

  // test object functions.. 

  users = {'name':'aminu','us2':'sadiatu','us3':'maimuna'};
  const myobj = {users, 'aminu':'hello'};

  console.log(myobj);