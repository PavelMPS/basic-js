import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
     let arr1 = arr;
     let x;
     if (Array.isArray(arr)) {
          for (let i = 0; i < arr.length; i++) {
               if (arr[i] === '--discard-next') {
                    x = arr1.splice(i, 2);
               } else if (arr[i] == '--discard-prev') {
                    x = arr1.splice(i - 1, 2)
               } else if (arr[i] == '--double-next') {
                    x = arr1.splice(i, 1);
                    arr1.splice(i, 0, arr[i]);
               } else if (arr[i] == '--double-prev') {
                    x = arr1.splice(i, 1);
                    arr1.splice(i - 1, 0, arr1[i - 1]);
               }
          }
          return arr1;
     } else return false;
}
