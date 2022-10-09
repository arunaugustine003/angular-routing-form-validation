import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RoutingComponent } from './routing/routing.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveHomeComponent } from './reactive-home/reactive-home.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { EmailArrayFormComponent } from './email-array-form/email-array-form.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoMainComponent } from './todo-main/todo-main.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todomain',
    component: TodoMainComponent,
  },
  {
    path: 'tictactoe',
    component: TicTacToeComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  {
    path: 'reactive-home',
    component: ReactiveHomeComponent,
  },
  {
    path: 'reactive-primeng',
    component: ReactiveComponent,
  },
  {
    path: 'array-form',
    component: ArrayFormComponent,
  },
  {
    path: 'email-array-form',
    component: EmailArrayFormComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
  },
  {
    path: 'followers/:id',
    component: GithubProfileComponent,
  },
  {
    path: 'followers',
    component: GithubFollowersComponent,
  },

  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
