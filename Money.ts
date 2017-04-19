/**
 * Created by konaon on 19.04.2017.
 */
import {Currency} from "./Currency";

export class Money {
    public amount: number;
    public currency: Currency;

    constructor(amount: number, currency: Currency){
        this.amount = amount;
        this.currency = currency;
    }

    public getConverted(to: Currency) : Money{
        return new Money(
            (this.getBaseAmount()) / to.baseRatio,
            to
        );
    }

    public convert(to: Currency) {
        this.amount = (this.amount * this.currency.baseRatio) / to.baseRatio;
        this.currency = to;

        return this;
    }

    public add(money: Money)  {
        let conMon = money.getConverted(this.currency);
        this.amount += conMon.amount;

        return this;
    }

    public subtract(money: Money) {
        let conMon = money.getConverted(this.currency);
        this.amount -= conMon.amount;

        return this;
    }

    public multiply(multiplier: number) {
        this.amount = this.amount * multiplier;

        return this;
    }

    public isMore(money: Money) : boolean{
        return this.getBaseAmount() > money.getBaseAmount();
    }

    public isLess(money: Money) : boolean{
        return this.getBaseAmount() < money.getBaseAmount();
    }

    public isEqually(money: Money, accurate: number = 4) : boolean{
        return this.getBaseAmount().toFixed(accurate) === money.getBaseAmount().toFixed(accurate);
    }

    public isMoreOrEqual(money: Money, accurate: number = 4){
        return this.isMore(money) || this.isEqually(money, accurate);
    }

    public isLessOrEqual(money: Money, accurate: number = 4){
        return this.isLess(money) || this.isEqually(money, accurate);
    }

    public getBaseAmount(){
        return this.amount * this.currency.baseRatio;
    }

    public toString(accurate: number = 2){
        return this.amount.toFixed(accurate) + " " + this.currency.symbol;
    }
}