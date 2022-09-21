import { AmChartsModule, AmChartsService } from '@amcharts/amcharts3-angular';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { CKEditorModule } from 'ng2-ckeditor';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AlertModule, AlertService } from 'ngx-alerts';
import { LoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HelpComponent } from './core/help/help.component';
import { LoginComponent } from './core/login/login.component';
import { PagesModule } from './core/pages/pages.module';
import { AuthService } from './core/service/auth.service';
import { SidebarQuickComponent } from './core/sidebar-quick/sidebar-quick.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HttpConfigInterceptor } from './shared/interceptor/httpconfig.interceptor';
import { PipesModule } from './shared/pipes/PipesModule';
import { SidemenuComponent } from './core/sidemenu/sidemenu.component';
import { MenuModule } from './core/menu/menu.module';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SidebarQuickComponent,
    HelpComponent,
    LoginComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmChartsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    FileUploadModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000 }),
    LoadingModule,
    CKEditorModule,
    CurrencyMaskModule,
    PipesModule,
    PDFExportModule,
    HttpClientModule,
    UiSwitchModule.forRoot({
      color: '#32c5d2',
      switchColor: '#fff',
      defaultBgColor: '#cccccc',
      defaultBoColor: '#fff',
    }),
    Ng2OrderModule,
    PagesModule,
    MenuModule
  ],
  providers: [
    AlertService,
    AmChartsService,
    AuthService,
    { provide: LOCALE_ID, useValue: 'pt' },
    HttpConfigInterceptor, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
