
export class Setor{
  id? : string;
  nome : string;

}
export class StatusAtual {
  titulo : string;
  setor :Setor;
  executor : string;
  prazo : Date;
}
export class Arquivo{
  id? : string;
  nome : string;
  tamanho : string;
}
export class Documento{
  id?:string;
  nome: string;
  arquivos: Arquivo[];
  dataEntregue: Date;
}
export class  GuiaSessao{
  id?: string;
  numero: string;
  statusAtual:  StatusAtual;
  documentos: Documento[];
}
