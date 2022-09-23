import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-donatario",
  templateUrl: "./donatario.component.html",
  styleUrls: ["./donatario.component.css"],
})
export class DonatarioComponent implements OnInit {
  donatario: any = {
    tipoPessoa: "Física",
    cpfCnpj: "000.000.000-00",
    nome: "Nome teste",
    email: "doador@teste.com.br",
    cep: "00000000",
    endereco: "Endereço teste",
    bairro: "Bairro teste",
    complemento: "",
    uf: "MS",
    municipio: "Campo Grande",
    telefone: "(67) 00000-0000",
    outroDonatario: [
      {
        cpfCnpj: "000.000.000-00",
        nome: "Teste",
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
