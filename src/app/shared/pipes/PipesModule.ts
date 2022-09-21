import {NgModule} from '@angular/core';
import {AjustaBooleanPipe} from './ajusta-boolean.pipe';
import {DataFormatPipe} from './data-format-pipe.pipe';
import {
    AjustaCargoPipe,
    AjustaContribuinte,
    AjustaCpfCnpjPipe,
    AjustaIEPipe,
    AjustaPessoaPipe,
    AjustePessoaCpfCnpjPipe,
    BooleanSN,
    DataString,
    DiffDay,
    EntregueForaDoPrazoPipe,
    EventoRegistroFichaPipe,
    FormatPeriodo,
    Identificador,
    LimitaTextoPipe,
    Ocorrencia,
    ResultadoDecisaoPipe,
    SetorPipe,
    SpiPipe,
    SubProcessoPipe,
    TelefonePipe,
    TextoEditado,
    TipoFichaControle
} from './formatos.pipe';
import {AjustaBooleanBitPipe} from './ajusta-boolean-bit';

@NgModule({
    declarations: [AjustaIEPipe,
        AjustaBooleanPipe,
        DataFormatPipe,
        AjustaPessoaPipe,
        AjustaCargoPipe,
        TipoFichaControle,
        EventoRegistroFichaPipe,
        SpiPipe,
        EntregueForaDoPrazoPipe,
        SetorPipe,
        SubProcessoPipe,
        DataString,
        TextoEditado,
        AjustaIEPipe,
        DiffDay,
        Identificador,
        Ocorrencia,
        AjustaCpfCnpjPipe,
        ResultadoDecisaoPipe,
        FormatPeriodo,
        LimitaTextoPipe,
        AjustaContribuinte,
        AjustePessoaCpfCnpjPipe,
        BooleanSN,
        AjustaBooleanBitPipe,
        TelefonePipe
    ],
    imports: [],
    exports: [AjustaBooleanPipe,
        DataFormatPipe,
        AjustaPessoaPipe,
        AjustaCargoPipe,
        TipoFichaControle,
        EventoRegistroFichaPipe,
        SpiPipe,
        EntregueForaDoPrazoPipe,
        SetorPipe,
        SubProcessoPipe,
        DataString,
        TextoEditado,
        AjustaIEPipe,
        DiffDay,
        Identificador,
        Ocorrencia,
        AjustaCpfCnpjPipe,
        ResultadoDecisaoPipe,
        FormatPeriodo,
        LimitaTextoPipe,
        AjustaContribuinte,
        AjustePessoaCpfCnpjPipe,
        BooleanSN,
        AjustaBooleanBitPipe,
        TelefonePipe
    ]
})

export class PipesModule {

}
