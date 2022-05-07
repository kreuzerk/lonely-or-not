import { Component, OnInit } from '@angular/core';
import {
  ClassCombination,
  ClassCombinationService,
} from '@lonely-or-not/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'list',
  template: `
    <list-item
      [classCombinations]="classCombinations$ | async"
      (playClass)="play($event)"
    >
    </list-item>
  `,
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
