import { Autor } from "./autor.model"

export class Filme {
  id: number;
  nome: String;
  ano: number;
  genero: String;
  autor: Autor;

  constructor(){
    this.id=0;
    this.nome = "";
    this.ano = 0;
    this.genero = "";
    this.autor = new Autor();

  }
}
