import { Component } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../componentes/livro/livro';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-criar-livro',
  imports: [],
  templateUrl: './criar-livro.component.html',
  styleUrl: './criar-livro.component.css',
})
export class CriarLivroComponent {
  constructor(private livroService: LivroService, private router: Router) {}

  criarLivro(livro: Livro): Subscription {
    return this.livroService.setLivro(livro).subscribe(() => {
      this.router.navigate(['lista-livros']);
    });
  }
}
