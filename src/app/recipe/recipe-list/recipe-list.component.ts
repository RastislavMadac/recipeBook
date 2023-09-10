import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('A test Recipe', 'This is a simply test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png'),
  new Recipe('Another test Recipe', 'This is a simply test', 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }
}
