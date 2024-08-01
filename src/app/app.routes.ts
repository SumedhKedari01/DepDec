import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './sigup/sigup.component';
import { TestComponent } from './test/test.component';


export const routes: Routes = [{
    path:"",component:HomeComponent
},
{
    path:"about",component:AboutComponent
},{
    path:"contact",component:ContactComponent
},{
    path:"test",component:TestComponent
},
{
    path:"login",component:LoginComponent
},
{
    path:"sigup",component:SigupComponent
}];
