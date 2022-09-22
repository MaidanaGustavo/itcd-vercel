import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { AtendimentoGuiaComponent } from "../pages/atendimento-guia/atendimento-guia.component";
import { DaemsComponent } from "../pages/daems/daems.component";
import { DashboardFiscalComponent } from "../pages/dashboard-fiscal/dashboard-fiscal.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { FiscalGuiasComponent } from "../pages/fiscal-guias/fiscal-guias.component";
import { GuiasComponent } from "../pages/guias/guias.component";
import { NovaGuiaComponent } from "../pages/nova-guia/nova-guia.component";
import { ParametrosComponent } from "../pages/parametros/parametros.component";
import { RatificarGuiasComponent } from "../pages/ratificar-guias/ratificar-guias.component";
import { ReclamacoesComponent } from "../pages/reclamacoes/reclamacoes.component";
import { RelatoriosComponent } from "../pages/relatorios/relatorios.component";
import { AdvogadoComponent } from "../pages/visualizar-guia/advogado/advogado.component";
import { BensComponent } from "../pages/visualizar-guia/bens/bens.component";
import { CalculoComponent } from "../pages/visualizar-guia/calculo/calculo.component";
import { CapaGuiaComponent } from "../pages/visualizar-guia/capa-guia/capa-guia.component";
import { DadosGeraisComponent } from "../pages/visualizar-guia/dados-gerais/dados-gerais.component";
import { DaemsGuiaComponent } from "../pages/visualizar-guia/daems-guia/daems-guia.component";
import { DefensorPublicoComponent } from "../pages/visualizar-guia/defensor-publico/defensor-publico.component";
import { DividasComponent } from "../pages/visualizar-guia/dividas/dividas.component";
import { DoadorComponent } from "../pages/visualizar-guia/doador/doador.component";
import { DonatarioComponent } from "../pages/visualizar-guia/donatario/donatario.component";
import { EspolioComponent } from "../pages/visualizar-guia/espolio/espolio.component";
import { HerdeirosComponent } from "../pages/visualizar-guia/herdeiros/herdeiros.component";
import { HistoricoComponent } from "../pages/visualizar-guia/historico/historico.component";
import { InventarianteComponent } from "../pages/visualizar-guia/inventariante/inventariante.component";
import { JuntadaSefazComponent } from "../pages/visualizar-guia/juntada-sefaz/juntada-sefaz.component";
import { JuntadaUfitcdComponent } from "../pages/visualizar-guia/juntada-ufitcd/juntada-ufitcd.component";
import { ObservacaoAvaliadorComponent } from "../pages/visualizar-guia/observacao-avaliador/observacao-avaliador.component";
import { ObservacoesComponent } from "../pages/visualizar-guia/observacoes/observacoes.component";
import { ReclamacaoComponent } from "../pages/visualizar-guia/reclamacao/reclamacao.component";
import { ResponsaveisComponent } from "../pages/visualizar-guia/responsaveis/responsaveis.component";
import { ViuvaMeeiraComponent } from "../pages/visualizar-guia/viuva-meeira/viuva-meeira.component";
import { MenuComponent } from "./menu.component";

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: DashboardComponent },
      { path: "guias", component: GuiasComponent },
      { path:'view-guia/:id',component:CapaGuiaComponent,children:[
        {path: '',component:DadosGeraisComponent,pathMatch: 'full'},
        {path: 'historico',component:HistoricoComponent},
        {path: 'inventariante',component:InventarianteComponent},
        {path: 'espolio',component:EspolioComponent},
        {path: 'viuva-meeira',component:ViuvaMeeiraComponent},
        {path: 'herdeiro',component:HerdeirosComponent},
        {path: 'advogado',component:AdvogadoComponent},
        {path: 'defensor',component:DefensorPublicoComponent},
        {path: 'responsavel',component:ResponsaveisComponent},
        {path: 'donatario',component:DonatarioComponent},
        {path: 'reclamacao',component:ReclamacaoComponent},
        {path: 'doador',component:DoadorComponent},
        {path: 'bens',component:BensComponent},
        {path: 'responsaveis',component:ResponsaveisComponent},
        {path: 'juntada-sefaz',component:JuntadaSefazComponent},
        {path: 'juntada-ufitcd',component:JuntadaUfitcdComponent},
        {path: 'observacoes',component:ObservacoesComponent},
        {path: 'dividas',component:DividasComponent},
        {path: 'obs-avaliador',component:ObservacaoAvaliadorComponent},
        {path: 'calculo',component:CalculoComponent},
        {path: 'daems-guia',component:DaemsGuiaComponent},
      ]},
      { path: "nova-guia", component: NovaGuiaComponent },
      {
        path: "relatorios",
        component: RelatoriosComponent,
      },
      {
        path: "atendimento-guia",
        component: AtendimentoGuiaComponent,
      },
      {
        path: "reclamacoes",
        component: ReclamacoesComponent,
      },
      {
        path: "daems",
        component: DaemsComponent,
      },
      {
        path: "ratificar-guia",
        component: RatificarGuiasComponent,
      },
      {
        path: "parametros",
        component: ParametrosComponent,
      }
    ],
  },
  // { path: 'guias', component: GuiasComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
