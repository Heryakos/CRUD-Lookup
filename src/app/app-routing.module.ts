import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SideNavComponent } from './SideMenu/side-nav/side-nav.component';

const routes: Routes = [
  {
    path:'**',
  component:AppComponent
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
