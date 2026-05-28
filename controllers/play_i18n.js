export const DEFAULT_PLAY_LANGUAGE = "es";
export const SUPPORTED_PLAY_LANGUAGES = ["es", "en"];

const explanationEnglish = "**How to play?**\nSimply join by clicking the \"Join battle\" button below. When everyone has joined, you can click \"Start\", and the bot will take care of everything, just sit back and watch the chaos unfold. After 10 minutes, the joining button will deactivate and you'll have to start again, so be quick, don't miss out!\nClick \"Slow Mode\" if you want the game to last longer."
const explicacionEspanol = "**¿Cómo jugar?**\nSimplemente unete dando click en el boton \"Unirse a la batalla\" de abajo. Cuando todos se hayan unido, pueden darle click a \"Comenzar\", y el bot se encargará de todo, solo sientense a mirar y disfrutar del caos. Después de 10 minutos el botón para unirse se desactiva y debes volver a empezar, ¡sé rápido, no quedes fuera!\nHaz click en \"Modo Lento\" si quieres que la partida dure más"

const PLAY_TRANSLATIONS = {
  es: {
    game_started: "Se ha iniciado una nueva partida de Los Juegos del Hambre",
    already_running: "Ya hay una partida en curso",
    wait_timeout: "Se ha acabado el tiempo de espera. Por favor inicia una nueva partida.",
    join_button: "Unirse a la batalla",
    begin_button: "Comenzar",
    slow_mode: "Modo Lento",
    fast_mode: "Modo Rapido",
    joined_players: `${explicacionEspanol}\n\nJugadores unidos`,
    joined_battle: "⚔ {nick} se unio a la batalla",
    already_joined: "Ya te has unido a esta partida",
    game_full: "La partida ya está llena (Máximo 8 jugadores)",
    joined_count: `${explicacionEspanol}\n\n{count} Jugadores unidos\n {playersList}`,
    battle_coming: "Se viene la batalla",
    game_starting: "Comienza la partida",
    need_two_players: "Se necesitan al menos 2 jugadores para comenzar.",
    mode_k_enabled: "Modo K activado.",
    mode_k_win: "Todos se mataron y K gano",
    no_permission_start_battle: "No tienes permisos para comenzar la batalla.",
    mode_changed: "Se cambio el modo a {mode}",
    no_permission_change_mode: "No tienes permisos para cambiar el modo de la partida.",
    alive_count: "Hay {count} jugadores con vida",
    remaining_count: "Queda{pluralN} {count} jugador{pluralEs} con vida.",
    winners_three: " Los ganadores son {a}, {b} y {c}",
    winners_two: " Los ganadores son {a} y {b}",
    winner_one: " El ganador es {name}",
    no_winners: " Parece que esta vez no hubo ganadores...",
    stop_by_staff: "{nick} ha detenido la partida de los Juegos del Hambre.",
    stop_no_permission: "No te hagas el chistoso, solo Staff puede detener una partida.",
    help_message: `🛠️ **Comandos de RobertBot:**\n\n**/play** - Comenzar una partida nueva de los Juegos del Hambre. Debes seleccionar el idioma de la partida. Es necesario que haya 2 jugadores mínimo para poder iniciar la partida. Hay un máximo de 8 jugadores por partida.\n**/stop** - Detiene la partida en progreso. Solo el jugador que la inició o el owner pueden detenerla.\n**/help** - Muestra este mensaje de ayuda explicando los comandos.`,
  },
  en: {
    game_started: "A new Hunger Games battle has started",
    already_running: "There is already a battle in progress",
    wait_timeout: "Waiting time is over. Please start a new battle.",
    join_button: "Join battle",
    begin_button: "Start",
    slow_mode: "Slow Mode",
    fast_mode: "Fast Mode",
    joined_players: `${explanationEnglish}\n\nJoined players`,
    joined_battle: "⚔ {nick} joined the battle",
    already_joined: "You have already joined this game",
    game_full: "The game is full (Max 8 players)",
    joined_count: `${explanationEnglish}\n\n{count} players joined\n {playersList}`,
    battle_coming: "The battle is coming",
    game_starting: "The battle starts now",
    need_two_players: "At least 2 players are required to start.",
    mode_k_enabled: "K Mode enabled.",
    mode_k_win: "Everyone died and K won",
    no_permission_start_battle: "You do not have permission to start the battle.",
    mode_changed: "Mode changed to {mode}",
    no_permission_change_mode: "You do not have permission to change battle mode.",
    alive_count: "There are {count} players alive",
    remaining_count: "{count} player{pluralEs} remaining.",
    winners_three: " Winners are {a}, {b} and {c}",
    winners_two: " Winners are {a} and {b}",
    winner_one: " Winner is {name}",
    no_winners: " Looks like there were no winners this time...",
    stop_by_staff: "{nick} stopped the Hunger Games battle.",
    stop_no_permission: "Nice try, only Staff can stop a battle.",
    help_message: `🛠️ **RobertBot Commands:**\n\n**/play** - Start a new Hunger Games match. You must select the game language. In order to start the game, 2 players are needed. 8 players per game max.\n**/stop** - Stops the match in progress. Only the player who started it or the owner can stop it.\n**/help** - Shows this help message explaining the commands.`,
  },
};

export function normalizePlayLanguage(language) {
  if (!language) return DEFAULT_PLAY_LANGUAGE;
  return SUPPORTED_PLAY_LANGUAGES.includes(language) ? language : DEFAULT_PLAY_LANGUAGE;
}

export function getPlayLanguageFromOptions(options = []) {
  const languageOption = options.find((opt) => opt?.name === "idioma");
  return normalizePlayLanguage(languageOption?.value);
}

export function getModeLabel(language, isSlowMode) {
  return isSlowMode ? tPlay(language, "fast_mode") : tPlay(language, "slow_mode");
}

export function tPlay(language, key, params = {}) {
  const lang = normalizePlayLanguage(language);
  const selected = PLAY_TRANSLATIONS[lang] || PLAY_TRANSLATIONS[DEFAULT_PLAY_LANGUAGE];
  const fallback = PLAY_TRANSLATIONS[DEFAULT_PLAY_LANGUAGE][key] || "";

  let template = selected[key] || fallback;
  if (typeof template !== "string") return "";

  return template.replace(/\{(\w+)\}/g, (_, token) => {
    if (params[token] === undefined || params[token] === null) {
      return "";
    }
    return String(params[token]);
  });
}
