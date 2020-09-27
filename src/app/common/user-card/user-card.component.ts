import { HttpResponse } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit, OnDestroy {

  constructor(
  ) {}

  ngOnInit(): void {
    console.log('articles list');
  }

  ngOnDestroy(): void {

  }


}
