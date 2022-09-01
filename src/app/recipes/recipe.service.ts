import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{
 recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
        'A super-tasty Schnizel - just awesome!',
        'https://i.pinimg.com/originals/2f/d3/fe/2fd3febd5dbadbe3485927757e73ae97.jpg',
        [
          new Ingredient('Meat',1),
          new Ingredient('French fries', 20)
        ]),
        new Recipe('Big Fat Burger',
        'What else you need say?',
        'https://i.pinimg.com/originals/2f/d3/fe/2fd3febd5dbadbe3485927757e73ae97.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}