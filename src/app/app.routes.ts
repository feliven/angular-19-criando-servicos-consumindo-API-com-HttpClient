import { Routes } from '@angular/router';

import { ListaLivrosComponent } from './pages/lista-livros/lista-livros.component';
import { CriarLivroComponent } from './pages/criar-livro/criar-livro.component';
import { EditarLivroComponent } from './pages/editar-livro/editar-livro.component';

export const routes: Routes = [
  {
    path: 'criar-livro',
    component: CriarLivroComponent,
  },
  {
    // ao clicar, queremos ser redirecionados para o componente de edição, mas também precisamos
    // enviar a informação de qual card específico queremos editar.
    // Para isso, faremos a concatenação na rota, que será editar-livro/ID, para termos acesso ao livro específico.
    path: 'editar-livro/:id',
    component: EditarLivroComponent,
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent,
  },
  {
    path: '**',
    component: ListaLivrosComponent,
  },
];
