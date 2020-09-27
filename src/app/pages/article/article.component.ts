import { HttpResponse } from '@angular/common/http';
import {
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { IArticles } from 'src/app/models/articles/articles.model';
import { ArticlesService, EStatusApi } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy, OnDestroy, DoCheck {

  private subscription$: Subscription = new Subscription();

  @ViewChild('vcArticle', {
    static: true,
    read: ViewContainerRef,
  }) vcArticle: ViewContainerRef;

  constructor(
    private articlesService: ArticlesService,
  ) {}

  ngOnInit(): void {
    this._subscribeAPIgetArticles();
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  ngDoCheck(): void {
    // console.log('[Docheck] Articles Component');
  }

  private _subscribeAPIgetArticles(): void {
    this._loadCompoennt(EStatusApi.Pending);
    const listArticles = this.articlesService.getArticles()
      .subscribe(
        (httpResponce) => {
          const { body, status } = httpResponce;
          const { articles } = body;
          console.log(articles);
          if (status === 200) {
            this._loadCompoennt(EStatusApi.Success, articles);
          } else {
            this._loadCompoennt(EStatusApi.Error);
          }
        },
        (err) => {
          this._loadCompoennt(EStatusApi.Error);
        },
      );
    this.subscription$.add(listArticles);
  }

  private _loadCompoennt(
    statusAPI: EStatusApi,
    articles?: Array<IArticles>
  ): void {
    this.articlesService.loadComponentArticles(
      this.vcArticle,
      statusAPI,
      articles
    );
  }

}
