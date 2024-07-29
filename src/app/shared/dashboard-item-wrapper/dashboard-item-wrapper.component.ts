import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item-wrapper.component.html',
  styleUrl: './dashboard-item-wrapper.component.css'
})
export class DashboardItemWrapperComponent {
  img = input.required<{src:string;alt:string}>();
  title = input.required<string>();
}
