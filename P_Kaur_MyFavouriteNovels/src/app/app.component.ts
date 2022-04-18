import { ApplicationRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { LogUpdateService } from './log-update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private serviceLog: LogUpdateService,
    private updates: SwUpdate,
    private appRef: ApplicationRef
  ) {}

  ngOnInit(): void {
    console.log('AppComponent: ngOnInit');
    this.serviceLog.init();

    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );

    const myHalfHourMS$ = interval(0.5 * 60 * 60 * 1000);
    const myStableApp$ = concat(appIsStable$, myHalfHourMS$);

    myStableApp$.subscribe(() => this.updates.checkForUpdate());
  }
}
