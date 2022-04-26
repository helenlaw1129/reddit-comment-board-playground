/*
2. Given the array [1,2,3,4,5,6,7,8,10], 
write a function that will calculate the  
sum of all odd numbers. 
*/

let myArray2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const sumUpOddNums = (array: number[]) => {
  try {
    let result: number = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) {
        result += array[i];
      }
    }
    console.log('test2 result', result);
    return result;
  } catch (err) {
    console.log('test2 err', err);
  }
};

sumUpOddNums(myArray2);
