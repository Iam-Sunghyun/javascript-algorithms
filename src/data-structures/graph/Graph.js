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
