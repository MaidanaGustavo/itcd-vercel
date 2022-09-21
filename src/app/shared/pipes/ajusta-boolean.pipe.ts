import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ajustaBoolean'
})
export class AjustaBooleanPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value ? 'SIM' : 'NÃO';
    }
}

