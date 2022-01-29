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
    // 시작 정점 탐색
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    // 시작 정점 없으면 생성
    if (!startVertex) {
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }
   
}
