export default class Transaction {
    constructor(id, payee, memo, date, category, amount, outflow) {
        this.id = id
        this.payee = payee
        this.memo = memo
        this.date = date
        this.category = category
        this.amount = amount
        this.outflow = outflow
    }
}

export function defaultTransaction() {
    return new Transaction(null, "", "", null, "", 0, true)
} 
