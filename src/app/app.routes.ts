import { Routes } from '@angular/router';
import { SocialMediaModule } from './social-media/social-media-module';

export const routes: Routes = [

  { path: 'social-media', loadChildren: () => import('./social-media/social-media-module').then(m => m.SocialMediaModule) },
  { path: '**', redirectTo: 'social-media'}
];
