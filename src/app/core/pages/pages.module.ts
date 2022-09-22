import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GuiasComponent } from "./guias/guias.component";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { AlertModule } from "ngx-alerts";
import { LoadingModule } from "ngx-loading";
import { NgxMaskModule } from "ngx-mask";
import { PipesModule } from "src/app/shared/pipes/PipesModule";

import { NovaGuiaComponent } from "./nova-guia/nova-guia.component";
import { VisualizarGuiaComponent } from "./visualizar-guia/visualizar-guia.component";
import { FiscalGuiasComponent } from "./fiscal-guias/fiscal-guias.component";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { ReclamacoesComponent } from "./reclamacoes/reclamacoes.component";
import { RelatoriosComponent } from "./relatorios/relatorios.component";
import { AtendimentoGuiaComponent } from "./atendimento-guia/atendimento-guia.component";
import { DaemsComponent } from "./daems/daems.component";
import { DashboardFiscalComponent } from './dashboard-fiscal/dashboard-fiscal.component';
import { RatificarGuiasComponent } from './ratificar-guias/ratificar-guias.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { VisualizarGuiaModule } from "./visualizar-guia/visualizar-guia.module";
import { ChatContribuinteComponent } from './chat-contribuinte/chat-contribuinte.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule,
    VisualizarGuiaModule,
    NgxMaskModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    LoadingModule,
    PipesModule,
    NgbModule,
  ],
  declarations: [
    GuiasComponent,
    NovaGuiaComponent,
    VisualizarGuiaComponent,
    FiscalGuiasComponent,
    ReclamacoesComponent,
    RelatoriosComponent,
    AtendimentoGuiaComponent,
    DaemsComponent,
    DashboardFiscalComponent,
    RatificarGuiasComponent,
    ParametrosComponent,
    ChatContribuinteComponent,
  ],
})
export class PagesModule {}
