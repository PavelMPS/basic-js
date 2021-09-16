

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
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



