export interface  Menu {
  id?: string;
  titulo?:  string;
  icone?:  string;
  cor?:  string;
  descricao?:  string;
  rota?: string;
  menus?:  Menu[];
}
