import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default chainMaker = {
  chain: '',
  getLength: function() {
    return (this.chain =='')? 0 : this.chain.split('~~').length;
  },
  addLink: function(value) {
   return (value!=undefined)? this.chain += `(${value})~~`:this.chain += `()~~`;
  },
  removeLink: function(position) {
    if(position>this.getLength()||position<this.getLength||position!=Number){
      alert(`You can't remove incorrect link!`)
    }else{
      let arr = this.chain.split('~~').splice(position, 1)
      this.chain = arr.join('~~');
    }    
  },
  reverseChain: function() {
    let arr = this.chain.split('~~').reverse();
    this.chain = arr.join('~~');
  },
  finishChain: function() {
    let fullChain = chain.slice(0, -2);
    this.chain = '';
    return fullChain;
  }
};


















// const chainMaker = {
//   chain: '',
//   getLength: function() {
//     return (this.chain =='')? 0 : this.chain.split('~~').length;
//   },
//   addLink: function(value) {
//    return (value!=undefined)? this.chain += `(${value})~~`:this.chain += `()~~`;
//   },
//   removeLink: function(position) {
//     if(position>this.getLength()||position<this.getLength||position!=Number){
//       alert(`You can't remove incorrect link!`)
//     }else{
//       let arr = this.chain.split('~~').splice(position, 1)
//       this.chain = arr.join('~~');
//     }    
//   },
//   reverseChain: function() {
//     let arr = this.chain.split('~~').reverse();
//     this.chain = arr.join('~~');
//   },
//   finishChain: function() {
//     let fullChain = chain.slice(0, -2);
//     this.chain = '';
//     return fullChain;
//   }
// };



// getLength() {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// addLink(/* value */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// removeLink(/* position */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// reverseChain() {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// finishChain() {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }