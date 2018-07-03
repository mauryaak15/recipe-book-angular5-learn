import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class RecipeService {
    recipeListUpdated = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        // new Recipe('A test recipe',
        // 'This is a recipe description',
        // 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
        // [
        //     new Ingredient('burger', 2),
        //     new Ingredient('pepsi', 5)
        // ]),
        // new Recipe('Another test recipe',
        // 'This is a another recipe description',
        // 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
        // [
        //     new Ingredient('chips', 9),
        //     new Ingredient('maggi', 10)
        // ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(id) {
        return this.recipes[id];
    }

      addIngredientsToSl(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipeListUpdated.next(this.recipes.slice());
      }

      updateRecipe(id: number, recipe: Recipe) {
        this.recipes[id] = recipe;
        this.recipeListUpdated.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipeListUpdated.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeListUpdated.next(this.recipes.slice());
    }
}
