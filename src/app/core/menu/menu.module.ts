import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlertModule } from 'ngx-alerts';
import { LoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../shared/pipes/PipesModule';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { GuiasComponent } from '../pages/guias/guias.component';
import { PagesModule } from '../pages/pages.module';
import { VisualizarGuiaModule } from '../pages/visualizar-guia/visualizar-guia.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        PagesModule,
        MenuRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        FormsModule,
        RouterModule,
        VisualizarGuiaModule,
        NgxMaskModule.forRoot(),
        AlertModule.forRoot({maxMessages: 5, timeout: 5000}),
        LoadingModule,
        PipesModule
    ],
  declarations: [MenuComponent,DashboardComponent]
})
export class MenuModule {
}
