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
  addNode(node) {
    this.nodes.add(node);
   }

  /** add array of new Node instances and adds to them to nodes property. */
  addNodes(nodeArray) {
    for (let node of nodeArray) {
      this.addNode(node);
    }
   }

  /** add edge between nodes n1,n2 */
  addEdge(n1, n2) {
    n1.adjacent.add(n2);
    n2.adjacent.add(n1);
   }

  /** remove edge between nodes n1,n2 */
  removeEdge(n1, n2) {
    n1.adjacent.delete(n2);
    n2.adjacent.delete(n1);
   }

  /** remove node from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that node
   */
  removeNode(node) {
    this.nodes.delete(node);

    for (let adjNode of node.adjacent) {
      adjNode.adjacent.delete(node);
    }
   }

  /** traverse graph with DFS and returns array of Node values */

  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set([start]);

    let values = [];
    while (toVisitStack.length > 0){
      //pop
      const current = toVisitStack.pop();

      values.push(current.value);

      for (let neighbor of current.adjacent){
        if (!seen.has(neighbor)){
          //Add to both
          toVisitStack.push(neighbor);
          seen.add(neighbor);
        }
      }
    }
    return values;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set([start]);

    let values = [];
    while (toVisitQueue.length > 0){
      //pop
      const current = toVisitQueue.shift(); //interview note, I know this is inefficient

      values.push(current.value);

      for (let neighbor of current.adjacent){
        if (!seen.has(neighbor)){
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }

    return values;
  }

  /** find the distance of the shortest path from the start node to the end node */
  //       A
  //   B  ->   D

  distanceOfShortestPath(start, end) {

    let pathDistances = [];
    let toVisitQueue = [start];
    let seen = new Set([start]);

    while(toVisitQueue.length > 0) {
      const current = toVisitQueue.shift();

      for (let neighbor of current.adjacent) {
        if(!seen.has(neighbor)) {
          toVisitQueue.push(neighbor);
          seen.add(neighbor);
        }
      }
    }


    console.log("path distances are: ", pathDistances);
    return Math.min(...pathDistances);
  }
}

module.exports = { Graph, Node }

// function DFS(p1, p2, seen=new Set([p1]), distance = 0) {
//   if (p1 === p2) {
//     pathDistances.push(distance);
//     return true;
//   }

//   if (p1.adjacent.has(p2)){
//     pathDistances.push(distance + 1);
//     return true;
//   }

//   for (let neighbor of p1.adjacent) {
//     if (!seen.has(neighbor)) {

//       seen.add(neighbor);
//       if (DFS(neighbor, p2, seen, distance = distance + 1)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// DFS(start, end);