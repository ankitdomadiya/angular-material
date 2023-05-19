import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  complete: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent {
  task: Task = {
    name: 'Indeterminate',
    complete: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', complete: false, color: 'primary'},
      {name: 'Accent', complete: false, color: 'accent'},
      {name: 'Warn', complete: false, color: 'warn'},
    ],
  };

  
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.complete);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.complete).length > 0 && !this.allComplete;
  }

  setAll(complete: boolean) {
    this.allComplete = complete;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.complete = complete));
  }
}
