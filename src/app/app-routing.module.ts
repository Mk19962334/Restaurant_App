import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';

const routes: Routes = [

  {path:'add',component:AddComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'list',component:ListRestoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
