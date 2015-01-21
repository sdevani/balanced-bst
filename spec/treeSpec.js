var Tree = require("../tree");

describe("Tree", function() {
  var tree;

  beforeEach(function() {
    tree = new Tree();
  });

  describe("Adding first couple nodes", function() {
    describe("first node", function() {
      beforeEach(function() {
        tree.add(50);
      });

      it("gives the root its value", function() {
        expect(tree.root.value).toBe(50);
      });

      it("has no children", function() {
        expect(tree.root.left).toBe(null);
        expect(tree.root.right).toBe(null);
      });

      // it("has no parent", function() {
      //   expect(tree.root.parent).toBe(null);
      // });

      it("is balanced", function() {
        expect(tree.root.isBalanced()).toBe(true);
      })
    });

    describe("second node that is smaller", function() {
      beforeEach(function() {
        tree.add(50);
        tree.add(25);
      });

      it("has a left child", function() {
        expect(tree.root.left.value).toBe(25);
        // expect(tree.root.left.parent).toBe(tree.root);
      });

      it("has no right child", function() {
        expect(tree.root.right).toBe(null);
      });

      it("is balanced", function() {
        expect(tree.root.isBalanced()).toBe(true);
      });
    });

    describe("second node that is larger", function() {
      beforeEach(function() {
        tree.add(50);
        tree.add(75);
      });

      it("has a right child", function() {
        expect(tree.root.right.value).toBe(75);
        // expect(tree.root.right.parent).toBe(tree.root);
      });

      it("has no left child", function() {
        expect(tree.root.left).toBe(null);
      });

      it("is balanced", function() {
        expect(tree.root.isBalanced()).toBe(true);
      });
    });

    describe("node added to taken spot", function() {
      beforeEach(function() {
        tree.add(50);
        tree.add(25);
        tree.add(75);
      });

      it("delegates add to the left side when smaller", function() {
        spyOn(tree.root.left, "add").and.callThrough();
        tree.add(30);
        expect(tree.root.left.add).toHaveBeenCalledWith(30);
      });

      it("delegates add to the right side when larger", function() {
        spyOn(tree.root.right, "add").and.callThrough();
        tree.add(80);
        expect(tree.root.right.add).toHaveBeenCalledWith(80);
      });
    });

    describe("balancing a tree", function() {
      beforeEach(function() {
        tree.add(50);
        tree.add(60);
        tree.add(70);
        tree.add(80);
        tree.add(90);
      });

      it("is balanced", function() {
        expect(tree.root.isBalanced()).toBe(true);
      });
    });
  });
});