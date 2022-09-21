import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlertModule, AlertService } from 'ngx-alerts';
import { LoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuHeaderComponent } from './menu-header.component';

@NgModule({
  declarations: [MenuHeaderComponent],
  exports: [FormsModule, MenuHeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    LoadingModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 })
  ],
  providers: [AlertService,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuHeaderModule{ }
