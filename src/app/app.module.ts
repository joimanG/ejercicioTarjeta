import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ResultComponent } from './result/result.component';
import { ActionsComponent } from './actions/actions.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routing';
import { CardDetailsComponent } from './card-details/card-details.component';
import { AppService } from './app.service';
import { AppHttpService } from './app.http.service';
import { AppHttpRepositoryService } from './app.http.repository.service';
import { BordeDirective } from './directives/borde.directive';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    ResultComponent,
    ActionsComponent,
    CardDetailsComponent,
    BordeDirective,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [AppService, AppHttpService, AppHttpRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
