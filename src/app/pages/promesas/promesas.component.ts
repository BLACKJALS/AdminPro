import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    /* this.contador().then((mensaje: string) => {
      console.log('terminó', mensaje);
    }).catch( error => console.log('error en la promesa', error)); */
    this.contador().then((mensaje: boolean) => {
      console.log('terminó', mensaje);
    }).catch( error => console.log('error en la promesa', error));
  }

  ngOnInit() {
  }

  contador(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          // reject('error test');
          // resolve('OK');
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}
