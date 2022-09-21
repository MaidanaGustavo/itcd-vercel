import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE, Error, ResponseModel } from '../../app.api';
import { Usuario } from '../model/usuario.model';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) {
    };


    //public buscarTodos(): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.get<ResponseModel>(API_BASE + '/usuario').pipe(
    //        catchError(Error.error)
    //    );
    //}


    //public buscarPorId(id: number): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.get<ResponseModel>(API_BASE + '/usuario/' + id).pipe(
    //        catchError(Error.error)
    //    );
    //}

    //public buscarPorLogin(login: string): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.get<ResponseModel>(API_BASE + '/usuario/login/' + login).pipe(
    //        catchError(Error.error)
    //    );
    //}

    //public atualizar(usuario: Usuario): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.put<ResponseModel>(API_BASE + '/usuario', usuario);
    //}

    //public salvar(usuario: Usuario): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.post<ResponseModel>(API_BASE + '/usuario', usuario);
    //}

    //public buscarPorPapel(papel: string, siglaUnidade?: string): Observable<any> {
    //    if (siglaUnidade) {
    //        let headers = new HttpParams().set("siglaUnidade", siglaUnidade);
    //        return this.http.get<ResponseModel>(API_BASE + '/usuario/papel/' + papel, {params: headers}
    //        ).pipe(
    //            catchError(Error.error)
    //        );
    //    } else {
    //        return this.http.get<ResponseModel>(API_BASE + '/usuario/papel/' + papel).pipe(
    //            catchError(Error.error)
    //        );
    //    }
    //}

    //public buscarSolicitacaoAlteracao(): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.get<ResponseModel>(API_BASE + '/usuario/solicitacaoAlteracao').pipe(
    //        catchError(Error.error)
    //    );
    //}

    //public buscarPorUnidadeOrganizacional(sigla: string): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.get<ResponseModel>(API_BASE + '/usuario/unidadeOrganizacional/' + sigla).pipe(
    //        catchError(Error.error)
    //    );
    //}

    //public buscaUsuarioSetor(sigla: string): Observable<any> {
    //    let headers = new HttpHeaders();
    //    return this.http.get<ResponseModel>(API_BASE + '/usuario/setor/' + sigla).pipe(
    //        catchError(Error.error)
    //    );
    //}

    public dataPublicacao(): Observable<any> {
        return this.http.get<ResponseModel>(API_BASE + '/system/dataVersao').pipe(
            catchError(Error.error)
        );
    }
}
