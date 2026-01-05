import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CommentsComponent } from './components/comments/comments';
import { MaterialModule } from './material.module';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/Username.pipe';
import { TimeAgoPipe } from './pipes/Date.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    //CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective
  ],
  exports:[
    //CommentsComponent,
    MaterialModule,
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,
    HighlightDirective

  ]
})
export class SharedModule { }
