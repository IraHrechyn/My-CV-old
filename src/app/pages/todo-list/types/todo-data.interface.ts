import {TaskStatus} from "./status.enum";
export interface TodoData{
  id: number;
  title: string;
  selected?: boolean;
  status: TaskStatus;
  description: string | null;
}
