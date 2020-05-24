import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  @Input('Labels') Labels: Label[] = [];
  @Input('Data') Data: MultiDataSet = [];
  @Input('Type') Type: ChartType;
  @Input('Leyenda') Leyenda: string;

  constructor() {}

  ngOnInit() {
  }

}
