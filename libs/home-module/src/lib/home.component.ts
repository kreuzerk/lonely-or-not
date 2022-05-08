import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <p>
      Multiclassing is one of the more unique aspects to Tiny Tina’s
      Wonderlands‘ classes. It allows you to pull skills over from a completely
      different class and merge both together to create a unique combination,
      such as a Hammerzerker. But, in order to get to that point, you are going
      to want to know how to unlock multiclasses and multiclassing in Tiny
      Tina’s Wonderlands.
    </p>
    <p>
      Multiclassing lets you combine anything and everything, paving the way for
      exciting new class combinations that can play entirely different to how
      you were playing previously as you base class like a Spore Warden or a
      Clawbringer. However, you don’t have to multiclass, you can stick to your
      basic class and continue levelling that up via the skill tree.
    </p>
    <img src="assets/home.jpeg" />
  `,
  styles: [
    `
      img {
        max-width: 100%;
      }
    `,
  ],
})
export class HomeComponent {}
