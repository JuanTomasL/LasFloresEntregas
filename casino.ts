import { Blackjack } from "./blackjack";
import { Slots } from "./slots";

export class Casino {
    private nombreCasino:string;
    private juegoSlot:Slots;
    private juegoBlj:Blackjack;

    public constructor (pNameCasino:string,pJuegoSlot:Slots,pJuegoBj:Blackjack){
        this.nombreCasino = pNameCasino;
        this.juegoSlot = pJuegoSlot;
        this.juegoBlj = pJuegoBj;

    }

    public setNameCasino(pNameCasino:string):void{
        this.nombreCasino = pNameCasino;        
    }
      public getNameCasino():string{
        return this.nombreCasino;
    }

    public setJuegoSlot(pJuegoSlot:Slots):void{
        this.juegoSlot = pJuegoSlot;        
    }
      public getJuegoSlot():Slots{
        return this.juegoSlot;
    }

    public setJuegoBlJ(pJuegoBj:Blackjack):void{
        this.juegoBlj = pJuegoBj;        
    }
      public getJuegoBlJ():Blackjack{
        return this.juegoBlj;
    }

}



