import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.paisesSugeridos = [];
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (res) => {
        this.paises = res;
        console.log('res', res);
      },
      (err) => {
        (this.hayError = true), (this.paises = []);
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 3)),
      (err) => (this.paisesSugeridos = [])
    );
  }
}
/**ver 17 */
