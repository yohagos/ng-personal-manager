import { initFederation } from '@angular-architects/native-federation';

initFederation({
  'mfeEmployeeList': 'http://localhost:4200/remoteEntry.json',
  'mfeEmployeeAdd': 'http://localhost:4200/remoteEntry.json',
  'mfeEmployeeDeactivate': 'http://localhost:4200/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
