var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.leftDepth = 0;
  this.rightDepth = 0;
  // this.parent = null;
};

Node.prototype.add = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new Node(value);
      this.leftDepth++;
      // this.left.parent = this;
    } else {
      this.left = this.left.add(value);
      // this.left.parent = this;
      this.leftDepth = this.left.maxDepth() + 1;
    }
  } else {
    if (!this.right) {
      this.right = new Node(value);
      this.rightDepth++;
      // this.right.parent = this;
    } else {
      this.right = this.right.add(value);
      // this.right.parent = this;
      this.rightDepth = this.right.maxDepth() + 1;
    }
  }

  return this.balance();
};

Node.prototype.isBalanced = function() {
  console.log(this.leftDepth, this.rightDepth);
  var diff = this.leftDepth - this.rightDepth;
  if (diff > 1 || diff < -1) {
    return false;
  }

  return true;
};

Node.prototype.balance = function() {
  if (this.isBalanced()) {
    return this;
  }
  // balance algorithm goes here
  var medium;
  console.log("hi");
  if (this.leftDepth > this.rightDepth) {
    if (this.left.rightDepth > this.left.leftDepth) {
      var small = this.left;
      var medium = this.left.right;
      small.right = medium.left;
      medium.left = small;
      this.left = medium;
    }
    var medium = this.left;
    this.left = medium.right;
    medium.right = this;
  } else {
    if (this.right.leftDepth > this.right.rightDepth) {
      var large = this.right;
      var medium = this.right.left;
      large.left = medium.right;
      medium.right = large;
      this.right = medium;
    }

    var medium = this.right;
    this.right = medium.left;
    medium.left = this;
  }
  //find new depths first
  medium.left.findNewDepth();
  medium.right.findNewDepth();
  medium.findNewDepth();
  return medium;
};

Node.prototype.findNewDepth = function() {
  this.leftDepth = this.rightDepth = 0;
  if (this.left) {
    this.leftDepth = this.left.maxDepth();
  }
  if (this.right) {
    this.rightDepth = this.right.maxDepth();
  }
};


Node.prototype.maxDepth = function() {
  return this.leftDepth > this.rightDepth + 1 ? this.leftDepth : this.rightDepth + 1;
};

module.exports = Node;

var x = (new Node(50)).add(75).add(65);