import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GuiaSessao } from 'src/app/shared/model/guias.models';
import mock from '../mock-guia';
import { navsCapa } from './capa-guia.utils';

@Component({
  selector: 'app-capa-guia',
  templateUrl: './capa-guia.component.html',
  styleUrls: ['./capa-guia.component.css']
})
export class CapaGuiaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  loading:boolean = true;
  openMenuToogle :boolean =  true;
  guia :GuiaSessao = new GuiaSessao();
  public navs = navsCapa;
  visaoPaginas = false
  idGuia : string;
  ngOnInit() {
    // this.route.params.subscribe(params=>{
    //     console.log(params);
    //     this.idGuia = params['id'];
    // })
    console.log(this.navs)
    this.guia = mock;
    console.log(this.guia);

  }

}
