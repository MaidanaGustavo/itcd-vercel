import { Arquivo, Documento, GuiaSessao, Setor, StatusAtual } from "src/app/shared/model/guias.models";

const docs  =  new Documento();
docs.id = '1';
docs.nome = 'Documento 1';
docs.dataEntregue = new Date();
// docs.arquivos.push(new Arquivo());

const mock:GuiaSessao = new GuiaSessao();
mock.id = '1';
mock.numero = '999/99';
mock.statusAtual = new StatusAtual();
mock.statusAtual.executor = 'xxxxxxxxx';
mock.statusAtual.prazo = new Date();
mock.statusAtual.setor = new Setor();
mock.statusAtual.setor.nome = 'XXXX';
mock.statusAtual.titulo = 'Titulo Status';


mock.documentos = [
  {
    id : '1',
    nome : 'DOCUMENTO 1',
    dataEntregue : new Date(),
    arquivos : [
      {nome : 'Arquivo 001',tamanho : '1kb'},
      {nome : 'Arquivo 002',tamanho : '1kb'},
      {nome : 'Arquivo 003',tamanho : '1kb'},
    ]
  },
  {
    id : '2',
    nome : 'DOCUMENTO 3',
    dataEntregue : new Date('2022-05-23'),
    arquivos : [
      {nome : 'Arquivo 001',tamanho : '1kb'},
      {nome : 'Arquivo 002',tamanho : '1kb'},
      {nome : 'Arquivo 003',tamanho : '1kb'},
    ]
  }
]



export default mock;
