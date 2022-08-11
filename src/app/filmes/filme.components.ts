import { Component } from "@angular/core";

@Component(
  {
    selector: 'filme',
    template: `
      <h2>Catalogo de Filmes</h2>
      <label>Filme: {{nomeFilme}}</label>
      <br>
      <label>Publicado: {{anoPublicacao}}</label>
    `
  }
)
export class FilmeComponent {
  nomeFilme: String;
  anoPublicacao: number;

  constructor(){
    this.nomeFilme = "Matrix";
    this.anoPublicacao = 1999;
  }
}
