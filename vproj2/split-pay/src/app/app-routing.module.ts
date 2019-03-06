import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AllExpensesComponent } from './all-expenses/all-expenses.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { GroupsComponent} from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { BillComponent } from './bill/bill.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'recent',
    component: RecentActivityComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  { path: 'detail/:id', component: GroupDetailComponent },
  { path: 'bill/:id', component: BillComponent },
  { path: 'newGroup', component: AddGroupComponent },
  { path: 'newUser', component: AddUserComponent },
  { path: 'userDetail/:id', component: UserDetailComponent },
  { path: 'editBill/:id', component: EditBillComponent },
  { path: 'billDetails/:id', component: BillDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
