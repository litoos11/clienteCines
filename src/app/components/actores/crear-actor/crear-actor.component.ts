import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresApi } from '../../shared/utilidades';
import {actorCreacionDTO} from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor(private actoresService: ActoresService, private router: Router ) { }

  ngOnInit(): void {
  }

  errores = [];

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor); 
    this.actoresService.crear(actor)
      .subscribe(() => {
        this.router.navigate(['/actores']);
      }, errores => this.errores = parsearErroresApi(errores));
  }
}
