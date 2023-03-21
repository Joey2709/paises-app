import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  constructor(private paisService: PaisService) {}
  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  getClaseCss(region: string) {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {
    if (this.regionActiva === region) return;
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe((res) => {
      console.log('res', res), (this.paises = res);
    });
  }
}
