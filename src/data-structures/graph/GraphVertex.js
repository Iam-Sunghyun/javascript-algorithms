export default class GraphVertex {
  
  /**
   * @param {*} value
   */
  constructor(value) {
    if (value === undefined) {
      throw new Error('Graph vertex must have a value');
    }

    /**
     * @param {GraphEdge} edgeA
     * @param {GraphEdge} edgeB
     */
    const edgeComparator = (edgeA, edgeB) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }

      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    // Normally you would store string value like vertex name.
    // But generally it may be any object as well
    this.value = value;
    this.edges = new LinkedList(edgeComparator);
  }
}
