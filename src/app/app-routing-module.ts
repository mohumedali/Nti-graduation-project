import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

const routes: Routes = [
  { path: '', component: Home, data: { animation: 'Home' } },
  { path: 'Home', component: Home, data: { animation: 'Home' } },
  { path: 'About', component: About, data: { animation: 'About' } },
  { path: 'Skills', component: Skills, data: { animation: 'Skills' } },
  { path: 'Projects', component: Projects, data: { animation: 'Projects' } },
  { path: 'Contact', component: Contact, data: { animation: 'Contact' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
