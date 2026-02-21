import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSignal = signal([
    {
      id: 1,
      title: 'Sample Task',
      description: 'This is a sample task description.',
      completed: true,
      createdAt: new Date( '2025-02-21'),
    },
    {
      id: 2,
      title: 'Sample Task 2',
      description: 'This is a sample task description.',
      completed: false,
      createdAt: new Date( '2025-02-21'),
    },
  ]);

  tasks = this.tasksSignal.asReadonly();

}
