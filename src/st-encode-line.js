import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default  function encodeLine(str) {
   let arr=str.split('').sort();
   console.log(arr)
   let arr1=[];
   let counter=1;
   for(let i=0;i<arr.length;i++){
     
     if(arr[i]===arr[i+1]){
      counter++;
     } else if (counter === 1) {
      arr1.push(arr[i]);
    } else {
        arr1.push(counter);
        arr1.push(arr[i]);
       
     }
     counter=1;
   }
   return arr1.join('');
}
// console.log(encodeLine('aaabbbccd'))
