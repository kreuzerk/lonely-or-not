import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ClassCombination,
  ClassCombinationService,
} from '@lonely-or-not/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'list',
  template: `
    <strong>Filters</strong>

    <form [formGroup]="filterForm" class="filters">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input formControlName="name" matInput />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Base class</mat-label>
        <input formControlName="baseClass" matInput />
      </mat-form-field>
      <mat-form-field>
        <mat-label>Second class</mat-label>
        <input formControlName="secondClass" matInput />
      </mat-form-field>
      <mat-slide-toggle formControlName="played">Played</mat-slide-toggle>
    </form>

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
  filterForm = this.fb.group({
    name: '',
    baseClass: '',
    secondClass: '',
    played: false,
  });

  constructor(
    private classCombinationService: ClassCombinationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.classCombinations$ = this.classCombinationService.classCombinations$;
    this.filterForm.valueChanges.subscribe((filterCriteria) =>
      this.classCombinationService.filterClassCombinations(filterCriteria)
    );
  }

  play(name: string): void {
    this.classCombinationService.updateClassCombinationPlayed(name);
  }
}
