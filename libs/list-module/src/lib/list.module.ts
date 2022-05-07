import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { ListComponent } from './list.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {}
