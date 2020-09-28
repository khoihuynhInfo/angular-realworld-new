import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ChipComponent } from 'src/app/components/stateful/chip/chip.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article.component';

// import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [
    ChipComponent,
    ArticleListComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    // ArticleRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ArticleModule {}
