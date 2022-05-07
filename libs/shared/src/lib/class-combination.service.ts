import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ClassCombination {
  baseClass: string;
  secondClass: string;
  name: string;
  played: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ClassCombinationService {
  private classCombinations: ClassCombination[] = [
    {
      baseClass: 'Clawbringer',
      secondClass: 'Brrzerker',
      name: 'Hammerzerker',
      played: false,
    },
    {
      baseClass: 'Spellshot',
      secondClass: 'Spore Warden',
      name: 'Sporceror',
      played: false,
    },
    {
      baseClass: 'Stabomancer',
      secondClass: 'Spore Warden',
      name: 'Mistdancer',
      played: false,
    },
    {
      baseClass: 'Frozen Shivver',
      secondClass: 'Brrzerker',
      name: 'Stabbomancer',
      played: false,
    },
    {
      baseClass: 'Deadshot',
      secondClass: 'Graveborn',
      name: 'Spellshot',
      played: false,
    },
    {
      baseClass: 'Clawbringer',
      secondClass: 'Spore Warden',
      name: 'Wildfire',
      played: false,
    },
  ];

  classCombinations$ = new BehaviorSubject<ClassCombination[]>(
    this.classCombinations
  );

  public updateClassCombinationPlayed(name: string): void {
    this.classCombinations.forEach((classCombination) => {
      if (classCombination.name === name) {
        classCombination.played = true;
        this.classCombinations$.next(this.classCombinations);
      }
    });
  }
}
