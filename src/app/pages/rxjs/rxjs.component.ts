import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  subscription: Subscription;

  constructor() {
    // this.regresaObservable().pipe(retry(2)).subscribe( (numero: number) => {
    this.subscription = this.regresaObservable().pipe(retry(2)).subscribe( (numero: number) => {
      console.log('Subs' + numero);
    },
      error => console.log('Error en el obs' + error),
      () => console.log('el observador terminó')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 1;
      let intervalo = setInterval(() => {
        observer.next(contador);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('error presentado');
        // }

        contador += 1;
      }, 1000);
    }).pipe(map( (resp: any) => {
      return resp;
    }),
      filter( (resp, index) => {
        if (resp % 2 === 0) {
          return false;
        } else {
          return true;
        }
    })
    );
  }

}
