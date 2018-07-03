import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private rs: RecipeService, private auth: AuthService) { }

  storeRecipes() {
    const token = this.auth.getToken();
    return this.http.put('https://recipe-app-3ba6b.firebaseio.com/recipes.json?auth=' + token, this.rs.getRecipes());
  }

  getRecipes() {
    const token = this.auth.getToken();
    this.http.get('https://recipe-app-3ba6b.firebaseio.com/recipes.json?auth=' + token)
    .map((response: Response) => {
      const recipes: Recipe[] = response.json();
      for (const recipe of recipes) {
        // console.log(recipe);
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    })
    .subscribe((recipes: Recipe[]) => {
      this.rs.setRecipes(recipes);
    });
  }
}
