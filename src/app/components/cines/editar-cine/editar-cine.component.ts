import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {cineDTO} from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: cineDTO = {nombre: "Soledad", latitud: 19.041465110206552 , longitud: -96.41903579235078};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  } 

  guardarCambios(cine: cineDTO){
    console.log(cine);
  }
}
