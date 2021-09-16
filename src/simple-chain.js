import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return (chain =='')? 0 : chain.split('~~').length;
  },
  addLink(value) {
    (value!=undefined)? this.chain += `(${value})~~`:this.chain += `()~~`;
  },
  removeLink(position) {
    if(position>this.getLength()||position<this.getLength||position!=Number){
      alert(`You can't remove incorrect link!`)
    }else{
      let arr = this.chain.split('~~').splice(position, 1)
      this.chain = arr.join('~~');
    }    
  },
  reverseChain() {
    let arr = this.chain.split('~~').reverse();
    this.chain = arr.join('~~');
  },
  finishChain() {
    let fullChain = chain.slice(0, -2);
    this.chain = '';
    return fullChain;
  }
};



// xport default {
//   getLength(chain) {
//     return (chain =='')? 0 : chain.split('~~').length;
//   },
//   addLink(value) {
//     (value!=undefined)? this.chain += `(${value})~~`:this.chain += `()~~`;
//   },
//   removeLink(position) {
//     if(position>this.getLength()||position<this.getLength||position!=Number){
//       alert(`You can't remove incorrect link!`)
//     }else{
//       let arr = this.chain.split('~~').splice(position, 1)
//       this.chain = arr.join('~~');
//     }
    
//   },
//   reverseChain() {
//     let arr = this.chain.split('~~').reverse();
//     this.chain = arr.join('~~');
//   },
//   finishChain() {
//     let fullChain = chain.slice(0, -2);
//     this.chain = '';
//     return fullChain;
//   }