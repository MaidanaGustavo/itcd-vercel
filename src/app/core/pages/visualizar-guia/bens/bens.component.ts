import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bens",
  templateUrl: "./bens.component.html",
  styleUrls: ["./bens.component.css"],
})
export class BensComponent implements OnInit {
  bens: any[] = [
    {
      tipo: "IMÓVEL",
      especie: "URBANO",
      municipio: "Campo Grande",
      matricula: "0000",
      ie: "",
      valorDeclarado: "3.400,00",
      valorApurado: "88.000,00",
      porcentagem: "100,00",
      mi: "M",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
