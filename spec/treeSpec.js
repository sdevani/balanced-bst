var Node = require("../node");

describe("Stuff", function() {
  it("does stuff", function() {
    var node = new Node(5);
    expect(node.value).toBe(5);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
    expect(node.leftDepth).toBe(0);
    expect(node.rightDepth).toBe(0);
  });

  it("has an initial depth of 0", function() {
    var node = new Node(5);
    expect(node.maxDepth()).toBe(0);
  });

  describe("adding the first node", function() {
    var node;

    beforeEach(function() {
      node = new Node(5);
    });

    it("adds smaller nodes to the left side", function() {
      node.add(3);
      expect(node.left).not.toBe(null);
      expect(node.left.value).toBe(3);
      expect(node.right).toBe(null);
      expect(node.leftDepth).toBe(1);
      expect(node.rightDepth).toBe(0);
      expect(node.maxDepth()).toBe(1);
    });

    it("adds larger nodes to the right side", function() {
      node.add(7);
      expect(node.right).not.toBe(null);
      expect(node.right.value).toBe(7);
      expect(node.left).toBe(null);
      expect(node.rightDepth).toBe(1);
      expect(node.leftDepth).toBe(0);
      expect(node.maxDepth()).toBe(1);
    });
  });

  describe("adding multiple nodes in the proper place", function() {
    var node;

    beforeEach(function() {
      node = new Node(50);
    });

    it("calls the add method to the proper side of the tree", function() {
      node.add(20);
      spyOn(node.left, "add");
      node.add(5);
      expect(node.left.add).toHaveBeenCalledWith(5);
    });

    it("calls the add method to the proper side of the tree", function() {
      node.add(20);
      spyOn(node.left, "add");
      node.add(25);
      expect(node.left.add).toHaveBeenCalledWith(25);
    });

    it("calls the add method to the proper side of the tree", function() {
      node.add(20);
      spyOn(node.left, "add");
      node.add(25);
      expect(node.left.add).toHaveBeenCalledWith(25);
    });
  });

  describe("increasing depth as you add nodes", function() {
    var node;

    beforeEach(function() {
      node = new Node(50);
      node.add(10);
    });

    it("doesn't alter the depth when it's the same balance", function() {
      node.add(60);
      expect(node.maxDepth()).toBe(1);
      expect(node.leftDepth).toBe(1);
      expect(node.rightDepth).toBe(1);
      expect(node.left.maxDepth()).toBe(0);
      expect(node.right.maxDepth()).toBe(0);
    });

    it("propogates the depth increase", function() {
      node.add(60);
      node.add(5);
      expect(node.maxDepth()).toBe(2);
      expect(node.leftDepth).toBe(2);
      expect(node.left.maxDepth()).toBe(1);
    });

    it("doesn't propogate when unnecessary", function() {
      // set up
      node.add(60);
      node.add(5);
      // action
      node.add(15);
      expect(node.maxDepth()).toBe(2);
      expect(node.leftDepth).toBe(2);
      expect(node.left.maxDepth()).toBe(1);
    });
  });
});