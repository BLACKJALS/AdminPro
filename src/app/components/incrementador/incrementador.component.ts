import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() progreso:number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('Leyenda: ' + this.leyenda + '- Progreso: ' + this.progreso);
  }

  ngOnInit() {
  }

  cambiaEvento(event: number) {
     // console.log(event)
     // let element: any = document.getElementsByName('progreso')[0];
     // console.log(this.txtProgress);

     if (event >= 100) {
        this.progreso = 100;
     } else if (event <= 0) {
        this.progreso = 0;
     } else {
       this.progreso = event;
     }
     // element.value = this.progreso;
     this.txtProgress.nativeElement.value = this.progreso;
     this.cambioValor.emit(this.progreso);
     this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) { this.progreso = 100; return; }
    if (this.progreso <= 0 && valor < 0) { this.progreso = 0; return; }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
  }

}
