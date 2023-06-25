import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListManagersComponent } from './list-managers/list-managers.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { ListAgreementsComponent } from './list-agreements/list-agreements.component';
import { ListClientComponent } from './list-clients/list-client.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditAgreementComponent } from './edit-agreement/edit-agreement.component';
import { CreateAgreementComponent } from './create-agreement/create-agreement.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ListAccountByProductIdStatusComponent } from './list-account-by-product-id-status/list-account-by-product-id-status.component';
import { ListAgreementsByClientIdComponent } from './list-agreements-by-client-id/list-agreements-by-client-id.component';
import { ListAgreementsByManagerIdComponent } from './list-agreements-by-manager-id/list-agreements-by-manager-id.component';
import { ListClientWithBalanceMoreComponent } from './list-client-with-balance-more/list-client-with-balance-more.component';
import { ListManagersSortedByProductComponent } from './list-managers-sorted-by-product/list-managers-sorted-by-product.component';
import { ListAllChangedProductsComponent } from './list-all-changed-products/list-all-changed-products.component';
import { AboutApplicationComponent } from './about-application/about-application.component';

const routes: Routes = [
  {path: "listAccounts", component: ListAccountsComponent, title: "List of accounts."},
  {path: "listAgreements", component: ListAgreementsComponent, title: "List of agreements."},
  {path: "listClients", component: ListClientComponent, title: "List of clients."},
  {path: "listManagers", component: ListManagersComponent, title: "List of managers."},
  {path: "listProducts", component: ListProductsComponent, title: "List of products."},
  {path: "listTransactions", component: ListTransactionsComponent, title: "List of transactions."},
  {path: "createManager", component: CreateManagerComponent, title: "Create new manager."},
  {path: "createAccount", component: CreateAccountComponent, title: "Create new account."},
  {path: "createProduct", component: CreateProductComponent, title: "Create new product."},
  {path: "createClient", component: CreateClientComponent, title: "Create new client."},
  {path: "createAgreement", component: CreateAgreementComponent, title: "Create new agreement."},
  {path: "createTransaction", component: CreateTransactionComponent, title: "Create new transaction."},
  {path: "editManager", component: EditManagerComponent, title: "Edit manager."},
  {path: "editAccount", component: EditAccountComponent, title: "Edit account."},
  {path: "editProduct", component: EditProductComponent, title: "Edit product."},
  {path: "editAgreement", component: EditAgreementComponent, title: "Edit agreement."},
  {path: "editClient", component: EditClientComponent, title: "Edit client."},
  {path: "listAccountByProductIdAndStatus", component: ListAccountByProductIdStatusComponent, title: "List of accounts by product id and status"},
  {path: "listAgreementsByClientId", component: ListAgreementsByClientIdComponent, title: "List of accounts by client id"},
  {path: "listAgreementsByManagerId", component: ListAgreementsByManagerIdComponent, title: "List of accounts by manager id"},
  {path: "listClientsWithBalancaMore", component: ListClientWithBalanceMoreComponent, title: "List of clients with balance more than"},
  {path: "listManagersSortedByProductLimit", component: ListManagersSortedByProductComponent, title: "List of managers sorted by product limit"},
  {path: "listAllChangedProducts", component: ListAllChangedProductsComponent, title: "List of all changed products"},
  {path: "aboutApplication", component: AboutApplicationComponent, title: "About this application"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
