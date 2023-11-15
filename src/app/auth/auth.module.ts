import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SheardModule } from '../sheard/sheard.module';

const routes: Routes = [ 
{

  path: '' , redirectTo: 'login', pathMatch: 'full'
},
  {

    path : 'login', component:LoginComponent
  }
]

@NgModule({ 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SheardModule
  ],
  declarations: [AuthComponent,LoginComponent]
})
export class AuthModule { }
