import { Component, OnInit } from '@angular/core';
import { Filme } from '../cadastrar-filme/filme.model';
import { FilmeService } from '../cadastrar-filme/filme.service';

@Component({
  selector: 'app-consultar-filme',
  templateUrl: './consultar-filme.component.html',
  styleUrls: ['./consultar-filme.component.css']
})
export class ConsultarFilmeComponent implements OnInit {
  filme: Filme;
  filmeService: FilmeService;
  constructor(filmeService: FilmeService) {
    this.filmeService = filmeService;
    this.filme = new Filme();
  }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this.filmeService.consultarFilmesPorId(form.value.id).subscribe((dados: any) => {
      console.log(dados);
      if (dados != null) {
        this.filme.id = dados.id;
        this.filme.nome = dados.nome;
        this.filme.genero = dados.genero;
        this.filme.ano = dados.ano;
        this.filme.autor.dataDeNascimento = dados.autor.dataDeNascimento;
        this.filme.autor.nomeAutor = dados.autor.nomeAutor;
        this.filme.autor.id = dados.autor.id;
      } else {
        this.filme = new Filme();
      }
    }
    )


  }

}
