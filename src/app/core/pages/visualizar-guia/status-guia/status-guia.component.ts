import { Component, OnInit } from '@angular/core';
import { StatusAtual } from 'src/app/shared/model/guias.models';
import mock from '../mock-guia';

@Component({
  selector: 'app-status-guia',
  templateUrl: './status-guia.component.html',
  styleUrls: ['./status-guia.component.css']
})
export class StatusGuiaComponent implements OnInit {

  constructor() { }
  status : StatusAtual = new StatusAtual();
  ngOnInit() {
    this.status = mock.statusAtual;
  }

}
