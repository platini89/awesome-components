import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaRoutingModule } from './social-media-routing-module';
import { PostsServices } from './services/posts-services';
import { PostsResolver } from './resolvers/posts-resolver-resolver';
import { SharedModule } from '../shared/shared-module';
//import { Commentscomponenets } from '../shared/components/comments/comments';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule,
    //Commentscomponenets
  ],
  providers: [
    PostsServices,
    PostsResolver
  ]
})
export class SocialMediaModule { }
