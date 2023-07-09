const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build target directory
  outputDir: 'C:/Users/main/workspace/intellij/board-test-1/src/main/resources/static',
  // npm run serve proxy
  devServer: {
    proxy: 'http://localhost:8080'
  }
})
