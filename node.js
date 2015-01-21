var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.leftDepth = 0;
  this.rightDepth = 0;
  this.parent = null;
};

Node.prototype.add = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new Node(value);
      this.left.parent = this;
    } else {
      this.left = this.left.add(value);
      this.left.parent = this;
    }

    this.leftDepth = this.left.maxDepth() + 1;
  } else {
    if (!this.right) {
      this.right = new Node(value);
      this.right.parent = this;
    } else {
      this.right = this.right.add(value);
      this.right.parent = this;
    }

    this.rightDepth = this.right.maxDepth() + 1;
  }
};

Node.prototype.maxDepth = function() {
  if (this.leftDepth > this.rightDepth) {
    return this.leftDepth;
  }
  return this.rightDepth;
};

Node.balance = function() {
};

// Node.prototype.checkOrder = function() {
//   if (this.left !== null) {
//     if (!this.left.checkOrder()) {
//       return false;
//     }

//     if (this.left.value > this.value) {
//       return false;
//     }
//   }

//   if (this.right !== null) {
//     if (!this.right.checkOrder()) {
//       return false;
//     }

//     if (this.right.value < this.value) {
//       return false;
//     }
//   }

//   return true;
// };

// Node.prototype.calculateDepth = function() {
//   var leftDepth = 0;
//   if (this.left) {
//     leftDepth = this.left.calculateDepth();
//   }

//   var rightDepth = 0;
//   if (this.right) {
//     rightDepth = this.right.calculateDepth();
//   }

//   return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
// };

// Node.prototype.checkBalance = function() {
//   var leftDepth = 0;
//   if (this.left) {
//     if (!this.left.checkBalance()) {
//       return false;
//     }
//     leftDepth = this.left.calculateDepth();
//   }

//   var rightDepth = 0;
//   if (this.right) {
//     if (!this.right.checkBalance()) {
//       return false;
//     }
//     rightDepth = this.right.calculateDepth();
//   }

//   var difference = leftDepth - rightDepth;
//   if (difference > 1 || difference < -1) {
//     return false;
//   } else {
//     return true;
//   }
// };

// Node.prototype.addAndCheck = function(value) {
//   this.add(value);
//   console.log(this.checkOrder());
//   console.log(this.checkBalance());
// };

module.exports = Node;
