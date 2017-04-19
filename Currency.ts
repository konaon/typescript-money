/**
 * Created by konaon on 18.04.2017.
 */
export class Currency{
    public baseRatio: number;
    public name: string;
    public symbol: string;

    constructor(baseRatio: number, name: string, symbol: string){
        this.baseRatio = baseRatio;
        this.name = name;
        this.symbol = symbol;
    }
}