import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const appRoutes: Routes = [
    // { path: 'first', component: FirstComponent },
    { path: 'tarjeta-component',      component: TarjetaComponent },
    { path: 'card-details/:id',      component: CardDetailsComponent },
  ];
