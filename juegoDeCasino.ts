export class JuegoDeCasino {
    protected nombre : string;
    protected jugadores : number;
    protected apuestaMin : number;

    public constructor (pNombre:string,pJugadores:number,pApuestaMin:number){
        this.nombre = pNombre;
        this.jugadores = pJugadores;
        this.apuestaMin = pApuestaMin;

    }

    public setNombre(pNombre:string):void{
        this.nombre = pNombre;        
    }
      public getNombre():string{
        return this.nombre;
    }

    public setJugadores(pJugadores:number):void{
        this.jugadores = pJugadores;        
    }
      public getJugadores():number{
        return this.jugadores;
    }

    public setApuestaMin(pApuestaMin:number):void{
        this.apuestaMin = pApuestaMin;        
    }
    public getApuestaMin():number{
        return this.apuestaMin;
    }
}