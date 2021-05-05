import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { generoDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private generosService: GenerosService) { }

  generos: generoDTO[];

  columnasAMostrar: string[] = ['id', 'nombre', 'acciones'];

  cantidadTotalRegistros: string;
  paginaActual: number = 1;
  cantidadRegistrosMostrar: number = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosMostrar);
  }

  cargarRegistros(pagina: number, cantidadRegistrosMostrar: number){
    this.generosService.obtenerTodos(pagina, cantidadRegistrosMostrar)
      .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
        this.generos = respuesta.body;
        this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
      }, error => console.log(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosMostrar);
  }

  borrar(id: number){
    this.generosService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosMostrar);
    }, error => console.log(error));
  }
}
