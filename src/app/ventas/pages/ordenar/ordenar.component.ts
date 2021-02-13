import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayus: boolean = true;
  ordenarPor: string = '';
  texto: string;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
  ];

  constructor() {
    this.texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam aliquam non, deleniti aut laudantium corporis illo praesentium.';
  }

  convertirMayus(){
    this.enMayus = !this.enMayus;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log(this.ordenarPor);
  }

}
