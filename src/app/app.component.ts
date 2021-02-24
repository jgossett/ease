import {Component} from '@angular/core';
import {faPlayCircle, faRedo, faEllipsisV, faPause, faCircle, faStop} from '@fortawesome/free-solid-svg-icons';
import {faCircle as farCircle} from '@fortawesome/free-regular-svg-icons';
import {TimerMachine} from './state-machine.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly fasRedo = faRedo;
  readonly fasEllipsis = faEllipsisV;
  readonly fasPlayCircle = faPlayCircle;
  readonly fasCircle = faCircle;
  readonly farCircle = farCircle;
  readonly fasPause = faPause;
  readonly fasStop = faStop;

  private timerMachine = new TimerMachine();

  get minutes(): number {
    return this.timerMachine.minutes;
  }

  get seconds(): number {
    return this.timerMachine.seconds;
  }

  onReset(): void {
    this.timerMachine.abort();
  }

  onShowSettingMenu(): void {
    alert('onShowSettingMenu was clicked.');
  }

  onStart(): void {
    this.timerMachine.work();
  }

  onPause(): void {
    this.timerMachine.pause();
  }

  onStop(): void {
    this.timerMachine.abort();
  }
}
