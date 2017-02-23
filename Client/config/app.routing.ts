// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Routes, RouterModule } from '@angular/router';

// ────────────────────────────────────────────────────────────────────────────────

import { HomeComponent } from '../home';

// ────────────────────────────────────────────────────────────────────────────────
// ROUTES

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

export const RoutingProviders: any[] = [
  // bootstrap providers
];

export const RoutingModule = RouterModule.forRoot(appRoutes, { useHash: true });

// ────────────────────────────────────────────────────────────────────────────────
