import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-team-collaboration',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './team-collaboration.component.html',
  styleUrl: './team-collaboration.component.scss'
})
export class TeamCollaborationComponent {
  teamMembers = [
    { name: 'John Doe', role: 'Developer', avatar: 'assets/images/avatar.png' },
    { name: 'Jane Smith', role: 'Designer', avatar: 'assets/images/avatar.png' },
    { name: 'Peter Jones', role: 'Project Manager', avatar: 'assets/images/avatar.png' }
  ];
}
