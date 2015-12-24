Template.ExampleEdgeEenderers.onRendered(function () {
  const N = 100;
  const E = 500;
  const g = {
    nodes: [],
    edges: []
  };

  // Generate a random graph:
  for (let i = 0; i < N; i++) {
    g.nodes.push({
      id: 'n' + i,
      label: 'Node ' + i,
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      color: '#666'
    });
  }

  for (let i = 0; i < E; i++) {
    g.edges.push({
      id: 'e' + i,
      source: 'n' + (Math.random() * N | 0),
      target: 'n' + (Math.random() * N | 0),
      size: Math.random(),
      color: '#ccc',
      type: ['curve', 'arrow', 'curvedArrow'][Math.random() * 3 | 0]
    });
  }

  // Instantiate sigma:
  new sigma({
    graph: g,
    renderer: {
      container: this.find('.graph'),
      type: 'canvas'
    }
  });
});