import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent},
    { path: 'portfolio', component: WorkComponent},
    { path: 'contact', component: ContactComponent},
  ]},
  // { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
