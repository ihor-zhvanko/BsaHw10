import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule,
  MatListModule, MatDialogModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatInputModule
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
import { PlaneTypeComponent } from './plane-types/plane-type/plane-type.component';

@NgModule({
  declarations: [
    AppComponent,

    FullnamePipe,

    AirhostessesComponent,
    AirhostessDetailsComponent,
    NavbarComponent,
    PilotsComponent,
    PilotDetailsComponent,
    PlaneTypesComponent,
    PlaneTypeComponent
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
    MatNativeDateModule, MatInputModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
