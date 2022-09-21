import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './core/help/help.component';
import { LoginComponent } from './core/login/login.component';
import { MenuModule } from './core/menu/menu.module';
import { PagesModule } from './core/pages/pages.module';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', loadChildren: () => MenuModule },
  { path: 'pages', loadChildren: () => PagesModule },
  { path: 'login', component: LoginComponent },
  {
    path: 'help',
    component: HelpComponent,
    // canActivate: [AuthGuard], canActivateChild: [AuthChildGenericGuard]

  },
];
@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })
  ],
  declarations: []
})
export class AppRoutingModule {
}
