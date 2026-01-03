import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../shared/Models/post.model';
import { environment } from '../../../environments/environment';
//import { environment } from '../../../environments/environment.prod';

/* @InjeEctable({
  providedIn: 'root',
})
*/
@Injectable()

export class PostsServices {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }


  addNewComment(postCommented: { comment: string, postId: number }) {
    console.log(postCommented);
}
  
}
