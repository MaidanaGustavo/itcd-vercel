import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-viuva-meeira",
  templateUrl: "./viuva-meeira.component.html",
  styleUrls: ["./viuva-meeira.component.css"],
})
export class ViuvaMeeiraComponent implements OnInit {
  viuvoaMeeiroa: any = {
    cpfCnpj: "000.000.000-00",
    nome: "teste",
    cep: "00000000",
    endereco: "Endereço teste",
    bairro: "Bairro teste",
    complemento: "",
    uf: "MS",
    municipio: "Campo Grande",
    telefone: "",
  };

  constructor() {}

  ngOnInit() {}
}
