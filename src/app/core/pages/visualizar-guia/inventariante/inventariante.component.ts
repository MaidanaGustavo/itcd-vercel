import { Component, OnInit } from "@angular/core";

export interface Inventariante {
  tipoPessoa: string;
  cpfCnpj: string;
  nome: string;
  email: string;
  cep: string;
  endereco: string;
  bairro: string;
  complemento: string;
  uf: string;
  municipio: string;
  telefone: string;
}

@Component({
  selector: "app-inventariante",
  templateUrl: "./inventariante.component.html",
  styleUrls: ["./inventariante.component.css"],
})
export class InventarianteComponent implements OnInit {
  inventariante: Inventariante = {
    tipoPessoa: "Física",
    cpfCnpj: "000.000.000-00",
    nome: "Iventariante teste",
    email: "doador@teste.com.br",
    cep: "00000000",
    endereco: "Endereço teste",
    bairro: "Bairro teste",
    complemento: "",
    uf: "MS",
    municipio: "Campo Grande",
    telefone: "(67) 00000-0000",
  };

  constructor() {}

  ngOnInit() {}
}
