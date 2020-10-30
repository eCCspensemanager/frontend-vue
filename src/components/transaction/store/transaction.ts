import Category from '@/components/category/store/category';

export default class Transaction {
  id: string | null;
  payee: string;
  memo: string;
  date: Date;
  category: Category | null;
  amount: number;
  outflow: boolean;

  constructor(id: string | null = null, payee: string, memo: string, date: Date, category: Category | null, amount: number, outflow: boolean) {
    this.id = id;
    this.payee = payee;
    this.memo = memo;
    this.date = new Date(date);
    this.category = category;
    this.amount = amount;
    this.outflow = outflow;
  }

  isValid() {
    return !!this.payee && !!this.category && !!this.amount && !!this.date;
  }
}

export function defaultTransaction() {
  return new Transaction(null, '', '', new Date(), null, 1.23, true);
}
