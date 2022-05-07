import { Component, OnInit } from '@angular/core';
import {
  ClassCombination,
  ClassCombinationService,
} from '@lonely-or-not/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'list',
  template: `
    <strong>Filters</strong>

    <div class="filters">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Base class</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Second class</mat-label>
        <input matInput />
      </mat-form-field>
      <mat-slide-toggle>Played</mat-slide-toggle>
    </div>

    <list-item
      [classCombinations]="classCombinations$ | async"
      (playClass)="play($event)"
    >
    </list-item>
  `,
  styles: [
    `
      .filters {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      }

      * {
        flex: 1;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  classCombinations$: Observable<ClassCombination[]> | undefined;
  constructor(private classCombinationService: ClassCombinationService) {}

  ngOnInit(): void {
    this.classCombinations$ = this.classCombinationService.classCombinations$;
  }

  play(name: string): void {
    this.classCombinationService.updateClassCombinationPlayed(name);
  }
}
