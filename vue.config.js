const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  chainWebpack: (chain) => {
    const oneofsMap = chain.module.rule("scss").oneOfs.store;
    oneofsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: "./src/assets/css/global.scss",
        });
    });
  },
});
