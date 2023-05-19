import { Component } from '@angular/core';

@Component({
  selector: 'app-bedge',
  templateUrl: './bedge.component.html',
  styleUrls: ['./bedge.component.scss']
})
export class BedgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
