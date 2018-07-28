import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirhostessesComponent } from './airhostesses/airhostesses.component';
import { AirhostessDetailsComponent } from './airhostesses/airhostess-details/airhostess-details.component';
import { PilotsComponent } from './pilots/pilots.component';
import { PilotDetailsComponent } from './pilots/pilot-details/pilot-details.component';

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
  },
  {
    path: 'pilots',
    children: [
      {
        path: '',
        component: PilotsComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: PilotDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
