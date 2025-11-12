import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { MensagemErroService } from '../services/mensagem-erro.service';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  const mensagemErroService = inject(MensagemErroService);

  return next(req).pipe(
    catchError((erro: HttpErrorResponse) => {
      const mensagemErro = 'OPSSS';
      console.log(mensagemErro);
      mensagemErroService.mostrarMensagemDeErro(mensagemErro);
      return throwError(() => erro);
    })
  );
};
