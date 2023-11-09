/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addNode(node) { }

  /** add array of new Node instances and adds to them to nodes property. */
  addNodes(nodeArray) { }

  /** add edge between nodes n1,n2 */
  addEdge(n1, n2) { }

  /** remove edge between nodes n1,n2 */
  removeEdge(n1, n2) { }

  /** remove node from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that node
   */
  removeNode(node) { }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) { }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) { }

  /** find the distance of the shortest path from the start node to the end node */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
