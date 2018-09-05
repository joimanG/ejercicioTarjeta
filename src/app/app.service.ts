import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { personas } from './tarjeta/data';

@Injectable()
export class AppService {
    private datos = personas;
    private observer = new Subject();
    public $obs = this.observer.asObservable();
    // this.service.$obs.subscribe((value) => { // Do something with value });
    inform(value) {
        this.observer.next(value);
    }
    // this.service.inform("new value");
    getDatos(index: number) {
        return this.datos[index];
    }

    setDatos(value) {
        this.datos = value;
    }

}
