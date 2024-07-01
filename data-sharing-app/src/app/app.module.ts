import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule and Routes
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SetDataComponent } from './set-data/set-data.component';
import { GetDataComponent } from './get-data/get-data.component';

// Define some basic routes
const routes: Routes = [
  { path: 'set-data', component: SetDataComponent },
  { path: 'get-data', component: GetDataComponent },
  { path: '', redirectTo: '/set-data', pathMatch: 'full' } // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    SetDataComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configure the router with the routes
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
