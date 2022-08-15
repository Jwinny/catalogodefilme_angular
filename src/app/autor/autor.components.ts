import { Component, Input } from "@angular/core";

@Component({
  selector: 'autor',
  template: `
  <h2>Autor: {{nomeDoAutor}}</h2>
  <label>Data de Nascimento: {{dataDeNascimento}}</label>
  <br>
  <label>Id do Autor: {{idAutor}}</label>
  `
})
export class AutorComponent {
  @Input() nomeDoAutor:String;
  @Input() dataDeNascimento:String;
  @Input() idAutor:number;

  constructor(){
    this.nomeDoAutor ="Lana Wachowski";
    this.dataDeNascimento="29 de dezembro de 1967";
    this.idAutor=0;
  }
}
