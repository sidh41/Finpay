import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';
// import { CardsComponent } from './cards/cards.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
  BalanceComponent,
  TransactionsComponent,
  TransferComponent,
  // CardsComponent
];



@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,FormsModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    COMPONENTS
  ],
})
export class SharedModule { }
