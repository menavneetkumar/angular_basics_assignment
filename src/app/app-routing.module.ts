import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { RactFormComponent } from './ract-form/ract-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'temp-form', component: TempFormComponent},
  {path: 'ract-form', component: RactFormComponent},
  {path: 'user', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
