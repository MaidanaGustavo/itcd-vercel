import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE, Error, ResponseModel } from '../../app.api';
import { Menu } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menus!: Menu[];

  menusObservavel = new BehaviorSubject(this.menus);
  menus_ = this.menusObservavel.asObservable();

  constructor(private http: HttpClient) {
  }

  public buscarTodos(): Observable<any> {
    return this.http.get<ResponseModel>(API_BASE + '/menu').pipe(
      catchError(Error.error)
    );
  }

  public buscarPorLogin(login: string): Observable<any> {
    return this.http.get<ResponseModel>(API_BASE + '/menu/' + login).pipe(
      catchError(Error.error)
    );
  }

  public buscarPorLoginUO(login: string, uo: string): Observable<any> {
    return this.http.get<ResponseModel>(API_BASE + '/menu/' + login + '/' + uo).pipe(
      catchError(Error.error)
    );
  }
}
