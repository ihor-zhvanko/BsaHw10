import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule,
  MatListModule, MatDialogModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AirportCommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { AirhostessesComponent } from './airhostesses/airhostesses.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AirhostessDetailsComponent } from './airhostesses/airhostess-details/airhostess-details.component';
import { AirhostessModalComponent } from './modals/airhostess-modal/airhostess-modal.component';

@NgModule({
  declarations: [
    AppComponent,

    FullnamePipe,

    AirhostessesComponent,
    AirhostessDetailsComponent,
    AirhostessModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AirportCommonModule,

    // Material
    MatButtonModule, MatSidenavModule, MatIconModule,
    MatCardModule, MatToolbarModule, MatListModule,
    MatDialogModule

  ],
  entryComponents: [AirhostessModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
