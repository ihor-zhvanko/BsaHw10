import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirhostessesComponent } from './airhostesses/airhostesses.component';
import { AirhostessDetailsComponent } from './airhostesses/airhostess-details/airhostess-details.component';
import { PilotsComponent } from './pilots/pilots.component';
import { PilotDetailsComponent } from './pilots/pilot-details/pilot-details.component';
import { PlaneTypesComponent } from './plane-types/plane-types.component';
import { PlaneTypeDetailsComponent } from './plane-types/plane-type-details/plane-type-details.component';
import { CrewsComponent } from './crews/crews.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crews',
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
  },
  {
    path: 'planetypes',
    children: [
      {
        path: '',
        component: PlaneTypesComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: PlaneTypeDetailsComponent
      }
    ]
  },
  {
    path: 'crews',
    children: [
      {
        path: '',
        component: CrewsComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: CrewDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
