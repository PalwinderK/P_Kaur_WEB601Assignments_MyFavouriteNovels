import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class LogUpdateService {
  constructor(private swUpdates: SwUpdate, private _snackBar: MatSnackBar) {}

  public init() {
    console.log('init: LogUpdateService');
    this.swUpdates.versionUpdates.subscribe((event) => {
      console.log(' this.swUpdates.versionUpdates', { event });
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version:
    
    ${event.version.hash}`);

          break;
        case 'VERSION_READY':
          let snackBarRef = this._snackBar.open(
            'Update Available',
            'Update Now'
          );
          snackBarRef.onAction().subscribe(() => {
            console.log('The snackbar action was triggered!');
            this.swUpdates
              .activateUpdate()
              .then(() => (document.location.href = 'http://localhost:8080'));
          });

          console.log(`Current app version:
    
    ${event.currentVersion.hash}`);

          console.log(`New app version ready for use:
    
    ${event.latestVersion.hash}`);

          break;
      }
    });
  }
}
