import { Component, Input } from "@angular/core";

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
  @Input() nomeFilme: String;
  @Input() anoPublicacao: number;

  constructor(){
    this.nomeFilme = "Matrix";
    this.anoPublicacao = 1999;
  }

}
