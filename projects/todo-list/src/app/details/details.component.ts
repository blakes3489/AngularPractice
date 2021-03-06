import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../todo-item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskRunnerService } from '../task-runner.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() todoItem: TodoItem;

  constructor(
    private route: ActivatedRoute,
    private taskRunnerService: TaskRunnerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTodoItem()
  }

  getTodoItem(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.taskRunnerService.getTodoItem(id).subscribe(task => this.todoItem = task)
  }

  save(): void {
    this.taskRunnerService.updateTodoItem(this.todoItem)
      .subscribe(() => this.location.back())
  }

  public keyValuePairs = { 'Email Address': 'sparkdesignsystem@quickenloans.com', 'Mailing Address': '123 Main Street, Detroit, MI, 48216', 'Home Phone': '(123) 456-7890', 'Cell Phone': '(098) 765-4321', 'Work Phone': '(555) 555-5555', 'Work Extension': '55555' };
}
