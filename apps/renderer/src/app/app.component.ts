import { Component } from '@angular/core';
import { faPlayCircle, faRedo, faEllipsisV, faPause, faCircle, faStop } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { Logger } from '../logger/logger.class';
import { TimerMachine } from './state-machine/state-machine.class';

@Component({
  selector: 'ease-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  constructor(private logger: Logger) {
  }

  get minutes(): number {
    return this.timerMachine.remainingDuration.minutes;
  }

  get seconds(): number {
    return this.timerMachine.remainingDuration.seconds;
  }

  get showPauseButton(): boolean {
    return this.timerMachine.showPauseButton;
  }

  get showPlayButton(): boolean {
    return this.timerMachine.showPlayButton;
  }

  get showStopButton(): boolean {
    return this.timerMachine.showStopButton;
  }

  onReset(): void {
    this.timerMachine.stop();
  }

  onShowSettingMenu(): void {
    this.logger.info('onShowSettingMenu was clicked.');
  }

  onStart(): void {
    this.timerMachine.focus();
  }

  onPause(): void {
    this.timerMachine.pause();
  }

  onStop(): void {
    this.timerMachine.stop();
  }
}
