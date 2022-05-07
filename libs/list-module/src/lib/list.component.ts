import { Component, OnInit } from '@angular/core';
import {
  ClassCombination,
  ClassCombinationService,
} from '@lonely-or-not/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'list',
  template: `
    <div class="list-heading">
      <strong>Name</strong>
      <strong>Base class</strong>
      <strong>Second class</strong>
      <strong class="align-right">played</strong>
    </div>
    <mat-card *ngFor="let classCombination of classCombinations$ | async">
      <span>{{ classCombination.name }}</span>
      <span>{{ classCombination.baseClass }}</span>
      <span>{{ classCombination.secondClass }}</span>
      <!-- TODO use the pipe -->
      <span class="align-right">{{ classCombination.played }}</span>
    </mat-card>
  `,
  styles: [
    `
      .list-heading {
        display: flex;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;
        margin-bottom: 20px;

        strong {
          flex: 1;
        }
      }

      mat-card {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        span {
          flex: 1;
        }
      }

      .align-right {
        text-align: right;
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
}
