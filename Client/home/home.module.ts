// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { HomeActions } from './home.actions';

// ────────────────────────────────────────────────────────────────────────────────

@NgModule({
  declarations: [ HomeComponent ],
  providers: [
    HomeService,
    HomeActions,
  ],
  imports: [ CommonModule ],
  exports: [ HomeComponent ],
})
export class HomeModule {}
