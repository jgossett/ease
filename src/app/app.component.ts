import {Component} from '@angular/core';
import {faPlayCircle, faRedo, faEllipsisV, faPause, faCircle} from '@fortawesome/free-solid-svg-icons';
import {faCircle as farCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fasRedo = faRedo;
  fasEllipsis = faEllipsisV;
  fasPlayCircle = faPlayCircle;
  fasCircle = faCircle;
  farCircle = farCircle;
  fasPause = faPause;

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
