import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from '../content-list/content-list.component';
import { NovelDetailComponent } from '../novel-detail/novel-detail.component';
import { ContentComponent } from './content.component';

const routes: Routes = [
  { path: '', component: ContentListComponent },
  { path: ':id', component: NovelDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
