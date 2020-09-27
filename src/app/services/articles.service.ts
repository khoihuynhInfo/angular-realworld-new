import {
  Injectable, ViewContainerRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


export enum EStatusApi {
  Pending,
  Success,
  Error,
}
@Injectable({ providedIn: 'root' })
export class ArticlesService {

  constructor(
    private http: HttpClient,
  ) {}

  private articleEndpoint = {
    articles: 'articles',
  };

  private generateFullEndPoint(endPoint: string): string {
    const fullEndPoint = `${environment.api_url}/${endPoint}`;

    return fullEndPoint;
  }

  getArticles(): any {
    const url: string = this
      .generateFullEndPoint(this.articleEndpoint.articles);

    return this.http.get<any>(url, { observe: 'response' });
  }

  async loadComponentArticles(
    vcr: ViewContainerRef,
    statusAPI: EStatusApi,
    articles?: Array<IArticles>,
  ): Promise<any> {

    const { LoadingComponent } = await import('../components/stateless/loading/loading.component');
    const { LostInternetComponent } = await import(
      '../components/stateless/lost-internet/lost-internet.component'
    );
    const { ArticleListComponent } = await import(
      '../components/stateful/article-list/article-list.component'
    );

    vcr.clear();
    let component;

    switch (statusAPI) {
      case EStatusApi.Pending:
        component = LoadingComponent;
        break;
      case EStatusApi.Success:
        component = ArticleListComponent;
        break;
      default:
        component = LostInternetComponent;
    }

    return component;
  }

}

