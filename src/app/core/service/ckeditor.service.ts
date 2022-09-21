import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CkeditorConfigService {

  constructor() { }
  public getConfig() {
    return {
      customConfig: environment.caminhoCustomConfig
    };
  }
}
