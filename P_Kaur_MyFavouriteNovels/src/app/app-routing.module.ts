import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { NovelDetailComponent } from './novel-detail/novel-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  { path: 'list', component: ContentListComponent },
  { path: 'list/:id', component: NovelDetailComponent },
  {
    path: 'list',
    loadChildren: () =>
      import('./content/content.module').then((m) => m.ContentModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// @NgModule({
//   declarations: [],
//   imports: [CommonModule],
// })
// export class AppRoutingModule {}
