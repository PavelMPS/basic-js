import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
   let nStr = String(n).split('');
   let max=0;
   for(let i=0;i<nStr.length;i++){
      let arr = nStr.slice();     
      arr.splice(i, 1);
      max=Math.max(max,+arr.join(''))
   }   
   return max;  
}
