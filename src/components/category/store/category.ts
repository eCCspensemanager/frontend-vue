export default class Category {
  id: string | null;
  name: string;

  constructor(name: string) {
    this.id = null;
    this.name = name;
  }
}
