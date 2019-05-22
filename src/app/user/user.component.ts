import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: number;
  tasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = parseInt(params.id, 10);
          this.tasks = this.usersService.getTasks().filter(task => task.id === this.id);
        }
      );

    this.usersService.taskChanged.subscribe(
      (tasks: { id: number, taskId: number, title: string }[]) => {
        this.tasks = tasks.filter(task => task.id === this.id);
      }
    );
  }

  changeTaskTitle(taskId: number) {
    this.usersService.changeTaskTitle(this.id, taskId);
  }

}

export interface Task {
  id: number;
  taskId: number;
  title: string;
}
