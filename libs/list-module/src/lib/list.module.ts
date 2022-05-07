import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListComponent } from './list.component';
import { PlayedPipe } from './played.pipe';
import { ListItemComponent } from './list-item.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [ListComponent, ListItemComponent, PlayedPipe],
  exports: [ListComponent, ListItemComponent, PlayedPipe],
})
export class ListModule {}
