Template.ExampleAnimate.onRendered(function () {
  const N = 100;
  const E = 500;
  const L = 10;
  const g = {
    nodes: [],
    edges: []
  };

  // Generate a random graph:
  for (let i = 0; i < N; i++) {
    const o = {
      id: 'n' + i,
      label: 'Node ' + i,
      circular_x: L * Math.cos(Math.PI * 2 * i / N - Math.PI / 2),
      circular_y: L * Math.sin(Math.PI * 2 * i / N - Math.PI / 2),
      circular_size: Math.random(),
      circular_color: '#' + (
      Math.floor(Math.random() * 16777215).toString(16) + '000000'
      ).substr(0, 6),
      grid_x: i % L,
      grid_y: Math.floor(i / L),
      grid_size: 1,
      grid_color: '#ccc'
    };

    ['x', 'y', 'size', 'color'].forEach(function(val) {
      o[val] = o['grid_' + val];
    });

    g.nodes.push(o);
  }

  for (let i = 0; i < E; i++) {
    g.edges.push({
      id: 'e' + i,
      source: 'n' + (Math.random() * N | 0),
      target: 'n' + (Math.random() * N | 0)
    });
  }

  // Instantiate sigma:
  const s = new sigma({
    graph: g,
    container: this.find('.graph'),
    settings: {
      animationsTime: 1000
    }
  });

  let step = 0;
  Meteor.setInterval(() => {
    const prefix = ['grid_', 'circular_'][step = +!step];
    sigma.plugins.animate(s, {
      x: prefix + 'x',
      y: prefix + 'y',
      size: prefix + 'size',
      color: prefix + 'color'
    });
  }, 2000);
});