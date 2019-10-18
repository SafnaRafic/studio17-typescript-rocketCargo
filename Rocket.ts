import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket{
    // properties and methods
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[]=[];
    constructor(name: string,totalCapacityKg: number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
        this.cargoItems=[];
    }
    sumMass( items: Payload[] ): number{
        let sum: number=0;
        for(let i:number=0;i<items.length;i++){
            sum += items[i].massKg;
        }       
        return sum;
    }
    currentMassKg(): number{
       return this.sumMass(this.cargoItems)+this.sumMass(this.astronauts); 
    }
    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        else{
            return false;
        }
    }
    addCargo(cargo: Cargo){
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }

    }
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }

    
 }
 