import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-guia',
  templateUrl: './nova-guia.component.html',
  styleUrls: ['./nova-guia.component.css']
})
export class NovaGuiaComponent implements OnInit {

  constructor(private httpClient : HttpClient) { }
  tabSelecionada = 1;
  tab1 = true;
  tab2 = false;
  tab3 = false;
  tab4 = false;
  tab5 = false;
  tab6 = false;
  tab7 = false;
  tab8 = false;
  tab9 = false;
  progress = '12.5%';

  title = "chat-float";
  response = "";
  config = {
    title: "ChatBot",
    subTitle: "New Way of learning"
  };


  municipios :any[] = [];
  ngOnInit() {

    this.httpClient.get<any>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/MS/municipios').pipe().subscribe(resp=>{
      this.municipios = resp;
      console.log(this.municipios);
    })

  }

  setData(message) {
    this.response = message;
  }
  getMessage($event) {
    console.log($event);
  }


}
