import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipeServis:RecipeService ) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.recipeServis.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
