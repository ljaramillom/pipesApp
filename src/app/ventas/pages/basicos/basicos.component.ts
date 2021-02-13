import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'lizet jaramillo m';
  nombreUpper: string = 'LIZET JARAMILLO M';
  nombreCompleto: string = 'lizet jaramillo m';

  fecha: Date = new Date() // día actual
}
