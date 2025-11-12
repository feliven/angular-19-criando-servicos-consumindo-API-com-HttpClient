import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { Livro } from '../../componentes/livro/livro';
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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.livroService.getLivroPorID(id).subscribe((livro) => {
        this.livroASerEditado = livro;
        console.log(this.livroASerEditado);
      });
    }
  }
}
