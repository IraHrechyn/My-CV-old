import {TodoData} from "./todo-data.interface";
import {TaskStatus} from "./status.enum";

export class GeneralModel {
  private _todos: TodoData[] = [];

  showModal = false;
  searchValue = '';
  newTodo: TodoData | null = null;
  filteredTodos: TodoData[] = [];
  selectedTodos: TodoData[] = [];
  editedTodos: Record<number, TodoData> = {};
  statusOption: Record<string, TaskStatus>[] = [
    {label: TaskStatus.ACTIVE, value: TaskStatus.ACTIVE},
    {label: TaskStatus.COMPLETED, value: TaskStatus.COMPLETED}
  ];

  get todos(): TodoData[]{
    return this._todos.map(todo =>({...todo}));
  }

  set todos(todos:TodoData[]){
    this._todos = todos;
    this.filterData();
  }

  filterData():void {
    const searchTerm = this.searchValue.trim().toLowerCase();
    this.filteredTodos = this.todos.filter(todo => todo.title.toLowerCase().includes(searchTerm));
  }
}
