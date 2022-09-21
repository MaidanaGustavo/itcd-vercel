import { Component, OnInit } from "@angular/core";
import { PaginationInstance } from "ngx-pagination";

interface IGuia {
  nGuia: number;
  dtMov: string;
  natTipOp: string;
  qtdeDias: number;
  situacao: string;
  reclAb: boolean;
  prioridade: boolean;
}

const GUIAS: IGuia[] = [
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Finalizada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Em análise",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Em preenchimento",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Isenta",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Pendente",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Cancelada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
  {
    nGuia: 1234,
    dtMov: "19/09/2022",
    natTipOp: "teste",
    qtdeDias: 10,
    situacao: "Enviada",
    reclAb: true,
    prioridade: false,
  },
];

@Component({
  selector: "app-fiscal-guias",
  templateUrl: "./fiscal-guias.component.html",
})
export class FiscalGuiasComponent implements OnInit {
  guias: IGuia[] = [...GUIAS];

  public filter: string = "";
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = false;
  public config: PaginationInstance = {
    id: "advanced",
    itemsPerPage: 10,
    currentPage: 1,
  };
  public labels: any = {
    previousLabel: "Anterior",
    nextLabel: "Próxima",
    screenReaderPaginationLabel: "Pagination",
    screenReaderPageLabel: "page",
    screenReaderCurrentLabel: `You're on page`,
  };
  public eventLog: string[] = [];

  private popped = [];

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
  }

  pushItem() {
    let item = this.popped.pop() || "A newly-created meal!";
    this.guias.push(item);
  }

  ngOnInit(): void {}

  popItem() {
    this.popped.push(this.guias.pop());
  }
}
