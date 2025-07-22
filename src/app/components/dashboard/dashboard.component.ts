import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardsComponent } from './stats-cards/stats-cards.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TeamCollaborationComponent } from './team-collaboration/team-collaboration.component';
import { RemindersComponent } from './reminders/reminders.component';
import { ProjectProgressComponent } from './project-progress/project-progress.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
// Import other widgets here as they are created
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectModalComponent } from './add-project-modal/add-project-modal.component';
import { TaskService, Task } from '../../services/task.service'; // adjust path as needed
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatsCardsComponent,
    AnalyticsComponent,
    TeamCollaborationComponent,
    RemindersComponent,
    ProjectProgressComponent,
    ProjectListComponent,
    TimeTrackerComponent,
    // Add other widgets here
    MatButtonModule,
    AddProjectModalComponent,
    MatDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tasks: Task[] = [];

  constructor(private dialog: MatDialog, private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  openAddProjectModal() {
    const dialogRef = this.dialog.open(AddProjectModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.addTask(result);
        this.tasks = this.taskService.getTasks();
      }
    });
  }
}
