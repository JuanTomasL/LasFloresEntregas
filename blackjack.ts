import { JuegoDeCasino } from "./juegoDeCasino";

export class Blackjack extends JuegoDeCasino{
    private cartas:number;
    private subiarApuesta:number;

    public constructor (pmCartas:number,pmApuesta:number,pmNombre:string,pmJugadores:number,pmApuestamin:number){
    super(pmNombre,pmJugadores,pmApuestamin);
    this.cartas = pmCartas;
    this.subiarApuesta = pmApuesta;  
    }

    public setCartas(pmCartas:number):void{
        this.cartas = pmCartas;        
    }
      public getCartas():number{
        return this.cartas;
    }

    public setSubirApuesta(pmApuesta:number):void{
        this.subiarApuesta = pmApuesta;        
    }
      public getSubirApuesta():number{
        return this.subiarApuesta;
    }
     

}