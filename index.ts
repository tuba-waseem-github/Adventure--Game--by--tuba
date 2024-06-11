import inquirer from "inquirer"

class player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
         this.fuel = 100
    }
}
class opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let Player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name"
    }
])
let Opponent = await inquirer.prompt([
    {
      name: "Select",
      type: "list",
      message: "Select Ypur oOpponent",
      choices: ["Skeleton", "Alian", "Zombie"]
    }
])

let p1 = new player(Player.name)
let o1 = new opponent(Opponent.Select)

do{   
    //Skeleton
    if(Opponent.Select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack"){
            let num =Math.floor (Math.random() * 2)
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is${p1.fuel}`);
                console.log(`${o1.name} fuel is${o1.fuel}`);
                if (p1.fuel <0){
                    console.log("You Loose", "Better Luck Next Time");
                    process.exit()
                }
            }
            if (num < 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is${p1.fuel}`);
                console.log(`${o1.name} fuel is${o1.fuel}`);
                if (o1.fuel <0){
                    console.log("You Win");
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink portion"){
               p1.fuelIncrease()
               console.log(`You Drink Health Portion Your Fuel is${p1.fuel}`);        
        }
        if (ask.opt == "Run for your life"){
            console.log("You Loose", "Better Luck Next Time");
            process.exit()
        }
    }

    //Alian
    if(Opponent.Select == "Alian") {


        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack"){
            let num =Math.floor (Math.random() * 2)
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is${p1.fuel}`);
                console.log(`${o1.name} fuel is${o1.fuel}`);
                if (p1.fuel <0){
                    console.log("You Loose", "Better Luck Next Time");
                    process.exit()
                }
            }
            if (num < 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is${p1.fuel}`);
                console.log(`${o1.name} fuel is${o1.fuel}`);
                if (o1.fuel <0){
                    console.log("You Win");
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink portion"){
               p1.fuelIncrease()
               console.log(`You Drink Health Portion Your Fuel is${p1.fuel}`);        
        }
        if (ask.opt == "Run for your life"){
            console.log("You Loose", "Better Luck Next Time");
            process.exit()
        }
    }

    //Zombie
    if(Opponent.Select == "Zombie") {


        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.opt == "Attack"){
            let num =Math.floor (Math.random() * 2)
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is${p1.fuel}`);
                console.log(`${o1.name} fuel is${o1.fuel}`);
                if (p1.fuel <0){
                    console.log("You Loose", "Better Luck Next Time");
                    process.exit()
                }
            }
            if (num < 0) {
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is${p1.fuel}`);
                console.log(`${o1.name} fuel is${o1.fuel}`);
                if (o1.fuel <0){
                    console.log("You Win");
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink portion"){
               p1.fuelIncrease()
               console.log(`You Drink Health Portion Your Fuel is${p1.fuel}`);        
        }
        if (ask.opt == "Run for your life"){
            console.log("You Loose", "Better Luck Next Time");
            process.exit()
        }
    }

}
while(true)