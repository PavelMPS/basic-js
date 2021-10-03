import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
   calculateDepth(arr){
     if(!Array.isArray(arr)) return 1;
     let maxDepth=1;
     arr.forEach(item=>{
       if(Array.isArray(item)){
         let currentDepth = this.calculateDepth(item)+1;
        if(currentDepth>maxDepth) maxDepth=currentDepth;
       }
     })
     return maxDepth;
  }
}


