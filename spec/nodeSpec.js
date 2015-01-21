var Node = require("../tree");

describe("Node", function() {
  var node;
  beforeEach(function() {
    node = new Node(50);
  });

  describe("Balancing", function() {
    describe("3 nodes", function() {
      beforeEach(function() {
        node.add(25);
        node = node.add(15);
      });

      it("returns a balanced node", function() {
        expect(node.value).toBe(25);
        expect(node.isBalanced()).toBe(true);
        expect(node.left.isBalanced()).toBe(true);
        expect(node.left.value).toBe(15);
        expect(node.right.isBalanced()).toBe(true);
        expect(node.right.value).toBe(50);
      });
    });
  });
});