/*
1. Given the array [1,2,3,4,5,6,7,8,10], 
write a function that will remove all odd numbers.  
*/
let myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const removeOddNums = (array: number[]) => {
  try {
    const resultArr = array.filter((e) => e % 2 === 0);
    console.log('test1 result', resultArr);
    return resultArr;
  } catch (err) {
    console.log('test1 err', err);
  }
};

removeOddNums(myArray);
