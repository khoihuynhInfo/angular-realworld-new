import {
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements DoCheck {

  ngDoCheck(): void {
    // console.log('LoadingComponent');
  }
}
