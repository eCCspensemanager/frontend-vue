import Category from '@/components/category/store/category';

export default class Budget {
  id: string | null;
  category: Category;
  amount: number;

  isValid(): Boolean {
    return !!this.category && !!this.amount && this.amount != 0;
  }

  constructor(category: Category, amount: number) {
    this.id = null;
    this.category = category;
    this.amount = amount;
  }
}
