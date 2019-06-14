import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./pages/post-page/post-page.module').then(m => m.PostPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
