import { HttpResponse } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  constructor(
  ) {}

  ngOnInit(): void {
    console.log('articles list');
  }

  ngOnDestroy(): void {

  }


}
