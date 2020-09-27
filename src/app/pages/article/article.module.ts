import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article.component';

// import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    // ArticleRoutingModule,
  ],
})
export class ArticleModule {}
