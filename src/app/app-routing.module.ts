import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirhostessesComponent } from './airhostesses/airhostesses.component';
import { AirhostessDetailsComponent } from './airhostesses/airhostess-details/airhostess-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'airhostesses',
    pathMatch: 'full'
  },
  {
    path: 'airhostesses',
    children: [
      {
        path: '',
        component: AirhostessesComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: AirhostessDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
