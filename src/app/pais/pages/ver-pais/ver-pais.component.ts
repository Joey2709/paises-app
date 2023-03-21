import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent {
  constructor(
    private activatedRouted: ActivatedRoute,
    private paisService: PaisService
  ) {}

  pais!: Country;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /*this.activatedRouted.params.subscribe(({ id }) => {
      console.log('params', id);
      this.paisService.getPaisporAlpha(id).subscribe((pais) => {
        console.log('pais', pais);
      });
    });*/
    this.activatedRouted.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisporAlpha(id)),
        tap((res: any) => console.log('res', res[0]))
      )
      .subscribe((pais) => (this.pais = pais[0]));
  }
}
