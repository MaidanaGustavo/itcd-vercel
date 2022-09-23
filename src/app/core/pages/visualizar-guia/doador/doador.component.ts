import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doador",
  templateUrl: "./doador.component.html",
  styleUrls: ["./doador.component.css"],
})
export class DoadorComponent implements OnInit {
  doador: any = {
    tipoPessoa: "Física",
    cpjCnpj: "000.000.000-00",
    nome: "doador teste",
    email: "doador@teste.com.br",
    cep: "00000000",
    endereco: "Rua teste",
    bairro: "Bairro teste",
    complemento: "",
    uf: "MS",
    municipio: "Campo Grande",
    telefone: "(67) 00000-0000",
    estadoCivil: "",
    regimeDeCasamento: "",
    nomeDoResponsavel: "",
    cpfDoResponsavel: "",
    outroDoador: [
      {
        cpfCnpj: "000.000.000-00",
        nome: "Teste",
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
