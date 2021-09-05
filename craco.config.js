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
              // '@primary-color': '#00152a',
              '@secondary-color': '#0993a7',
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
