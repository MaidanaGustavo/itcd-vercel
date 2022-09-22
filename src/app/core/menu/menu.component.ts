import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UsuarioLogado } from "../../shared/model/usuario.model";
import { AuthService } from "../service/auth.service";
import { Menu } from "./menu.models";
import { opcoesContribuite, opcoesFiscal } from "./menu.util";

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
  opcoes : Menu[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('Aqui')
    this._itemMenuSelect.subscribe((resp) => {
      this.itemMenuSelected = resp;
    });
    this.authService.usuarioSessao.subscribe((us) => {
      this.usuario = us;
      this.opcoes = this.usuario.user.isFiscal?opcoesFiscal:opcoesContribuite;
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


  changeMenuSelected(n: number) {
    console.log(n);
    this.itemMenuSelectedObsevable.next(n);
    // console.log(this.itemMenuSelectedObsevable.value)
  }
}
