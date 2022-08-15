import { Injectable } from "@angular/core";
import { Filme } from "./filme.model";
import { HttpClient } from "@angular/common/http"
//import { subscribeOn, Subscriber } from "rxjs";
@Injectable()
export class FilmeService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  cadastrarFilmes(filme: Filme) {
    return this.httpClient.post
    ('http://localhost:8080/CatalogoDeFilmes/persistir-filme',filme);
  }

  consultarFilmes(filme: Filme) {
    return this.httpClient.get<Filme>
    ('http://localhost:8080/CatalogoDeFilmes/consultar-filme?id=' + filme.id);
  }

  consultarFilmesPorId(id: number) {
    return this.httpClient.get<Filme>
    ('http://localhost:8080/CatalogoDeFilmes/consultar-filme?id=' + id);
  }
}
