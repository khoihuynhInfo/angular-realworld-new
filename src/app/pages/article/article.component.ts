import {
  Component,
  OnInit,
} from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor(
    private articlesService: ArticlesService,
  ) {

  }
  ngOnInit(): void {
    this.articlesService.getArticles();
  }
}
