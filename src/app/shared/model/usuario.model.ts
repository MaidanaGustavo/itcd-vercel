import { EGrupoSistema } from "../enum/grupo-sistema.enum";

export class UsuarioLogado {
  user: Usuario;
  token: string;
}

export class Usuario {

  grupo: number;
  userName: string;
  matricula: number;
  cargo: string;
  nome: string;

  unidade: number;
  coordenadoria: number;
  coordenadoriaDescricao: string;
  email: string;
  cpf: string;
  situacao: string;
  grupoSistema: EGrupoSistema;
  grupoSistemaSelecionado: EGrupoSistema;
  coordenadoriaTransito: boolean;
  isFiscal : boolean;
}
