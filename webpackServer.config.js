module.exports = {
  contentBase: 'dist',
  historyApiFallback: true,
  compress: true,
  stats: {
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: true,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  },
  filename: 'bundle.js',
  publicPath: '/assets/',
  headers: { 'X-Custom-Header': 'yes' }
}

