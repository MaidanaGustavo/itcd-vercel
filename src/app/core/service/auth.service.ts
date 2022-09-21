import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { API_AUTH, Error, ResponseModel } from "../../app.api";
import { Usuario, UsuarioLogado } from "../../shared/model/usuario.model";
import { UsuarioService } from "../../shared/service/usuario.service";

@Injectable()
export class AuthService {
  private usuario: UsuarioLogado = new UsuarioLogado();
  private userFull: Usuario = new Usuario();
  public usuarioLogado = false;
  private dataSistema: Date = new Date();
  private versao: string = "";
  private rota: string = "";
  private mensagemW: string = "";
  private mensagemD: string = "";
  private mensagemI: string = "";
  private mensagemS: string = "";

  usuarioObservable = new BehaviorSubject(this.usuario);
  userFullObservable = new BehaviorSubject(this.userFull);
  dataPublicacaoObservable = new BehaviorSubject(this.dataSistema);
  versaoObservable = new BehaviorSubject(this.versao);

  rotaObservable = new BehaviorSubject(this.rota);
  mensagemWObservable = new BehaviorSubject(this.mensagemW);
  mensagemDObservable = new BehaviorSubject(this.mensagemD);
  mensagemIObservable = new BehaviorSubject(this.mensagemI);
  mensagemSObservable = new BehaviorSubject(this.mensagemS);

  usuarioSessao = this.usuarioObservable.asObservable();
  userFullSessao = this.userFullObservable.asObservable();
  dataPublicacao = this.dataPublicacaoObservable.asObservable();
  versaoSistema = this.versaoObservable.asObservable();
  rotaSessao = this.rotaObservable.asObservable();

  mensagemW_ = this.mensagemWObservable.asObservable();
  mensagemD_ = this.mensagemDObservable.asObservable();
  mensagemI_ = this.mensagemIObservable.asObservable();
  mensagemS_ = this.mensagemSObservable.asObservable();

  private usuarioDetalhe: any = {};
  usuarioDetalheObservable = new BehaviorSubject(this.usuarioDetalhe);
  usuarioDetalhe_ = this.usuarioDetalheObservable.asObservable();

  private tipoLogin = "";
  tipoLoginObservable = new BehaviorSubject(this.tipoLogin);
  tipoLogin_ = this.tipoLoginObservable.asObservable();
  private profile = "";
  profileObservable = new BehaviorSubject(this.profile);
  profileSistema = this.profileObservable.asObservable();

  private txt = "";
  txtObservable = new BehaviorSubject(this.txt);
  txt_ = this.txtObservable.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  public login(txt: string) {


    //
      let user : UsuarioLogado = new UsuarioLogado();
      user.token = 'VVNSPWdtYWlkYW5hJklQPTIwMS44OC4yMjAuMjMzJk1BVD0mR1JVPTAmVU5JPTQwMSZTSVM9MCZNT0Q9LTEmTklWPTAwMDAwMDAwMDAwMCZEVEhSPTEyLzA5LzIwMjIgMjE6NTI6MzU=&DUA=MDkvMDkvMjAyMiAxNDoxOTowMA==';
    //
    user.user = new Usuario();
    user.user.userName = 'gmaidana';

    this.txtObservable.next(txt);
    localStorage.setItem('Token', user.token);
    this.setUsuarioLogado(user);

    // this.autenticar(txt).subscribe((retorno) => {
    //   if (retorno != null && retorno.status.code === 200) {
    //     this.txtObservable.next(txt);
    //     localStorage.setItem('Token', retorno.data.token);
    //     this.setUsuarioLogado(retorno.data);
    //   } else {
    //     this.login(txt);
    //   }
    // });
  }

  private autenticar(txt: string): Observable<any> {
    return this.http.get<ResponseModel>(API_AUTH + "/authenticate/" + txt)
      .pipe(catchError(Error.error));
  }

  private setUsuarioLogado(usuario: UsuarioLogado) {
    this.usuarioObservable.next(usuario);
    this.usuarioSessao.subscribe((us) => {
      console.log(us)
      if (us && us.user) {
        this.usuarioService.dataPublicacao().subscribe((dataVersao) => {
          this.dataPublicacaoObservable.next(
            dataVersao.data.dataPublicacao
          );
          this.versaoObservable.next(dataVersao.data.versao);
        });
        this.usuarioLogado = true;
        this.router.navigate(["/menu"]);
      }
    });
  }
}
