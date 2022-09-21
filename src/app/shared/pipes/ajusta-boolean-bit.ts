import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ajustaBooleanBit'
})
export class AjustaBooleanBitPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return value === 0 ? 'SIM' : 'NÃO';
    }
}
