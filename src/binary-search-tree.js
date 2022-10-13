const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add( data ) {
        this.rootNode = addNode(this.rootNode, data);
        function addNode(node, data) {
            if (!node) {
                return new Node(data); // for empty nodes
            }
            if (node.data === data) {
                return node; // for repeated nodes
            }
            if (data < node.data) { //run addNode for left or right node
                node.left = addNode(node.left, data); 
            } else {
                node.right = addNode(node.right, data);
            }
            return node;
        }
    }

    has( data ) {
        return hasNode(this.rootNode, data);
        function hasNode(node, data) {
            if (!node) {
                return false; // for empty nodes
            }
            if (node.data === data) {
                return true; // for repeated nodes
            }
            if (data < node.data) { //run addNode for left or right node
               return hasNode(node.left, data); 
            } else {
               return hasNode(node.right, data);
            }
        }
    }

    find( data ) {
        return findNode(this.rootNode, data);
        function findNode(node, data) {
            if (!node) {
                return null; // for empty nodes
            }
            if (node.data === data) {
                return node; // for repeated nodes
            }
            if (data < node.data) { //run addNode for left or right node
               return findNode(node.left, data); 
            } else {
               return findNode(node.right, data);
            }
        }
    }

    remove( data ) {        
        this.rootNode = removeNode(this.rootNode, data);
        function removeNode(node, data) {
            if (!node) {
                return null; // if to remove non existing node
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } 
            if (data > node.data) {
                    node.right = removeNode(node.right, data);
                    return node;
            } else { // data === node.data
                if ( (!node.left && !node.right) ) {
                    node = null; // node to remove is a leaf
                    return null;
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }
                if (!node.right) {
                    node = node.left;
                    return node;
                }
                let maxOfLeft = node.left;
                while (maxOfLeft.right) { // find the max of the node.left branch
                    maxOfLeft = maxOfLeft.right;
                }
                node.data = maxOfLeft.data; // replace the data
                // and rum removeNode for the max node to avoid
                //duplication
                node.left = removeNode(node.left, maxOfLeft.data);
                return node;

            }
            

        }

    }

    min() {
        if ( (!this.root().left && !this.root().right) ) {
            return this.root().data;
        }
        let minNode = this.root().left;
        while (minNode.left) { 
            minNode = minNode.left;
        }
        return minNode.data;        
    }

    max() {
        if ( (!this.root().left && !this.root().right) ) {
            return this.root().data;
        }
        let maxNode = this.root().right;
        while (maxNode.right) { 
            maxNode = maxNode.right;
        }
        return maxNode.data;    
    }
}

module.exports = {
  BinarySearchTree
};