import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MultipleSelectorModel} from '../../shared/selector-multiple/MultipleSelectorModel';
import {PeliculaCrecacionDTO, PeliculaDTO} from '../pelicula';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  
  @Input()
  modelo: PeliculaDTO;

  @Output()
  OnSubmit: EventEmitter<PeliculaCrecacionDTO> = new EventEmitter<PeliculaCrecacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Terror'},
    {llave: 3, valor: 'Comedia'}
  ];

  generosSeleccionados: MultipleSelectorModel[] = []; 

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Soledad'},
    {llave: 2, valor: 'Purga'},
    {llave: 3, valor: 'Veracruz'}
  ];

  cinesSeleccionados: MultipleSelectorModel[] = []; 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto: string){
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios(){
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);
    
    this.OnSubmit.emit(this.form.value);
  }

}
