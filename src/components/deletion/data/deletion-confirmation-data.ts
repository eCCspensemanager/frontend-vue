export default class DeletionConfirmationData {
  showConfirmation: boolean;
  deletionName: string;
  action: Function;

  constructor(show?: boolean, name?: string, action?: Function) {
    this.showConfirmation = show || false;
    this.deletionName = name || 'null';
    this.action = action || (() => {});
  }

  show(name: string, action: Function) {
    this.showConfirmation = true;
    this.deletionName = name;
    this.action = action;
  }
}
