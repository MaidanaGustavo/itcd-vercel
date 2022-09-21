import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UsuarioLogado } from "../../shared/model/usuario.model";
import { AuthService } from "../service/auth.service";

@Component({
  selector: "itcd-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  usuario: UsuarioLogado;
  tipoLogin: string;
  itemMenuSelected: number;
  itemMenuSelectedObsevable = new BehaviorSubject(1);
  public _itemMenuSelect = this.itemMenuSelectedObsevable.asObservable();

  mensagens = [
    {
      id: 1,
      descricao:
        "A Análise da Guia  n.xxxx foi finalizada, o DAEMS referente a esta Guia já se encontra liberado para pagamento",
      tipo: "info",
    },
    {
      id: 2,
      descricao:
        "A Análise da Reclamação  n.xxxx foi finalizada, a resposta da análise já se encontra disponível",
      tipo: "warning",
    },
  ];
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this._itemMenuSelect.subscribe((resp) => {
      console.log(resp);
      this.itemMenuSelected = resp;
    });
    this.authService.usuarioSessao.subscribe((us) => {
      this.usuario = us;
      this.authService.profileSistema.subscribe((p) => {
        switch (p) {
          case "Development":
          case "Homologation":
          case "dev":
          case "hom":
          case "local":
            this.homolog(this.usuario.user.grupo);
            break;
          case "Production":
          case "prd":
            this.prod(this.usuario.user.grupo);
            break;
        }
        this.authService.tipoLoginObservable.next(this.tipoLogin);
      });
    });
  }

  homolog(idGrupo: number) {
    switch (idGrupo) {
      case 1156:
        this.tipoLogin = "CONTRIBUINTE";
        break;
      case 1157:
        this.tipoLogin = "DEVELOPER";
        break;
      default:
        this.tipoLogin = "INDEFINIDO";
        break;
    }
  }

  prod(idGrupo: number) {
    switch (idGrupo) {
      case 900:
        this.tipoLogin = "DEVELOPER";
        break;
      case 898:
        this.tipoLogin = "CONTRIBUINTE";
        break;
      default:
        this.tipoLogin = "INDEFINIDO";
        break;
    }
  }

  marcarComoLida(item: any) {
    let msgs = this.mensagens.filter((element) => element.id !== item.id);
    this.mensagens = msgs;
  }

  changeMenuSelected(n: number) {
    console.log(n);
    this.itemMenuSelectedObsevable.next(n);
    // console.log(this.itemMenuSelectedObsevable.value)
  }
}
