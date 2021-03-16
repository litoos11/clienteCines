import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada } from '../../shared/mapas/coordenada';
import {cineCreacionDTO} from '../cine';

@Component({
  selector: 'app-formulario-cines',
  templateUrl: './formulario-cines.component.html',
  styleUrls: ['./formulario-cines.component.css']
})
export class FormularioCinesComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: cineCreacionDTO;

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coodenadaInical: Coordenada[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitud: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      longitud: [
        '',
        {
          validators: [Validators.required]
        }
      ]
    });

    if(this.modelo != undefined){
      this.form.patchValue(this.modelo);
      this.coodenadaInical.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud})
    }

  }

  OnSubmit(){
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordenada: Coordenada){
    this.form.patchValue(coordenada);
  }

}
