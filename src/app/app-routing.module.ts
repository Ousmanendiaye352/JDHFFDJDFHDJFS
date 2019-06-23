import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
	{ path: 'menu', loadChildren: './pages/tabs/tabs.module#TabsPageModule', canActivate: [ AuthGuard ] },
	{
		path: 'assistances',
		loadChildren: './pages/assistances/assistances.module#AssistancesPageModule',
		canActivate: [ AuthGuard ]
	},
	{
		path: 'services-recharge',
		loadChildren: './pages/services-recharge/services-recharge.module#ServicesRechargePageModule',
		canActivate: [ AuthGuard ]
	},
  { path: 'active-carte', loadChildren: './pages/active-carte/active-carte.module#ActiveCartePageModule', 	canActivate: [ AuthGuard ] }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
