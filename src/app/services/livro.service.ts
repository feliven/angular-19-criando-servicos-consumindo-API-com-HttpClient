import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Livro } from '../componentes/livro/livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private enderecoAPI = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) {}

  getLivros() {
    return this.http.get<Livro[]>(this.enderecoAPI);
  }
}
