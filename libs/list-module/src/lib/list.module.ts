import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ListComponent } from './list.component';
import { PlayedPipe } from './played.pipe';
import { ListItemComponent } from './list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
  ],
  declarations: [ListComponent, ListItemComponent, PlayedPipe],
  exports: [ListComponent, ListItemComponent, PlayedPipe],
})
export class ListModule {}
