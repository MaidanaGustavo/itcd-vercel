import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-advogado",
  templateUrl: "./advogado.component.html",
  styleUrls: ["./advogado.component.css"],
})
export class AdvogadoComponent implements OnInit {
  advogado: any = {
    nome: "Advogado teste",
    email: "advogado@teste.com.br",
    ufOAB: "MS",
    numeroOAB: "0000",
  };

  constructor() {}

  ngOnInit() {}
}
