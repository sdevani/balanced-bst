var Node = require("./node");

var Tree = function() {
  this.root = null;
};

Tree.prototype.add = function(value) {
  var newNode = new Node(value);
  if (!this.root) {
    this.root = newNode;
    return;
  }

  this.root = this.root.add(value);
};

// Tree.prototype._add = function(oldNode, newNode) {
//   if (newNode.value < oldNode.value) {
//     if (!oldNode.left) {
//       oldNode.left = newNode;
//     } else {
//       this._add(oldNode.left, newNode);
//     }
//   } else {
//     if (!oldNode.right) {
//       oldNode.right = newNode;
//     } else {
//       this._add(oldNode.right, newNode);
//     }
//   }
// };

module.exports = Tree;