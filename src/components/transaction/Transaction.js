export default class Transaction {
  constructor(id, payee, memo, date, category, amount, outflow) {
    this.id = id;
    this.payee = payee;
    this.memo = memo;
    this.date = date;
    this.category = category;
    this.amount = amount;
    this.outflow = outflow;
  }

  isValid() {
    return (
      !!this.payee && !!this.category && !!this.amount && !!this.date
    );
  }
}

export function defaultTransaction() {
  return new Transaction(null, '', '', null, '', 1.23, true);
}
