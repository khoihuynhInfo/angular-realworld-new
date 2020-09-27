import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    UserCardComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ComponentCommonModule { }
