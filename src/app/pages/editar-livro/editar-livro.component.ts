import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormularioComponent } from '../../components/formulario/formulario.component';
import { Livro } from '../../components/livro/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-editar-livro',
  imports: [FormularioComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css',
})
export class EditarLivroComponent implements OnInit {
  livroASerEditado!: Livro;

  constructor(
    private livroService: LivroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.paramMap);

    if (id) {
      this.livroService.getLivroPorID(id).subscribe((livro) => {
        this.livroASerEditado = livro;
        console.log(this.livroASerEditado);
      });
    }
  }

  editarLivro(livro: Livro) {
    this.livroService.putLivro(livro).subscribe(() => {
      this.router.navigate(['lista-livros']);
    });
  }
}
