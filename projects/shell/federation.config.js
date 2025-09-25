const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'shell',
  remotes: {
    'mfe-employee-list': 'http://localhost:4201/remoteEntry.json',
    'mfe-employee-add': 'http://localhost:4202/remoteEntry.json',
    'mfe-employee-deactivate': 'http://localhost:4203/remoteEntry.json',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@personal-manager/shared-lib': {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ],

  features: {
    ignoreUnusedDeps: true
  }

});
