import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: [],
})
export class PorCapitalComponent {
  constructor(private paisService: PaisService) {}
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe(
      (res) => {
        this.paises = res;
      },
      (err) => {
        (this.hayError = true), (this.paises = []);
      }
    );
  }
  sugerencias(termino: string) {
    this.hayError = false;
  }
}
