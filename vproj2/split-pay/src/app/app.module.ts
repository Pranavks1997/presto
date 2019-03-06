import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
// import { AllExpensesComponent } from './all-expenses/all-expenses.component';
import { GroupsComponent } from './groups/groups.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { FormsModule } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { GroupDetailComponent } from './group-detail/group-detail.component';
import { BillComponent } from './bill/bill.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    HeaderComponent,
    RecentActivityComponent,
    // AllExpensesComponent,
    GroupsComponent,
    UsersComponent,
    GroupDetailComponent,
    BillComponent,
    AddGroupComponent,
    AddUserComponent,
    UserDetailComponent,
    EditBillComponent,
    BillDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
