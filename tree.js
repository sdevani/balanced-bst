var Node = require("./node");

var Tree = function() {
  this.root = null;
};

Tree.prototype.add = function(value) {
  if (!this.root) {
    this.root = new Node(value);
  } else {
    this.root = this.root.add(value);
  }
};


module.exports = Tree;