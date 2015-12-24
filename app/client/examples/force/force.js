Template.ExampleForce.onRendered(function () {
  const N = 100;
  const E = 500;
  const C = 5;
  const g = {
    nodes: [],
    edges: []
  };
  const cs = [];
  const d = 0.5;
  let o;

  // Generate a random graph:
  for (let i = 0; i < C; i++) {
    cs.push({
      id: i,
      nodes: [],
      color: '#' + (
      Math.floor(Math.random() * 16777215).toString(16) + '000000'
      ).substr(0, 6)
    });
  }
  for (let i = 0; i < N; i++) {
    o = cs[(Math.random() * C) | 0];
    g.nodes.push({
      id: 'n' + i,
      label: 'Node' + i,
      x: Math.cos(2 * i * Math.PI / N),
      y: Math.sin(2 * i * Math.PI / N),
      size: Math.random(),
      color: o.color
    });
    o.nodes.push('n' + i);
  }

  for (let i = 0; i < E; i++) {
    if (Math.random() < 1 - d)
      g.edges.push({
        id: 'e' + i,
        source: 'n' + ((Math.random() * N) | 0),
        target: 'n' + ((Math.random() * N) | 0)
      });
    else {
      o = cs[(Math.random() * C) | 0];
      g.edges.push({
        id: 'e' + i,
        source: o.nodes[(Math.random() * o.nodes.length) | 0],
        target: o.nodes[(Math.random() * o.nodes.length) | 0]
      });
    }
  }

  // Instantiate sigma:
  const s = new sigma({
    graph: g,
    container: this.find('.graph'),
    settings: {
      drawEdges: false
    }
  });

  // Start the ForceAtlas2 algorithm:
  s.startForceAtlas2();
});