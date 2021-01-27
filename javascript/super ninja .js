class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength  = 3;

    }

    sayName() {
        console.log("my name is" +this.name);
        
    }

    showStats(){
       console.log("this name :"+this.name , "the health is :"+this.health, "the speed is :"+this.speed, "strength"+this.strength);
    }

    drinkSake(){
        this.health+=10;
    }



}


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this._health = 200;
        this._speed = 10;
        this._strength = 10;
        this._wisdom = 10;
    }

    speakWisdom() {
        return super.drinkSake() + console.log("There are no winners. The obvious is never what it appears to be.");
    }
}





    const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();

    const ninja2 = new Ninja("Baraa");
    ninja2.sayName();
    ninja2.drinkSake();
    ninja2.showStats();

    sensei1 = new Sensei("Ou-sama");
    sensei1.showStats();
    sensei1.speakWisdom();
    sensei1.showStats();