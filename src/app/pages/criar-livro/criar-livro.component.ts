import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Livro } from '../../components/livro/livro';
import { LivroService } from '../../services/livro.service';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-criar-livro',
  imports: [FormularioComponent],
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
