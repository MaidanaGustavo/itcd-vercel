import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosGeraisComponent } from './dados-gerais/dados-gerais.component';
import { CapaGuiaComponent } from './capa-guia/capa-guia.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlertModule } from 'ngx-alerts';
import { LoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PipesModule } from 'src/app/shared/pipes/PipesModule';
import { StatusGuiaComponent } from './status-guia/status-guia.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HistoricoComponent } from './historico/historico.component';
import { ReclamacaoComponent } from './reclamacao/reclamacao.component';
import { InventarianteComponent } from './inventariante/inventariante.component';
import { EspolioComponent } from './espolio/espolio.component';
import { ViuvaMeeiraComponent } from './viuva-meeira/viuva-meeira.component';
import { HerdeirosComponent } from './herdeiros/herdeiros.component';
import { AdvogadoComponent } from './advogado/advogado.component';
import { DefensorPublicoComponent } from './defensor-publico/defensor-publico.component';
import { ResponsavelComponent } from './responsavel/responsavel.component';
import { DonatarioComponent } from './donatario/donatario.component';
import { DoadorComponent } from './doador/doador.component';
import { BensComponent } from './bens/bens.component';
import { ResponsaveisComponent } from './responsaveis/responsaveis.component';
import { JuntadaSefazComponent } from './juntada-sefaz/juntada-sefaz.component';
import { JuntadaUfitcdComponent } from './juntada-ufitcd/juntada-ufitcd.component';
import { ObservacoesComponent } from './observacoes/observacoes.component';
import { DividasComponent } from './dividas/dividas.component';
import { ObservacaoAvaliadorComponent } from './observacao-avaliador/observacao-avaliador.component';
import { CalculoComponent } from './calculo/calculo.component';
import { DaemsGuiaComponent } from './daems-guia/daems-guia.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000}),
    LoadingModule,
    UiSwitchModule.forRoot({
      color: '#32c5d2',
      switchColor: '#fff',
      defaultBgColor: '#cccccc',
      defaultBoColor: '#fff',
    }),
    PipesModule,

  ],
  declarations: [DadosGeraisComponent,CapaGuiaComponent, StatusGuiaComponent, ChatboxComponent, HistoricoComponent, ReclamacaoComponent, InventarianteComponent, EspolioComponent, ViuvaMeeiraComponent, HerdeirosComponent, AdvogadoComponent, DefensorPublicoComponent, ResponsavelComponent, DonatarioComponent, DoadorComponent, BensComponent, ResponsaveisComponent, JuntadaSefazComponent, JuntadaUfitcdComponent, ObservacoesComponent, DividasComponent, ObservacaoAvaliadorComponent, CalculoComponent, DaemsGuiaComponent]
})
export class VisualizarGuiaModule { }
