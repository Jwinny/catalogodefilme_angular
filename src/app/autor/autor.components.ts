import { Component } from "@angular/core";

@Component({
  selector: 'autor',
  template: `
  <h2>Autor: {{nomeDoAutor}}</h2>
  <label>Data de Nascimento: {{dataDeNascimento}}</label>
  `
})
export class AutorComponent {
  nomeDoAutor:String;
  dataDeNascimento:String;

  constructor(){
    this.nomeDoAutor ="Lana Wachowski";
    this.dataDeNascimento="29 de dezembro de 1967";
  }
}
