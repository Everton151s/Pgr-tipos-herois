
class hero{
    constructor(name,type,age){
        this.name = name
        this.type = type
        this.age = age
    }

    attack(){

        let strike = 0

        if (this.type =="mago"){strike ="magia"}

        else if (this.type =="guerreiro"){strike ="espada"}

        else if (this.type =="monge"){strike ="artes Marcias"}

        else if (this.type =="ninja"){strike ="shuriken"}

        else if (this.type =="soldado"){strike ="fuzil"}
       
            if (strike === 0){
                console.log(`O tipo do herói está errado!`)
            }

            else {
                console.log(`O ${this.name} tem ${this.age} anos de idade.`)
                console.log(`Ele é um ${this.type} e atacou usando ${strike}.`)
            } 
    }
}

let adventureHero = new hero("Capitão Price","soldado",34)

adventureHero.attack()