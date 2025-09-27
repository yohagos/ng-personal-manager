import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'mfe-employee-list': 'http://localhost:4201/remoteEntry.json',
  'mfe-employee-add': 'http://localhost:4202/remoteEntry.json',
  'mfe-employee-deactivate': 'http://localhost:4203/remoteEntry.json',
})
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
