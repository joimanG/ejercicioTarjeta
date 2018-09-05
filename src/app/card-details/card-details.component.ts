import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { personas } from '../tarjeta/data';
import { Persona } from '../../../ejercicioTarjeta/src/app/tarjeta/person.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  public personas = personas;
  constructor(private router: Router, private activated: ActivatedRoute) { }

  public nombre: string;
  public texto: string;
   public setPersona(index: number ) {
      this.nombre = personas[index].nombre;
      this.texto = personas[index].texto;
   }

  ngOnInit() {
    this.activated.params.subscribe((info) => {
      // console.log("Params: " + info);
      console.log(`Params: ${info.id}`);
      this.setPersona(info.id);
    });
  }

  public getPath(value) {
    // return `${this.path}/${value}`;
    return '/tarjeta-component';
  }
  public navigate(param) {
    const url = this.getPath(param);
    this.router.navigate([url]);
  }

}
