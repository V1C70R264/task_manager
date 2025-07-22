import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamCollaborationComponent } from './components/dashboard/team-collaboration/team-collaboration.component';
import { ProjectProgressComponent } from './components/dashboard/project-progress/project-progress.component';
import { TimeTrackerComponent } from './components/dashboard/time-tracker/time-tracker.component';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
// ...import other Material modules as needed...

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    // ...other dashboard widgets...
    TeamCollaborationComponent,
    ProjectProgressComponent,
    TimeTrackerComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    // ...other Material modules...
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
