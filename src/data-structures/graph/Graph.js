export default class Graph{
   /**
   * @param {boolean} isDirected
   */
  constructor(isDirected = false) {
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }
   
     /**
   * @param {GraphVertex} newVertex
   * @returns {Graph}
   */
  addVertex(newVertex) {
    this.vertices[newVertex.getKey()] = newVertex;

    return this;
  }
   
  /**
   * @param {string} vertexKey
   * @returns GraphVertex
   */
  getVertexByKey(vertexKey) {
    return this.vertices[vertexKey];
  }

  /**
   * @param {GraphVertex} vertex
   * @returns {GraphVertex[]}
   */
  getNeighbors(vertex) {
    return vertex.getNeighbors();
  }
   
  /**
   * @return {GraphVertex[]}
   */
  getAllVertices() {
    return Object.values(this.vertices);
  }
   
  /**
   * @return {GraphEdge[]}
   */
  getAllEdges() {
    return Object.values(this.edges);
  }
   
  /**
   * @param {GraphEdge} edge
   * @returns {Graph}
   */
   addEdge(edge) {
    // 시작, 종료 정점 탐색
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // 시작 정점 없으면 삽입
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }
      
    // 종료 정점 없으면 삽입
    if (!endVertex) {
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }
      
    // 간선이 이미 있는지 체크
    if (this.edges[edge.getKey()]) {
      throw new Error('Edge has already been added before');
    } else {
      this.edges[edge.getKey()] = edge;
    }
     
    // 정점에 간선 추가
    if (this.isDirected) {
      // 방향 그래프라면, 시작 정점에만 간선 추가
      startVertex.addEdge(edge);
    } else {
      // 무방향이라면 시작, 종료 정점 모두 간선 추가
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }
    return this;   
   }
   
   /**
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {
    // 간선 리스트에서 간선 찾아서 삭제
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error('Edge not found in graph');
    }
     
    // 시작정점을 찾아 간선 삭제
    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
     
  }
     
  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @return {(GraphEdge|null)}
   */
  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }
    return vertex.findEdge(endVertex);
  }
   
  /**
   * @return {number}
   */
  getWeight() {
    return this.getAllEdges().reduce((weight, graphEdge) => {
      return weight + graphEdge.weight;
    }, 0);
  }
   
  /**
   * Reverse all the edges in directed graph.
   * @return {Graph}
   */
  reverse() {
    /** @param {GraphEdge} edge */
    this.getAllEdges().forEach((edge) => {
      // 정점, 그래프에서 간선 삭제
      this.deleteEdge(edge);

      // 간선 반전
      edge.reverse();

      // 반전된 간선을 그래프, 정점에 다시 추가
      this.addEdge(edge);
    });

    return this;
  }
   
  /**
   * @return {object}
   */
  getVerticesIndices() {  //정점의 차수 getter
    const verticesIndices = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });

    return verticesIndices;
  }
   
  /**
   * @return {*[][]}
   */
  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
      return Array(vertices.length).fill(Infinity);
    });
     
    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
      });
    });
     
  }
   
   
}

//https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph/Graph.js
