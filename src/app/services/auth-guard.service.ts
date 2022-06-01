import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private auth: AuthService, private router: Router) {}
  // tres importante a la fonction de nous dire si cest connecté ou pas connecté puis on ajoute canActivate: [AuthguardService] dans chaque route de l'app-routing.module.ts
  canActivate() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
