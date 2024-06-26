import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://nutritiouslife.com/wp-content/uploads/2010/05/shutterstock_274855409-copy-765x500.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://nutritiouslife.com/wp-content/uploads/2010/05/shutterstock_274855409-copy-765x500.jpg')
];

constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
