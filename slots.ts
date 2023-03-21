import { JuegoDeCasino } from "./juegoDeCasino";

export class Slots extends JuegoDeCasino{
    private maquinaEncendida:boolean;
    private apuesta:number;

    public constructor(parNombre:string,parJugadores:number,parApuestaMin:number,parMaquinaE:boolean,parApuesta:number) {
        super(parNombre,parJugadores,parApuestaMin)
        this.maquinaEncendida = parMaquinaE;
        this.apuesta = parApuesta;

    }

    public setMaquinaE(parMaquinaE:boolean):void{
        this.maquinaEncendida = parMaquinaE;        
    }
      public getMaquinaE():boolean{
        return this.maquinaEncendida;
    }

    public setApuesta(parApuesta:number):void{
        this.apuesta = parApuesta;        
    }
      public getApuesta():number{
        return this.apuesta;
    }

}