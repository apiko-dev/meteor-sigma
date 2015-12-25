Package.describe({
  name: 'jss:sigma',
  version: '1.0.3_1',
  summary: 'Sigma is a library dedicated to graph drawing.',
  git: 'https://github.com/JSSolutions/meteor-sigma',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles([
    // Core:
    'client/sigma.core.js',

    // Utils:
    'client/conrad.js',
    'client/utils/sigma.utils.js',
    'client/utils/sigma.polyfills.js',

    // Main classes:
    'client/sigma.settings.js',
    'client/classes/sigma.classes.dispatcher.js',
    'client/classes/sigma.classes.configurable.js',
    'client/classes/sigma.classes.graph.js',
    'client/classes/sigma.classes.camera.js',
    'client/classes/sigma.classes.quad.js',

    // Captors:
    'client/captors/sigma.captors.mouse.js',
    'client/captors/sigma.captors.touch.js',

    // Renderers:
    'client/renderers/sigma.renderers.canvas.js',
    'client/renderers/sigma.renderers.webgl.js',
    'client/renderers/sigma.renderers.def.js',

    // Sub functions per engine:
    'client/renderers/webgl/sigma.webgl.nodes.def.js',
    'client/renderers/webgl/sigma.webgl.nodes.fast.js',
    'client/renderers/webgl/sigma.webgl.edges.def.js',
    'client/renderers/webgl/sigma.webgl.edges.fast.js',
    'client/renderers/webgl/sigma.webgl.edges.arrow.js',
    'client/renderers/canvas/sigma.canvas.labels.def.js',
    'client/renderers/canvas/sigma.canvas.hovers.def.js',
    'client/renderers/canvas/sigma.canvas.nodes.def.js',
    'client/renderers/canvas/sigma.canvas.edges.def.js',
    'client/renderers/canvas/sigma.canvas.edges.curve.js',
    'client/renderers/canvas/sigma.canvas.edges.arrow.js',
    'client/renderers/canvas/sigma.canvas.edges.curvedArrow.js',

    // Middlewares:
    'client/middlewares/sigma.middlewares.rescale.js',
    'client/middlewares/sigma.middlewares.copy.js',

    // Miscellaneous:
    'client/misc/sigma.misc.animation.js',
    'client/misc/sigma.misc.bindEvents.js',
    'client/misc/sigma.misc.drawHovers.js',

    // Plugins:
    'client/plugins/sigma.layout.forceAtlas2/worker.js',
    'client/plugins/sigma.layout.forceAtlas2/supervisor.js',
    'client/plugins/sigma.plugins.dragNodes/sigma.plugins.dragNodes.js',
    'client/plugins/sigma.parsers.gexf/gexf-parser.js',
    'client/plugins/sigma.parsers.gexf/sigma.parsers.gexf.js',
    'client/plugins/sigma.parsers.json/sigma.parsers.json.js',
    'client/plugins/sigma.plugins.animate/sigma.plugins.animate.js',
    'client/plugins/sigma.plugins.filter/sigma.plugins.filter.js',
    'client/plugins/sigma.plugins.neighborhoods/sigma.plugins.neighborhoods.js',
    'client/plugins/sigma.plugins.relativeSize/sigma.plugins.relativeSize.js',
    'client/plugins/sigma.renderers.customEdgeShapes/shape-library.js',
    'client/plugins/sigma.renderers.customEdgeShapes/sigma.renderers.customEdgeShapes.js',
    'client/plugins/sigma.renderers.customShapes/shape-library.js',
    'client/plugins/sigma.renderers.customShapes/sigma.renderers.customShapes.js',
    'client/plugins/sigma.statistics.HITS/sigma.statistics.HITS.js'
  ], 'client');

  //api.export('sigma', 'client');
});

