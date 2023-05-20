import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav"
          [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
          [mode]="(isHandset$ | async) ? 'over' : 'side'"
          [opened]="(isHandset$ | async) === false">
        <mat-nav-list>
          <a class="nav-item" mat-list-item >
            <div class="nav-item">
              <mat-icon>notes</mat-icon>
              Нотатки
            </div>

          </a>
          <a  mat-list-item >
            <div class="nav-item">
              <mat-icon>notifications</mat-icon>
              Нагадування
            </div>

          </a>
          <a  mat-list-item >
            <div class="nav-item">
              <mat-icon>edit</mat-icon>
              Редагувати мітки
            </div>
           
          </a>
          <a  mat-list-item >
            <div class="nav-item">
              <mat-icon>archive</mat-icon>
              Архів
            </div>
           
          </a>
          <a class="nav-item" mat-list-item >
            <div class="nav-item">
              <mat-icon>delete</mat-icon>
              Коших
              
            </div>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
    
  `,
  styles: [`
    .sidenav-container {
      height: 100%;
    }
    
    .sidenav {
      width: 250px;
    }
    
    .sidenav .mat-toolbar {
      background: inherit;
    }
    
    .mat-toolbar.mat-primary {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    
    .nav-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
  `]
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
