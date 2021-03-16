import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import 'leaflet/dist/images/marker-shadow.png';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './components/peliculas/listado-peliculas/listado-peliculas.component';
import { ListadoGenericoComponent } from './components/shared/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/shared/menu/menu.component';
import { RatingComponent } from './components/shared/rating/rating.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './components/generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './components/actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './components/actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './components/cines/crear-cine/crear-cine.component';
import { IndiceCinesComponent } from './components/cines/indice-cines/indice-cines.component';
import { EditarActorComponent } from './components/actores/editar-actor/editar-actor.component';
import { EditarCineComponent } from './components/cines/editar-cine/editar-cine.component';
import { EditarGeneroComponent } from './components/generos/editar-genero/editar-genero.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';
import { FormularioGenerosComponent } from './components/generos/formulario-generos/formulario-generos.component';
import { FiltroPeliculasComponent } from './components/peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './components/actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './components/shared/input-img/input-img.component';
import { InputMarkdownComponent } from './components/shared/input-markdown/input-markdown.component';
import { FormularioCinesComponent } from './components/cines/formulario-cines/formulario-cines.component';
import { MapasComponent } from './components/shared/mapas/mapas.component';
import { FormularioPeliculasComponent } from './components/peliculas/formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleComponent } from './components/shared/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './components/actores/autocomplete-actores/autocomplete-actores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    IndiceActoresComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCinesComponent,
    EditarActorComponent,
    EditarCineComponent,
    EditarGeneroComponent,
    EditarPeliculaComponent,
    FormularioGenerosComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCinesComponent,
    MapasComponent,
    FormularioPeliculasComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LeafletModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
