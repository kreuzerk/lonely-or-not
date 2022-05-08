import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassCombination } from '@lonely-or-not/shared';

@Component({
  selector: 'list-item',
  template: `
    <div class="list-heading">
      <strong>Name</strong>
      <strong>Base class</strong>
      <strong>Second class</strong>
      <strong class="center">played</strong>
      <strong></strong>
    </div>
    <mat-card *ngFor="let classCombination of classCombinations">
      <span>{{ classCombination.name }}</span>
      <span>{{ classCombination.baseClass }}</span>
      <span>{{ classCombination.secondClass }}</span>
      <span class="center">{{ classCombination.played | played }}</span>
      <span class="align-right">
        <button
          mat-raised-button
          color="accent"
          (click)="playClass.next(classCombination.name)"
        >
          Play this class
        </button>
      </span>
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
          display: flex;
          align-items: center;
          flex: 1;
        }
      }

      .center {
        justify-items: center;
      }

      .align-right {
        text-align: right;
      }
    `,
  ],
})
export class ListItemComponent {
  @Input() classCombinations: ClassCombination[] | null | undefined;
  @Output() playClass = new EventEmitter<string>();
}
