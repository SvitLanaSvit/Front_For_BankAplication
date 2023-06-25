export class Transaction {
  constructor(public type: string, public amount: string, public description: string, public createdAt: string, public debitAccountId: string, public creditAccountId: string, public id: string = ''){}
}
