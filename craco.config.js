const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#03363d',
              '@warning-color': '#f1b24a',
              '@success-color': '#33c175',
              '@error-color': '#e55239',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
