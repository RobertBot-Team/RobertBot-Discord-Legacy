class Arma {
  constructor(nombre, categoria, danio, usos, genero, plural, name, pluralEn) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.danio = danio;
    this.usos = usos;
    this.pronombre = genero;
    this.plural = plural;
    this.name = name;
    this.pluralEn = pluralEn;
  };
};

class Jugador {
  constructor(nombre, id, foto) {
    this.nombre = nombre;
    this.alive = 1;
    this.arma = null;
    this.id = id;
    this.hp = 1000;
    this.team = null;
    this.kills = 0;
    this.foto = foto;
    this.tieneOtraFoto = null;
  }

  setArma(arma) {
    this.arma = arma;
  }

  setTeam(team) {
    this.team = team;
  }

  setHP(hp) {
    this.hp = hp;
  }

  setFoto(foto) {
    this.foto = foto;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getArma() {
    return this.arma;
  }

  getNombre() {
    return this.nombre;
  }

  getHP() {
    return this.hp;
  }

  getAlive() {
    return this.alive;
  }

  getID() {
    return this.id;
  }

  getKills() {
    return this.kills;
  }

  getTeam() {
    return this.team;
  }

  getFoto() {
    return this.foto;
  }

  getTieneOtraFoto() {
    return this.tieneOtraFoto;
  }
}

class JugadorFake {
  constructor(nombre, foto) {
    this.nombre = nombre;
    this.foto = foto;
    this.yaUnido = 0;
  }

  getNombre() {
    return this.nombre;
  }

  getFoto() {
    return this.foto;
  }

  getYaUnido() {
    return this.yaUnido;
  }
}

class Team {
  constructor(id) {
    this.id = id;
    this.player1 = null;
    this.player2 = null;
    this.player3 = null;
    this.name = null;
  }

  set setPlayer1(player) {
    this.player1 = player;
  }

  set setPlayer2(player) {
    this.player2 = player;
  }

  set setPlayer3(player) {
    this.player3 = player;
  }

  set setID(id) {
    this.id = id;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getPlayer1() {
    return this.player1;
  }

  getPlayer2() {
    return this.player2;
  }

  getPlayer3() {
    return this.player3;
  }

  estaVivo1() {
    return (this.player1.alive == 1);
  }

  estaVivo2() {
    return (this.player2.alive == 1);
  }

  estaVivo3() {
    return (this.player3.alive == 1);
  }

  nombresVivos() {
    let nombres = [];
    if (this.getPlayer1() != null && this.estaVivo1()) {
      nombres.push(this.getPlayer1().getNombre());
    }
    if (this.getPlayer2() != null && this.estaVivo2()) {
      nombres.push(this.getPlayer2().getNombre());
    }
    if (this.getPlayer3() != null && this.estaVivo3()) {
      nombres.push(this.getPlayer3().getNombre());
    }
    return nombres;
  }

  quienesVivos() {
    let quienes = "";
    if (this.getPlayer1() != null && this.estaVivo1()) {
      quienes = quienes.concat("1");
    }
    if (this.getPlayer2() != null && this.estaVivo2()) {
      quienes = quienes.concat("2");
    }
    if (this.getPlayer3() != null && this.estaVivo3()) {
      quienes = quienes.concat("3");
    }
    console.log(quienes);
    return quienes;
  }

  esTeamDe1() {
    if (this.getPlayer2() == null && this.getPlayer3() == null) {
      return 1;
    } else {
      return 0;
    }
  }

  esTeamDe2() {
    if (this.getPlayer2() != null && this.getPlayer3() == null) {
      return 1;
    } else {
      return 0;
    }
  }

  esTeamDe3() {
    if (this.getPlayer2() != null && this.getPlayer3() != null) {
      return 1;
    } else {
      return 0;
    }
  }

}

export {
  Arma,
  Jugador,
  Team,
  JugadorFake
};