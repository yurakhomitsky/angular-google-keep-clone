import { Routes } from '@angular/router';
import { KeepNotesComponent } from './keep-notes/keep-notes.component';
import { HomeComponent } from './keep-notes/home/home.component';

const keepNotesRoutes: Routes = [
	{
		path: 'app', component: KeepNotesComponent, children: [
			{
				path: 'home', component: HomeComponent
			},
			{ path: '', pathMatch: 'full', redirectTo: 'home' }
		]
	}
];

export const appRoutes: Routes = [
	...keepNotesRoutes,
	{
		path: '', pathMatch: 'full', redirectTo: 'app'
	}
];
