import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorComponent } from './autor/autor.components';
import { FilmeComponent } from './filmes/filme.components';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { FilmeService } from './cadastrar-filme/filme.service';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    AutorComponent,
    CadastrarFilmeComponent,
    ConsultarFilmeComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
