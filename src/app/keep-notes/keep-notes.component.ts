import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidebar/sidenav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-keep-notes',
  standalone: true,
  imports: [CommonModule, SidenavComponent, RouterOutlet],
  template: `
    <app-sidenav>
      <router-outlet></router-outlet>
    </app-sidenav>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeepNotesComponent {

}
