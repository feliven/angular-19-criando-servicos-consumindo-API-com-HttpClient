import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro',
  imports: [CommonModule, BotaoComponent],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro = input.required<Livro>();
  idLivroASerExcluido = output<string>();

  constructor(private livroService: LivroService) {}

  alternarFavoritoNaPagina() {
    const livroAtualizado = {
      ...this.livro(),
      favorito: !this.livro().favorito,
    };

    this.livroService.setFavorito(livroAtualizado).subscribe(() => {
      this.livro().favorito = livroAtualizado.favorito;
    });

    // this.livro().favorito = !this.livro().favorito;
  }

  emitirOutputExcluir() {
    this.idLivroASerExcluido.emit(this.livro().id);
  }
}
