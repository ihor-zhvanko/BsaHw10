import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatInputModule, MatTableModule, MatPaginatorModule, MatExpansionModule, MatChipsModule, MatSelectModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AirportCommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { AirhostessesComponent } from './airhostesses/airhostesses.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AirhostessDetailsComponent } from './airhostesses/airhostess-details/airhostess-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PilotsComponent } from './pilots/pilots.component';
import { PilotDetailsComponent } from './pilots/pilot-details/pilot-details.component';
import { PlaneTypesComponent } from './plane-types/plane-types.component';
import { PlaneTypeDetailsComponent } from './plane-types/plane-type-details/plane-type-details.component';
import { CrewsComponent } from './crews/crews.component';
import { CrewDetailsComponent } from './crews/crew-details/crew-details.component';
import { DeparturesComponent } from './departures/departures.component';
import { DepartureDetailsComponent } from './departures/departure-details/departure-details.component';
import { RoutePipe } from './pipes/route.pipe';
import { CrewPipe } from './pipes/crew.pipe';

@NgModule({
  declarations: [
    AppComponent,

    FullnamePipe,
    RoutePipe,

    AirhostessesComponent,
    AirhostessDetailsComponent,
    NavbarComponent,
    PilotsComponent,
    PilotDetailsComponent,
    PlaneTypesComponent,
    PlaneTypeDetailsComponent,
    CrewsComponent,
    CrewDetailsComponent,
    DeparturesComponent,
    DepartureDetailsComponent,
    CrewPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AirportCommonModule,
    FormsModule,

    // Material
    MatButtonModule, MatSidenavModule, MatIconModule,
    MatCardModule, MatToolbarModule, MatListModule,
    MatDialogModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatTableModule,
    MatPaginatorModule, MatExpansionModule, MatChipsModule,
    MatSelectModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
