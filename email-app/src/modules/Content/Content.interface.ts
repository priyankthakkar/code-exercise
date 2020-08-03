export interface TasksResponse {
  taskData: TaskData[];
}

export interface TaskData {
  range: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  assignee: string;
  avatar: string;
  duration: string;
  isCompleted: boolean;
  isSelected: boolean;
  isStared: boolean;
  text: string;
}

export interface ContentState {
  isLoading: boolean;
  tasksResponse: TasksResponse;
}
