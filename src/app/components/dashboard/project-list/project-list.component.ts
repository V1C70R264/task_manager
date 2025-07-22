import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projects = [
    { name: 'Website Redesign', dueDate: '2024-12-31', icon: 'web' },
    { name: 'Mobile App Launch', dueDate: '2025-01-15', icon: 'phone_iphone' },
    { name: 'API Integration', dueDate: '2025-02-01', icon: 'api' }
  ];
}
