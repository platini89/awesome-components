import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../../../shared/Models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostListItem } from '../post-list-item/post-list-item';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostsServices } from '../../services/posts-services';
 

@Component({
  selector: 'app-post-list',
  imports: [ PostListItem, AsyncPipe, CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
})
export class PostList  implements OnInit {


  posts$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute,
              private postsService: PostsServices) { }

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['postsR'])
    );
  }


  onPostCommented(postCommented: { comment: string, postId: number }) {
    this.postsService.addNewComment(postCommented);
}

}
