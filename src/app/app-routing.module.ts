import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobcardComponent } from './jobcard/jobcard.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JobviewComponent } from './jobview/jobview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'jobcard', component: JobcardComponent },
  { path: 'jobview/:jobname', component: JobviewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
