var Tree = require("../tree");

describe("Tree", function() {
  var tree;

  beforeEach(function() {
    tree = new Tree();
  });

  describe("Add initial node", function() {
    it("sets the root node", function() {
      tree.add(5);
      expect(tree.root.value).toBe(5);
      // expect(tree.root.maxDepth()).toBe(0);
    });
  });

  describe("Add second node", function() {
    beforeEach(function() {
      tree.add(50);
    });

    it("adds smaller nodes to the left", function() {
      tree.add(25);
      expect(tree.root.value).toBe(50);
      expect(tree.root.left).not.toBe(null);
      expect(tree.root.left.value).toBe(25);
    });

    it("adds larger nodes to the right", function() {
      tree.add(75);
      expect(tree.root.value).toBe(50);
      expect(tree.root.right).not.toBe(null);
      expect(tree.root.right.value).toBe(75);
    });
  });
});