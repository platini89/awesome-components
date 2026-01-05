import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/Models/post.model';
import { Input, Output,EventEmitter } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from '../../../shared/components/comments/comments';
//mport { AsyncPipe } from '@angular/common';
import { ShortenPipe } from '../../../shared/pipes/shorten.pipe';
import { UsernamePipe } from '../../../shared/pipes/Username.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/Date.pipe';
import { HighlightDirective } from '../../../shared/directives/highlight.directive';


@Component({
  selector: 'app-post-list-item',
  imports: [ TitleCasePipe, CommonModule, MatCardModule, CommentsComponent,
              ShortenPipe, UsernamePipe, TimeAgoPipe, HighlightDirective
  ],
  templateUrl: './post-list-item.html',
  styleUrl: './post-list-item.scss',
})
export class PostListItem implements OnInit {

  @Input() post!: Post;

  @Output() postCommented = new EventEmitter<{ comment: string, postId: number }>();

TempUser : {firstName: string, lastName: string} = {firstName: 'John', lastName: 'Doe'};


  ngOnInit(): void {


  }



  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id });
  }

}
