import { Component, OnInit } from '@angular/core';
import { Filme } from './filme.model';
import { FilmeService } from './filme.service';
@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {

  filmeService: FilmeService;

  constructor(filmeService: FilmeService) {
    this.filmeService = filmeService;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let filme: Filme;

    filme = {
      id: 0,
      nome: form.value.nome,
      genero: form.value.genero,
      ano: form.value.ano,
      autor: {
        id: 0,
        nomeAutor: form.value.nomeAutor,
        dataDeNascimento: form.value.dataNascimento
      }
    }
    this.filmeService.cadastrarFilmes(filme).subscribe((dados: any)=> {
      console.log("Cadastrado com sucesso");
      console.log(dados);
    });

  }
}
