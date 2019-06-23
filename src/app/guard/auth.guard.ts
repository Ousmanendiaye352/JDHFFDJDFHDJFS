import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MsalService } from '../services/msal.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService, private msalService: MsalService) {}

	/* canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		const currentUser = this.authService.isLoggedIn;
		if (currentUser) {
			// authorised so return true
			return true;
		}
		// not logged in so redirect to login page with the return url
		this.router.navigate([ '/login' ]);
		return false;
	} */

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		const currentUser = this.msalService.isLoggedIn();
		if (currentUser) {
			// authorised so return true
			return true;
		}
		// not logged in so redirect to login page with the return url
		this.router.navigate([ '/login' ]);
		return false;
	}
}
