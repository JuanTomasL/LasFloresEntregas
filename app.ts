import { Blackjack } from "./blackjack";
import { Slots } from "./slots";
import { JuegoDeCasino } from "./juegoDeCasino";
import { Casino } from "./casino";




const blackjack1: Blackjack = new Blackjack (52,1000,"Black",3,100)
const slots1: Slots = new Slots ("Slots Fuit",1,500,true,1000)
const casino1: Casino = new Casino("Casino Las Flores",slots1,blackjack1)

console.log(casino1);
