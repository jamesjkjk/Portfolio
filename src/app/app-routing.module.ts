import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: VideoComponent},
  { path: 'VideoComponent', component: VideoComponent},
  { path: 'ProjectsComponent', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
