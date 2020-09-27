import { HttpResponse } from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';



import { Subscription } from 'rxjs';
import { ArticlesService, EStatusApi } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  subscription$: Subscription;
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

  private _subscribeAPIgetArticles(): void {
    this._loadCompoennt(EStatusApi.Pending);
    const listArticles = this.articlesService.getArticles()
      .subscribe(
        (httpResponce) => {
          const { body, status } = httpResponce;
          if (status === 200) {
            this._loadCompoennt(EStatusApi.Success);
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
    statusAPI: EStatusApi
  ): void {
    this.articlesService.loadComponentArticles(
      this.vcArticle,
      statusAPI
    );
  }

}
