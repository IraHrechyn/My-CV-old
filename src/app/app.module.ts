import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ClocksComponent} from "./pages/clocks/clocks.component";

import {RouterModule, RouterOutlet} from "@angular/router";

import {NgOptimizedImage} from "@angular/common";

import {ButtonOfTypePipe} from "./pages/calculator/pipes/button-of-type.pipe";
import {HttpClientModule} from "@angular/common/http";

import { HeaderComponent } from './pages/movies/components/header/header.component';
import { CarouselComponent } from './pages/movies/components/carousel/carousel.component';

import {FormsModule} from "@angular/forms";

import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService} from "primeng/api";

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EditableRow, TableModule} from "primeng/table";
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {TagModule} from "primeng/tag";
import {EditorModule} from "primeng/editor";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";

import { AboutMeComponent } from './pages/cv/components/about-me/about-me.component';

import {EducationComponent} from "./pages/cv/components/education/education.component";

import { ProjectsComponent } from './pages/cv/components/projects/projects.component';
import {GameBoardComponent} from "./pages/game/components/game-board/game-board.component";
import {StartModalComponent} from "./pages/game/components/start-modal/start-modal.component";
import {HeaderGameComponent} from "./pages/game/components/header/header.component";
import {TopComponent} from "./pages/cv/components/top/top.component";
import {SkillsComponent} from "./pages/cv/components/skills/skills.component";
import {FooterComponent} from "./pages/cv/components/footer/footer.component";
import {ScrollUpComponent} from "./pages/movies/components/scroll-up/scroll-up.component";
import {CalculatorComponent} from "./pages/calculator/calculator.component";
import {CvComponent} from "./pages/cv/cv.component";
import {TodoListComponent} from "./pages/todo-list/todo-list.component";
import {GameComponent} from "./pages/game/game.component";
import {AnalogClockComponent} from "./pages/clocks/components/analog-clock/analog-clock.component";
import {DigitalClockComponent} from "./pages/clocks/components/digital-clock/digital-clock.component";
import {ButtonNumericComponent} from "./pages/calculator/components/button-numeric/button-numeric.component";
import {ButtonActionComponent} from "./pages/calculator/components/button-action/button-action.component";
import {DisplayComponent} from "./pages/calculator/components/display/display.component";
import {FilmCardComponent} from "./pages/movies/components/film-card/film-card.component";
import {FilmsComponent} from "./pages/movies/components/movie-list/movie-list.component";
import {ButtonOperationComponent} from "./pages/calculator/components/button-operation/button-operation.component";
import {PaginationComponent} from "./pages/movies/components/pagination/pagination.component";
import {ListComponent} from "./pages/todo-list/components/list/list.component";
import {HeaderTodoComponent} from "./pages/todo-list/components/header/header.component";
import {ModalComponent} from "./pages/movies/components/modal/modal.component";
import {AddTodoComponent} from "./pages/todo-list/components/add-todo-modal/add-todo.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import { AppNavbarComponent } from './pages/cv/components/app-navbar/app-navbar.component';
import { MobileControlsComponent } from './pages/game/components/mobile-controls/mobile-controls.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ClocksComponent,
    CvComponent,
    GameComponent,
    TodoListComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    ButtonActionComponent,
    ButtonOperationComponent,
    ButtonNumericComponent,
    DisplayComponent,
    ButtonOfTypePipe,
    HeaderComponent,
    CarouselComponent,
    MoviesComponent,
    FilmsComponent,
    ModalComponent,
    PaginationComponent,
    FilmCardComponent,
    AddTodoComponent,
    HeaderTodoComponent,
    ListComponent,
    GameBoardComponent,
    HeaderGameComponent,
    StartModalComponent,
    TopComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationComponent,
    FooterComponent,
    ProjectsComponent,
    ScrollUpComponent,
    AppNavbarComponent,
    MobileControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterOutlet,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    InputTextareaModule,
    TagModule,
    EditorModule,
    ConfirmDialogModule,
    DialogModule,
    ConfirmPopupModule,
    ScrollTopModule
  ],
  providers: [ConfirmationService, MessageService, EditableRow],
  bootstrap: [AppComponent]
})
export class AppModule { }
