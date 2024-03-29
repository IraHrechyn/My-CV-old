import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from "./pages/calculator/calculator.component";
import { ClocksComponent } from "./pages/clocks/clocks.component";
import { CvComponent } from "./pages/cv/cv.component";
import { GameComponent } from "./pages/game/game.component";
import { MoviesComponent } from "./pages/movies/movies.component";
import { TodoListComponent } from "./pages/todo-list/todo-list.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'clock', component: ClocksComponent },
  { path: 'game', component: GameComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'home', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
