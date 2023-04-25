/*Only Odds */

const array1 = [2, 4, 6, 8, 11, 20, 15, 22];
const odd1 = [];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd2 = [];
const array3 = [70, 42, 55, 81, 21, 91, 34];
const odd3 = [];
const array4 = [2, 4, 6, 8, 10, 11, 12];
const odd4 = [];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 2 !== 0) {
    odd1.push(array1[i]);
  }
}
console.log(odd1);


for (let j = 0; j < array2.length; j++) {
  if (array2[j] % 2 !== 0) {
    odd2.push(array2[j]);
  }
}
console.log(odd2);


for (let k = 0; k < array3.length; k++) {
  if (array3[k] % 2 !== 0) {
    odd3.push(array3[k]);
  }
}
console.log(odd3);


for (let l = 0; l < array4.length; l++) {
  if (array4[l] % 2 !== 0) {
    odd4.push(array4[l]);
  }
}
console.log(odd4);

/*Vowel vs Consonant */

const word1 = "hello";
let consos1 = 0;
let voW1 = 0;

const word2 = "ukelele"
let consos2 = 0;
let voW2 = 0;

const word3 ="awesome";
let consos3 = 0;
let voW3 = 0;

const word4 = "onomonopia";
let consos4 = 0;
let voW4 = 0;

const word5 = "textbook";
let consos5 = 0;
let voW5 = 0;

//const vowels = ['a', 'e', 'i', 'o', 'u'];//


for (let i = 0; i < word1.length; i++) {
  const char = word1[i];

  if (char === 'a' || 
      char === 'e' || 
      char === 'i' || 
      char === 'o' || 
      char === 'u'
  ) {
    voW1++;

  } else {

    consos1++;
  }

}

 console.log(word1 + " has " + consos1 + " consonants and " + voW1 + " vowels");

for (let j = 0; j < word2.length; j++) {
  const char = word2[j];

  if (char === 'a' || 
      char === 'e' || 
      char === 'i' || 
      char === 'o' || 
      char === 'u'
  ) {
    voW2++;

  } else {

    consos2++;
  }

}

 console.log(word2 + " has " + consos2 + " consonants and " + voW2 + " vowels");



for (let k = 0; k < word3.length; k++) {
  const char = word3[k];

  if (char === 'a' || 
      char === 'e' || 
      char === 'i' || 
      char === 'o' || 
      char === 'u'
  ) {
    voW3++;

  } else {

    consos3++;
  }

}
console.log(word3 + " has " + consos3 + " consonants and " + voW3 + " vowels");  


for (let l = 0; l < word4.length; l++) {
  const char = word4[l];

  if (char === 'a' || 
      char === 'e' || 
      char === 'i' || 
      char === 'o' || 
      char === 'u'
  ) {
    voW4++;

  } else {

    consos4++;

  }

}
console.log(word4 + " has" + consos4 + " consonants and " + voW4 + " vowels")


for (let m = 0; m < word5.length; m++) {
  const char = word5[m];

  if (char === 'a' || 
      char === 'e' || 
      char === 'i' || 
      char === 'o' || 
      char === 'u'
  ) {
    voW5++;

  } else {

    consos5++;
  }

}
console.log(word5 + " has" + consos5 + " consonants and " + voW5 + " vowels")


/*Reverse Array*/

const num1 = [1, 2, 3];
const num1Rev = [];
const num2 = [1, 3, 5, 7, 9, 11];
const num2Rev = [];
const num3 = [20, 50, 30, 60, 200];
const num3Rev = []
const num4 = [1, -1, 2, -3, 5, -8, 13];
const num4Rev = [];

for (let i = num1.length - 1; i >= 0; i--){
  const numberI = num1[i];

  num1Rev.push(numberI);
  }
console.log(num1Rev);


for (let j = num2.length - 1; j >= 0; j--){
  const numberJ = num2[j];

  num2Rev.push(numberJ);
  }
console.log(num2Rev);


for (let k = num3.length - 1; k >= 0; k--){
  const numberK = num3[k];

  num3Rev.push(numberK);
  }
console.log(num3Rev);


for (let l = num4.length - 1; l >= 0; l--){
  const numberL = num4[l];

  num4Rev.push(numberL);
  }
console.log(num4Rev)


/*FizzBuzz*/

for (i = 1; i <= 100; i++) {

  if ((i % 3 === 0 && i % 5 === 0) || i % 15 === 0) {
    console.log("FizzBuzz");

  } else if (i % 3 === 0) {
    console.log("Fizz");

  } else if (i % 5 === 0) {
    console.log("Buzz");

  } else {
    console.log(i);
  }
  
}