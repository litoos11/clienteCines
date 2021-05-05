import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresApi } from '../../shared/utilidades';
import { generoCreacionDTO, generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute,
    private generosService: GenerosService){}

  modelo: generoDTO;
  errores: string[] = [];
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id)
      this.generosService.obtenerPorId(params.id)
        .subscribe(genero => {
          this.modelo = genero;
        }, () => this.router.navigate(['/generos']));
    });
  }

  guardarCambios(genero: generoCreacionDTO){
    this.generosService.editar(this.modelo.id, genero)
      .subscribe(() => {
        this.router.navigate(['/generos']);
      },  (error) => this.errores = parsearErroresApi(error));
  } 

}
