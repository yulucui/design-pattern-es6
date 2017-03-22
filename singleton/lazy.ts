/**
 * 懒汉式
 */
export class Lazy{
    private constructor(){}

    private static instance: Lazy;

    //js不存在线程是否安全
    public static getInstance(): Lazy{
        if(!this.instance)
            this.instance = new Lazy();
        return this.instance;
    }

}