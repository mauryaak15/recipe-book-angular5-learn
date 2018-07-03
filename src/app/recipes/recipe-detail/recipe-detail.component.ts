import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() item: Recipe;
  item: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  // toggleDropdown () {
  //   // this.dropdownState === 'open' ? '' : 'open';
  //   if (this.dropdownState === '') {
  //     this.dropdownState = 'open';
  //   }else {
  //     this.dropdownState = '';
  //   }
  // }

  addToSl() {
    this.recipeService.addIngredientsToSl(this.item.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.item = this.recipeService.getRecipe(this.id);
    });
  }

}
