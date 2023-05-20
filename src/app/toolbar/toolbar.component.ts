import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
          <div class="title">
            <button mat-icon-button>
              <mat-icon>menu</mat-icon>
            </button>

          </div>
          <div class="search-container">
            <mat-form-field class="search-field" subscriptSizing="dynamic">
              <mat-icon matPrefix>search</mat-icon>
              <input matInput placeholder="Пошук"/>
              <mat-icon matSuffix>clear</mat-icon>
              
            </mat-form-field>

            <div class="spacer"></div>

            <button mat-icon-button>
              <mat-icon>refresh</mat-icon>
            </button>

            <button mat-icon-button>
              <mat-icon>settings</mat-icon>
            </button>
          </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [
    `
    :host {
      display: block;
    }
    
    .mat-toolbar-row {
      justify-content: space-between;
      gap: 1.2rem;
      padding: 0.8rem;
    }
    
    .title {
      flex: 1 0 auto;
      min-width: 16rem;
    }
    
    .search-container {
      flex: 8;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .search-field {
      flex: 1;
    }
    
    .spacer {
      flex: 1;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {

}
