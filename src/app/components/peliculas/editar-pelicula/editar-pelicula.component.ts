import { Component, OnInit } from '@angular/core';
import {PeliculaCrecacionDTO, PeliculaDTO} from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {titulo: 'Spider-Man', trailer: 'abs', enCines: true, resumen: 'otra cosa', fechaLanzamiento: new Date(), poster: 'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'};
  
  ngOnInit(): void {
  }

  guardarCambios(pelicula: PeliculaCrecacionDTO){
    console.log(pelicula);
  }

}
