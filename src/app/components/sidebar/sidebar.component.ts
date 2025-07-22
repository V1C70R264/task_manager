import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'check_circle', label: 'Tasks', badge: '12+' },
    { icon: 'calendar_today', label: 'Calendar' },
    { icon: 'analytics', label: 'Analytics' },
    { icon: 'group', label: 'Team' }
  ];
  generalItems = [
    { icon: 'settings', label: 'Settings' },
    { icon: 'help', label: 'Help' },
    { icon: 'logout', label: 'Logout' }
  ];
}
