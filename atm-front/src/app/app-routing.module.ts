import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtmListComponent} from './components/atm-list/atm-list.component';
import {AtmFormComponent} from './components/atm-form/atm-form.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AuthGuardService} from './service/authGuard/auth-guard.service';
import {WithdrawComponent} from './components/withdraw/withdraw.component';
import {AccountStatusComponent} from './components/account-status/account-status.component';
import {DepositMoneyComponent} from './components/deposit-money/deposit-money.component';
import {TransferMoneyComponent} from './components/transfer-money/transfer-money.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {path: 'atms', component: AtmListComponent, canActivate: [AuthGuardService]},
  {path: 'put-cash-to-atm', component: AtmFormComponent, canActivate: [AuthGuardService]},
  {path: 'withdraw-money', component: WithdrawComponent, canActivate: [AuthGuardService]},
  {path: 'deposit-money', component: DepositMoneyComponent, canActivate: [AuthGuardService]},
  {path: 'transfer-money', component: TransferMoneyComponent, canActivate: [AuthGuardService]},
  {path: 'account', component: AccountStatusComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
