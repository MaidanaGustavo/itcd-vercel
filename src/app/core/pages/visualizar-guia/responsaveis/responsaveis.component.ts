import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-responsaveis",
  templateUrl: "./responsaveis.component.html",
  styleUrls: ["./responsaveis.component.css"],
})
export class ResponsaveisComponent implements OnInit {
  responsavel: any = {
    nome: "Teste",
    cpfCnpj: "000.000.000-00",
    email: "doador@teste.com.br",
    telefone: "(67) 0000-0000",
  };

  constructor() {}

  ngOnInit() {}
}
