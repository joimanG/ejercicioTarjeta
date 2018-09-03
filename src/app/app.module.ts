import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ResultComponent } from './result/result.component';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ResultComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
