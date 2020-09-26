import {
  Injectable,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    const url: string = this.generateFullEndPoint(this.articleEndpoint.articles);
    this.http.get<any>(
      url,
    ).subscribe(
      (next) => console.log(next),
      (error) => console.log(error),
    );
  }


}

