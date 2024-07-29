import { Component } from '@angular/core';
import { StatusComponent } from './status/status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DashboardItemWrapperComponent } from '../shared/dashboard-item-wrapper/dashboard-item-wrapper.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemWrapperComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
