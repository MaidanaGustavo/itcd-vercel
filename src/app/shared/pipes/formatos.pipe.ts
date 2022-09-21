import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ajustePessoaCpfCnpj'
})
export class AjustePessoaCpfCnpjPipe implements PipeTransform {
    transform(value: string, args?: any): any {
        switch (value.length) {
            case 14:
                return 'Jurídica';
            case 11:
                return 'Fisica';
            default:
                return '';
        }
    }
}

@Pipe({
    name: 'ajustaPessoa'
})
export class AjustaPessoaPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value === 'J') {
            return 'Jurídica';
        } else if (value === 'F') {
            return 'Fisica';
        }
        return null;
    }
}

@Pipe({
    name: 'ajustaCargo'
})
export class AjustaCargoPipe implements PipeTransform {
    transform(value: any): any {
        if (value === 1) {
            return 'Auditor Fiscal da Receita Estadual';
        }
        return value;
    }
}

@Pipe({
    name: 'tipoFichaControle'
})
export class TipoFichaControle implements PipeTransform {
    transform(value: any, args?: any): any {
        switch (value) {
            case 'FICHA_CONTROLE_AGRAVO':
                return 'Ficha de Controle do Agravo';
            case 'FICHA_CONTROLE_RECURSO_ESPECIAL':
                return 'Ficha de Controle do Recurso Especial';
            case 'FICHA_CONTROLE_REVISAO':
                return 'Ficha de Controle da Homologação da Revisão';
            case 'FICHA_CONTROLE_SEGUNDA_INSTANCIA':
                return 'Ficha de Controle da Segunda Instância';
            default:
                return null;
        }
    }
}


@Pipe({
    name: 'eventoRegistroFicha'
})
export class EventoRegistroFichaPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        switch (value) {
            case 'ENCAMINHAMENTO':
                return 'Encaminhamento';
            case 'PEDIDO_VISTA':
                return 'Pedido de Vista';
            case 'OUTROS':
                return 'Outros';
            default:
                return null;
        }
    }
}

@Pipe({name: 'spi'})
export class SpiPipe implements PipeTransform {
    transform(value: any): string {
        const spi = value.toString().replace(/\D/g, '');
        return spi.substring(0, 2) + '.' + spi.substring(2, 8) + '.' + spi.substring(8, spi.length);
    }
}

@Pipe({
    name: 'tempestividade'
})
export class EntregueForaDoPrazoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value ? 'Intempestivo' : 'Tempestivo';
    }

}


@Pipe({name: 'setor'})
export class SetorPipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        if (value) {
            if (args[0].atividadeAtual.papeisParticipantes.length === 1 && args[0].atividadeAtual.papeisParticipantes[0] === 'AUTUANTE') {
                return args[0].documentoOriginario.detalhes.circunscricaoFiscal;
            } else if (value.includes('TAT')) {
                return 'TAT';
            } else if (value.includes('UCJ')
                || value.includes('JULGADOR')
                || value.includes('REVISOR')) {
                return 'UCJ';
            } else {
                return args[0].atividadeAtual.papeisParticipantes[0];
            }
        }
    }
}

@Pipe({name: 'subprocesso'})
export class SubProcessoPipe implements PipeTransform {
    transform(value: string, args: any[]): string {
        value = value.replace('<string>', '');
        value = value.replace('</string>', '');
        return value;
    }
}

@Pipe({name: 'datastring'})
export class DataString implements PipeTransform {
    transform(mes: number): string {
        switch (mes) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
            default:
                return mes.toString();
        }
    }
}

@Pipe({name: 'formattexto'})
export class TextoEditado implements PipeTransform {
    oParser = new DOMParser();
    oDOM: any;

    transform(value: string): string {
        this.oDOM = this.oParser.parseFromString(value, 'text/html');
        return this.oDOM.body.innerText;
    }
}

@Pipe({name: 'ie'})
export class AjustaIEPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (value) {
            const ie = value.toString().replace(/\D/g, '');
            return ie.substring(0, 2) + '.' + ie.substring(2, 5) + '.' + ie.substring(5, 8) + '-' + ie.substring(8);
        }
    }
}

@Pipe({
    name: 'periodo'
})
export class FormatPeriodo implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (value) {
            const per = value.toString();
            return per.substring(4, 6).concat(per.substring(0, 4));
        } else {
            return '';
        }
    }
}

@Pipe({name: 'diffDay'})
export class DiffDay implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        const date1 = new Date();
        const data = new Date(value);
        if (data.getTime() > date1.getTime()) {
            const diff = Math.abs(data.getTime() - date1.getTime());
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
            return diffDays;
        } else {
            return 0;
        }
    }
}

@Pipe({
    name: 'identificador'
})
export class Identificador implements PipeTransform {
    transform(value: string, args?: any): any {
        value = value.trim().replace(/\D/g, '');
        if (value.length === 14) {
            return value.substring(0, 2).concat('.')
                .concat(value.substring(2, 5))
                .concat('.')
                .concat(value.substring(5, 8))
                .concat('/')
                .concat(value.substring(8, 12))
                .concat('-')
                .concat(value.substring(12, 14));
        } else if (value.length === 11) {
            return value.substring(0, 3).concat('.')
                .concat(value.substring(3, 6))
                .concat('.')
                .concat(value.substring(6, 9))
                .concat('-')
                .concat(value.substring(9, 11));
        } else {
            const ie = value.toString();
            return ie.substring(0, 2) + '.' + ie.substring(2, 5) + '.' + ie.substring(5, 8) + '-' + ie.substring(8);
        }
    }
}

@Pipe({
    name: 'ocorrencia'
})
export class Ocorrencia implements PipeTransform {
    transform(value: string, args?: any): any {
        return value.substring(3, 5) + value.substring(0, 3);
    }
}

@Pipe({
    name: 'cpfCnpj'
})
export class AjustaCpfCnpjPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value) {
            if (value.length > 11) {
                return value.substring(0, 2).concat('.')
                    .concat(value.substring(2, 5))
                    .concat('.')
                    .concat(value.substring(5, 8))
                    .concat('/')
                    .concat(value.substring(8, 12))
                    .concat('-')
                    .concat(value.substring(12, 14));
            } else {
                return value.substring(0, 3).concat('.')
                    .concat(value.substring(3, 6))
                    .concat('.')
                    .concat(value.substring(6, 9))
                    .concat('-')
                    .concat(value.substring(9, 11));
            }
        }
    }
}

@Pipe({
    name: 'resultadoDecisao',
    pure: false
})
export class ResultadoDecisaoPipe implements PipeTransform {
    transform(item: any): any {
        switch (item) {
            case 'NULO':
                return 'Nulo';
            case 'PROCEDENTE':
                return 'Procedente';
            case 'PROCEDENTE_EM_PARTE':
                return 'Procedente em Parte';
            case 'IMPROCEDENTE':
                return 'Improcedente';
            default:
                return item;
        }
    }
}

@Pipe({
    name: 'limitaTexto'
})
export class LimitaTextoPipe implements PipeTransform {
    transform(value: string, index: number): any {
        if (value && value.length >= index) {
            return value.slice(0, index) + '...';
        } else {
            return value;
        }
    }
}

@Pipe({
    name: 'booleanSN',
    pure: false
})
export class BooleanSN implements PipeTransform {
    transform(item: any): any {
        return item === 'S' ? 'Sim' : 'Não';
    }
}

@Pipe({
    name: 'ajustaContribuinte',
    pure: false
})
export class AjustaContribuinte implements PipeTransform {
    transform(item: any): any {
        return item === 1 ? 'Sim' : 'Não';
    }
}

@Pipe({
    name: 'telefone',
    pure: false
})
export class TelefonePipe implements PipeTransform {
    transform(item: string): string {
        if (item) {
            switch (item.length) {
                case 11:
                    return `(${item.substring(0, 2)})${item.substring(2, 7)}-${item.substring(7, 12)}`;
                case 10:
                    return `(${item.substring(0, 2)})${item.substring(2, 6)}-${item.substring(6, 11)}`;
                case 9:
                    return `${item.substring(0, 5)}-${item.substring(5, 10)}`;
                case 8:
                    return `${item.substring(0, 4)}-${item.substring(4, 9)}`;
                default:
                    return item;
            }
        }
    }
}
