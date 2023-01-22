class Arma{
    constructor(nombre,categoria,danio,usos,genero,plural){
        this.nombre = nombre;
        this.categoria = categoria;
        this.danio = danio;
        this.usos = usos;
        this.pronombre = genero;
        this.plural = plural;
    };
};

class Jugador{
	constructor(nombre,id){
		this.nombre = nombre;
		this.alive = 1;
        this.arma = null;
        this.id = id;
        this.hp = 1000;
        this.team = null;
        this.kills = 0;
	}

    setArma(arma){
		this.arma= arma;
	}

    setTeam(team){
		this.team=team;
	}

    setHP(hp){
        this.hp=hp;
    }

    getArma(){
		return this.arma;
	}

    getNombre(){
        return this.nombre;
    }

    getHP(){
        return this.hp;
    }

    getID(){
        return this.id;
    }

    getKills(){
        return this.kills;
    }

    getTeam(){
        return this.team;
    }
}

class Team{
	constructor(id){
        this.id = id;
        this.player1 = null;
        this.player2 = null;
        this.player3 = null;
	}

    set setPlayer1(player){
		this.player1= player;
	}

    set setPlayer2(player){
		this.player2= player;
	}

    set setPlayer3(player){
		this.player3= player;
	}

    set setID(id){
        this.id = id;
    }

    getID(){
        return this.id;
    }

    getPlayer1(){
        return this.player1;
    }

    getPlayer2(){
        return this.player2;
    }

    getPlayer3(){
        return this.player3;
    }

    estaVivo1(){
        return (this.player1.alive == 1);
    }

    estaVivo2(){
        return (this.player2.alive == 1);
    }

    estaVivo3(){
        return (this.player3.alive == 1);
    }

    nombresVivos(){
        let nombres = [];
        if(this.getPlayer1()!=null && this.estaVivo1()){
            nombres.push(this.getPlayer1().getNombre());
        }    
        if(this.getPlayer2()!=null && this.estaVivo2()){
            nombres.push(this.getPlayer2().getNombre());
        }    
        if(this.getPlayer3()!=null && this.estaVivo3()){
            nombres.push(this.getPlayer3().getNombre());
        }    
        return nombres;
    }

}

export {
    Arma,
    Jugador,
    Team
};