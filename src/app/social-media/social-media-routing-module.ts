import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { PostsResolver } from './resolvers/posts-resolver-resolver';

const routes: Routes = [
  { path: '', component: PostList, resolve: { postsR: PostsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
