import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-espolio",
  templateUrl: "./espolio.component.html",
  styleUrls: ["./espolio.component.css"],
})
export class EspolioComponent implements OnInit {
  espolio: any = {
    cpfCnpj: "000.000.000-000",
    nome: "Espólio teste",
    uf: "MS",
    municipio: "Campo Grande",
    estadoCivil: "Casado",
    regimeCasamento: "Comunhão Universal de Bens",
    dataCasamento: "00/00/0000",
  };
  constructor() {}

  ngOnInit() {}
}
