import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-herdeiros",
  templateUrl: "./herdeiros.component.html",
  styleUrls: ["./herdeiros.component.css"],
})
export class HerdeirosComponent implements OnInit {
  herdeiros: any[] = [
    {
      cpfCnpj: "000.000.000-00",
      nome: "Herdeiro teste",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
