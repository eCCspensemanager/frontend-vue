import Category from '@/components/category/store/category';

export default class Budget {
  id: string | null;
  category: Category;
  amount: number;

  constructor(category: Category, amount: number) {
    this.id = null;
    this.category = category;
    this.amount = amount;
  }
}
