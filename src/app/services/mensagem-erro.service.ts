import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemErroService {
  constructor(private snackBar: MatSnackBar) {}

  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action);
  // }

  mostrarMensagemDeErro(mensagem: string) {
    const configuracoesSnackBar: MatSnackBarConfig = {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    };
    this.snackBar.open(mensagem, 'Fechar', configuracoesSnackBar);
  }
}
