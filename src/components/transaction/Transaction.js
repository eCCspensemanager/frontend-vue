export default class Transaction {
    constructor(payee, memo, date, category, amount, outflow) {
        this.payee = payee
        this.memo = memo
        this.date = date
        this.category = category
        this.amount = amount
        this.outflow = outflow
    }
}