import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Lizet Jaramillo M';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Marcos', 'Juan', 'Sergio', 'Andrés', 'Felipe', 'Oscar', 'Fernando'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente en espera',
    '=1': 'tenemos un cliente en espera',
    'other': `tenemos # clientes en espera`
  }

  cambiarNombre(){
    if(this.genero === 'femenino') {
      this.nombre = 'Anderson Castaño M';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Lizet Jaramillo M';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }

  // KeyValue 
  persona = {
    nombre: 'Lizet',
    apellidos: 'Jaramillo M',
    país: 'Colombia'
  };

  // Json
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },    
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ];

  // Async
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Data Promise!')
    }, 3500);
  });

}
