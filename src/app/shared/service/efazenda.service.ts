import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE, Error, ResponseModel } from '../../app.api';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class eFazendaService {

  private usuarioIcms: Usuario = new Usuario;
  usuarioIcmsObservavel = new BehaviorSubject(this.usuarioIcms);
  usuarioIcms_ = this.usuarioIcmsObservavel.asObservable();

  constructor(private http: HttpClient) {
  }

  public buscarUsuarioFuncionarioPorMatricula(identificador: string): Observable<any> {
    return this.http.get<ResponseModel>(API_BASE + '/efazenda/buscarUsuarioFuncionarioPorMatricula/' + identificador).pipe(
      catchError(Error.error)
    );
  }

  public buscarUsuarioFuncionarioPorNome(identificador: string): Observable<any> {
    return this.http.get<ResponseModel>(API_BASE + '/efazenda/buscarUsuarioFuncionarioPorNome/' + identificador).pipe(
      catchError(Error.error)
    );
  }
}
