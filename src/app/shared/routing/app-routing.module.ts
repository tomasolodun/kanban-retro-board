import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { BoardComponent } from '../../components/kanban-board/board/board.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { AuthGuard } from '../guard/auth.guard';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'kanban-board', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
