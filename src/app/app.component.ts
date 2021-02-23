import {Component} from '@angular/core';
import {faPlayCircle, faRedo, faEllipsisV, faPause, faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircle as farCircle} from '@fortawesome/free-regular-svg-icons';

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

  minutes = 23;
  seconds = 47;

  onRestartTimer(): void {
    alert('onRestartTimer was clicked.');
  }

  onShowSettingMenu(): void {
    alert('onShowSettingMenu was clicked.');
  }

  onStartTimer(): void {
    alert('onStartTimer was clicked.');
  }

  onPauseTimer(): void {
    alert('onPauseTimer was clicked.');
  }
}
