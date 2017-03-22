/**
 * 饿汉式
 */ 
export class Hunger{
    private constructor(){}

    private static instance: Hunger = new Hunger();
    
    public static getInstance(): Hunger{
        return this.instance;
    }
}