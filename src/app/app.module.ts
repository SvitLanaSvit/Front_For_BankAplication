import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { EditAgreementComponent } from './edit-agreement/edit-agreement.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { CreateAgreementComponent } from './create-agreement/create-agreement.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { ListAccountByProductIdStatusComponent } from './list-account-by-product-id-status/list-account-by-product-id-status.component';
import { ListAgreementsByClientIdComponent } from './list-agreements-by-client-id/list-agreements-by-client-id.component';
import { ListAgreementsByManagerIdComponent } from './list-agreements-by-manager-id/list-agreements-by-manager-id.component';
import { ListClientWithBalanceMoreComponent } from './list-client-with-balance-more/list-client-with-balance-more.component';
import { ListManagersSortedByProductComponent } from './list-managers-sorted-by-product/list-managers-sorted-by-product.component';
import { ListAllChangedProductsComponent } from './list-all-changed-products/list-all-changed-products.component';
import { AboutApplicationComponent } from './about-application/about-application.component';

@NgModule({
  declarations: [
    AppComponent,
    ListManagersComponent,
    ListAccountsComponent,
    ListAgreementsComponent,
    ListClientComponent,
    ListProductsComponent,
    ListTransactionsComponent,
    CreateManagerComponent,
    EditManagerComponent,
    CreateAccountComponent,
    EditAccountComponent,
    CreateProductComponent,
    EditProductComponent,
    EditAgreementComponent,
    CreateClientComponent,
    CreateAgreementComponent,
    EditClientComponent,
    CreateTransactionComponent,
    ListAccountByProductIdStatusComponent,
    ListAgreementsByClientIdComponent,
    ListAgreementsByManagerIdComponent,
    ListClientWithBalanceMoreComponent,
    ListManagersSortedByProductComponent,
    ListAllChangedProductsComponent,
    AboutApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
