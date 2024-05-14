class heroi{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
  atacar(){
    let item = " "
        if (this.type == "Guerreiro"){
            item = "Espada"
        }
        else if(this.type == "Mago") {
            item = "magia"
        }
        else if(this.type == "Monge"){
            item = "uma voadora"
        }
        else if(this.type == "Ninja"){
            item = "shuriken"
        }
    
    console.log(`O ${this.type} ${this.name} atacou usando ${item}`)
    }
}
let guerreiro = new heroi("Guts", 25, "Guerreiro")

let mago = new heroi("Dumbledore", 125, "Mago")

let monge = new heroi("Bruce lee", 35, "Monge")

let ninja = new heroi("Naruto", 16, "Ninja")

guerreiro.atacar()

mago.atacar()

monge.atacar()

ninja.atacar()
