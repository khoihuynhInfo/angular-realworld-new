import { HttpResponse } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IArticles } from 'src/app/models/articles/articles.model';
import { ArticleListData } from './article-list.data.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent
  implements OnInit, OnDestroy, ArticleListData {

  articles: Array<IArticles>;

  @Input() set articleListData(value: Array<IArticles>) {
    this.articles = value;
  }

  constructor(
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  trackBy(index, item): string{
    return item.title;
  }

}
