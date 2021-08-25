import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { VoteComponent } from './components/vote/vote.component';
import { AddAspirantsComponent } from './components/add-aspirants/add-aspirants.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewaprirantComponent } from './components/viewaprirant/viewaprirant.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'add-aspirant', component: AddAspirantsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'viewaspirants', component: ViewaprirantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
