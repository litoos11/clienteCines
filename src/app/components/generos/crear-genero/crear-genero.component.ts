import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresApi } from '../../shared/utilidades';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {
  errores: string[] = [];

  constructor(private router: Router, private generoService: GenerosService) { }

  guardarCambios(genero: generoCreacionDTO){
    this.generoService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);
    }, (error) => this.errores = parsearErroresApi(error)
    );
  }

}
