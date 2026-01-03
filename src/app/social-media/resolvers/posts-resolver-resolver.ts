//import { ResolveFn } from '@angular/router';

//export const postsResolverResolver: ResolveFn<boolean> = (route, state) => {
//  return true;
//};


import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Post } from '../../shared/Models/post.model';
import { PostsServices } from '../services/posts-services';
import { Observable } from 'rxjs';

@Injectable()
export class PostsResolver implements Resolve<Post[]> {
  constructor(private postsService: PostsServices) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}