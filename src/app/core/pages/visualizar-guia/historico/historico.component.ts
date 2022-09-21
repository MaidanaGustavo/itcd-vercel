import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  constructor() { }
  filter: string;
  historicos : any[] = [
    {
      usuario : 'Usuario',
      data : new Date(),
      descricao : 'Historico do processo 1'
    },
    {
      usuario : 'Usuario 2 ',
      data : new Date(),
      descricao : 'Historico do processo 2'
    }
  ]
  ngOnInit() {
  }

}
