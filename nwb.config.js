
module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: false
  },
  babel: {
    plugins: [
      ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}]
    ]
  },
  webpack: {
    rules: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1890ff'
        }
      }
    }
  }
};