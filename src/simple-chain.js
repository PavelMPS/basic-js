import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain: [],
    getLength(){
      return this.chain.length;
    },
    addLink(value){
      (value!='')?this.chain.push(`(${value})~~`):this.chain.push('()~~');
      return this;
    },
    removeLink(position){
      if(position<=0||position>this.chain.length||isNaN(position)){
        throw new Error('You can\'t remove incorrect link!')
      }
     
      this.chain = this.chain.slice(0,position-1).concat(this.chain.slice(position));
      return this;
    },
    reverseChain(){
      this.chain.reverse();
      return this;
    },
    finishChain(){
      let fullChain = this.chain.join('');
      fullChain=fullChain.slice(0, fullChain.length-2);
      this.chain = [];
      return fullChain;
    }
};
