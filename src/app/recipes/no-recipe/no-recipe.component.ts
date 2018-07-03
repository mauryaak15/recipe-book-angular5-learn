import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-recipe',
  template: `
    <p>
      No recipe found.
    </p>
  `,
  styles: []
})
export class NoRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
