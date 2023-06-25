import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from './manager';
import { Account } from './account';
import { Product } from './product';
import { Agreement } from './agreement';
import { Client } from './client';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getManagerById(id: string){
    return this.http.get(`http://localhost:8080/auth/manager/${id}`);
  }
  getAccountById(id: string){
    return this.http.get(`http://localhost:8080/auth/account/${id}`);
  }
  getAgreementById(id: string){
    return this.http.get(`http://localhost:8080/auth/agreement/${id}`);
  }
  getClientById(id: string){
    return this.http.get(`http://localhost:8080/auth/client/${id}`);
  }
  getProductById(id: string){
    return this.http.get(`http://localhost:8080/auth/product/${id}`);
  }
  getTransactionById(id: string){
    return this.http.get(`http://localhost:8080/auth/transaction/${id}`);
  }

  getManagers(){
    return this.http.get("http://localhost:8080/auth/managers/all");
  }
  getAccounts(){
    return this.http.get("http://localhost:8080/auth/accounts/all");
  }
  getAgreements(){
    return this.http.get("http://localhost:8080/auth/agreements/all");
  }
  getClients(){
    return this.http.get("http://localhost:8080/auth/clients/all");
  }
  getProducts(){
    return this.http.get("http://localhost:8080/auth/products/all");
  }
  getTransactions(){
    return this.http.get("http://localhost:8080/auth/transactions/all");
  }

  //HardQuery
  getAccountIdsByProductIdAndStatusQuery(id: string, status: string){
    const params = new HttpParams()
    .set('id', id)
    .set('status', status);

    return this.http.get("http://localhost:8080/auth/findAccountsJPA", {params});
  }
  getAgreementsByClientId(clientId: string){
    const params = new HttpParams().set('clientId', clientId);

    return this.http.get("http://localhost:8080/auth/findAgreements/ClientId",{params});
  }
  getAgreementsByManagerId(managerId: string){
    const params = new HttpParams().set('managerId', managerId);

    return this.http.get("http://localhost:8080/auth/findAgreements/ManagerId",{params});
  }
  getAllClientsWhereBalanceMoreThan(balance: string){
    const params = new HttpParams().set('balance', balance);

    return this.http.get("http://localhost:8080/auth/clients/balanceMore", {params});
  }
  getAllManagersSortedByProduct(){
    return this.http.get("http://localhost:8080/auth/managers/productsQuantity");
  }
  getAllChangedProducts(){
    return this.http.get("http://localhost:8080/auth/changedProductsJPA");
  }


  postManager(manager: Manager){
    return this.http.post("http://localhost:8080/auth/createManager", manager);
  }
  postAccount(account: Account){
    return this.http.post("http://localhost:8080/auth/createAccount", account);
  }
  postProduct(product: Product){
    return this.http.post("http://localhost:8080/auth/createProduct", product);
  }
  postClient(client: Client){
    return this.http.post("http://localhost:8080/auth/createClient", client);
  }
  postAgreement(agreement: Agreement){
    return this.http.post("http://localhost:8080/auth/createAgreement", agreement);
  }
  postTransaction(transaction: Transaction){
    return this.http.post("http://localhost:8080/auth/createTransaction", transaction);
  }

  deleteManager(manager: Manager){
    return this.http.delete(`http://localhost:8080/auth/deleteManager/${manager.id}`);
  }
  deleteAccount(account: Account){
    return this.http.delete(`http://localhost:8080/auth/deleteAccount/${account.id}`);
  }
  deleteProduct(product: Product){
    return this.http.delete(`http://localhost:8080/auth/deleteProduct/${product.id}`);
  }
  deleteAgreement(agreement: Agreement){
    return this.http.delete(`http://localhost:8080/auth/deleteAgreement/${agreement.id}`);
  }
  deleteClient(client: Client){
    return this.http.delete(`http://localhost:8080/auth/deleteClient/${client.id}`);
  }
  deleteTransaction(transaction: Transaction){
    return this.http.delete(`http://localhost:8080/auth/deleteTransaction/${transaction.id}`)
  }

  putManager(manager: Manager){
    return this.http.put(`http://localhost:8080/auth/editManager/${manager.id}`, manager);
  }
  putAccount(account: Account){
    return this.http.put(`http://localhost:8080/auth/editAccount/${account.id}`, account);
  }
  putProduct(product: Product){
    return this.http.put(`http://localhost:8080/auth/editProduct/${product.id}`, product);
  }
  putClient(client: Client){
    return this.http.put(`http://localhost:8080/auth/editClient/${client.id}`, client);
  }
  putAgreement(agreement: Agreement){
    return this.http.put(`http://localhost:8080/auth/editAgreement/${agreement.id}`, agreement)
  }
}
