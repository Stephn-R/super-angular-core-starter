// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './config/app.module';
import { enableProdMode } from '@angular/core';

// ────────────────────────────────────────────────────────────────────────────────

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

if(process.env.NODE_ENV === 'production') {
  enableProdMode();
}

// bootstrap when document is ready
document.addEventListener('DOMContentLoaded', () => main());
