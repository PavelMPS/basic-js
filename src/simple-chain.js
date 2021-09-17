import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default chainMaker={
  chain: '',
  getLength() {
    return this.chain.split('~~').length - 1;
    	
  },
  addLink(value) {
    (value!=undefined)? this.chain += `(${value})~~`:this.chain += `()~~`;
    return this;
  },
  removeLink(position) {
    if(typeof(position)!='number'){
    throw new Error(`You can't remove incorrect link!`)   
  }
    position = position -1;
    if(position>=this.getLength()||position<0){
    throw new Error(`You can't remove incorrect link!`)
  }
    let arr = this.chain.split('~~');
    arr.splice(position, 1)
    this.chain=arr.join('~~');  
    return this;
  },
  reverseChain() {
    let arr = this.chain.split('~~').reverse();
    arr.shift();
    arr.push('');
    this.chain = arr.join('~~');
    return this;
  },
  finishChain() {
    let fullChain = this.chain.slice(0, -2);
    this.chain = '';
    return fullChain;
  }
};
