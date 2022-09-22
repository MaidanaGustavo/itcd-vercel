import { Menu } from "./menu.models";

export  const opcoesFiscal: Menu[] = [
  {
    id : '1',
    titulo : 'Dashboard',
    icone : 'fa fa-line-chart',
    rota : '/'
  },
  {
    id : '2',
    titulo : 'Guias',
    icone : 'fa fa-list-alt',
    rota : '/pages/guias'
  },
  {
    id : '3',
    titulo : 'Relatórios',
    icone : 'fa fa-area-chart',
    rota : '/pages/relatorios'
  },
  {
    id : '4',
    titulo : 'Atendimento Guia',
    icone : 'fa fa-list-alt',
    rota : '/pages/atendimento-guia'
  },
  {
    id : '5',
    titulo : 'Reclamações',
    icone : 'fa fa-list-alt',
    rota : '/pages/reclamacoes'
  },
  {
    id : '6',
    titulo : 'DAEMS',
    icone : 'icon-grid',
    rota : '/pages/daems'
  },
]


export const opcoesContribuite: Menu[] = [
  {
    id : '1',
    titulo : 'Inicio',
    icone : 'fa fa-home',
    rota : '/'
  },
  {
    id : '2',
    titulo : 'Guias',
    icone : 'fa fa-list-alt',
    rota : '/pages/guias'
  },
  {
    id : '3',
    titulo : 'DAEMS',
    icone : 'icon-grid',
    rota : '/pages/daems'
  },
]
