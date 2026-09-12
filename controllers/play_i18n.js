export const DEFAULT_PLAY_LANGUAGE = "es";
export const SUPPORTED_PLAY_LANGUAGES = ["es", "en"];

const explanationEnglish = "**How to play?**\nSimply join by clicking the \"Join battle\" button below. After the configured waiting time (10 minutes by default), the game will start, and the bot will take care of everything, just sit back and watch the chaos unfold. If everyone already joined, you can click \"Start now\" to begin the game immediately. \nClick \"Slow Mode\" if you want the game to last longer."
const explicacionEspanol = "**¿Cómo jugar?**\nSimplemente unete dando click en el boton \"Unirse a la batalla\" de abajo. Después del tiempo de espera configurado (10 minutos por defecto), comenzará la partida, y el bot se encargará de todo, solo sientense a mirar y disfrutar del caos. Si ya se unieron todos, pueden darle click a \"Comenzar ya\" para iniciar instantáneamente. \nHaz click en \"Modo Lento\" si quieres que la partida dure más"
const donacionEspanol = "☕ ¿Te gusta el proyecto? Somos un equipo indie manteniendo los servidores a flote. Si deseas ayudarnos a mantener el servidor o financiar la versión final (y salir en los créditos), puedes [invitarnos un café](https://ko-fi.com/robbiebot) o votar por el bot en [Top.gg](https://top.gg/bot/1512694300033552454)."
const donationEnglish = "☕ Like the project? We're an indie team keeping the servers afloat. If you wish to help us maintain the server or fund the final version (and show up in the credits), you can [buy us a coffee](https://ko-fi.com/robbiebot) or vote for the bot on [Top.gg](https://top.gg/bot/1512694300033552454)."
const invitacionServer = "https://discord.gg/XJ6nX4znsj";
const invitacionBot = "https://discord.com/oauth2/authorize?client_id=1512694300033552454&permissions=2147485696&integration_type=0&scope=bot+applications.commands";

const PLAY_TRANSLATIONS = {
  es: {
    game_started: "Se ha iniciado una nueva partida de Los Juegos del Hambre",
    already_running: "Ya hay una partida en curso",
    wait_timeout: "Se ha acabado el tiempo de espera. Por favor inicia una nueva partida.",
    join_button: "Unirse a la batalla",
    begin_button: "Comenzar ya",
    slow_mode: "Modo Lento",
    fast_mode: "Modo Rapido",
    joined_players: `${explicacionEspanol}\n\nJugadores unidos.`,
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
    winners_three: " ¡Tenemos 3 ganadores! ¡{a}, {b} y {c} se llevan el trofeo a casa!",
    winners_two: " ¡Tenemos 2 ganadores! ¡{a} y {b} se llevan el trofeo a casa!",
    winner_one: " ¡Tenemos un ganador! ¡{name} logró sobrevivir a este caos!",
    no_winners: " Parece que esta vez no hubo ganadores...",
    stop_by_staff: "{nick} ha detenido la partida de los Juegos del Hambre.",
    stop_no_permission: "No te hagas el chistoso, solo Staff puede detener una partida.",
    help_message: `🛠️ **Comandos:**\n\n - **/play** - Comenzar una partida nueva de los Juegos del Hambre. Debes seleccionar el idioma de la partida y puedes elegir el tiempo de auto inicio; si no lo indicas, será de 10 minutos. Es necesario que haya 2 jugadores mínimo para poder iniciar la partida. Hay un máximo de 8 jugadores por partida.\n - **/stop** - Detiene la partida en progreso. Solo el jugador que la inició o el owner pueden detenerla.\n - **/help** - Muestra este mensaje de ayuda explicando los comandos.`,
    help_embed_title: "🤖 RobbieBot - Beta",
    help_embed_description: ` 🚀 ¿Disfrutas el juego? Este bot está en beta y se expande gracias a ti.\n 🔗 [Invítalo a tu servidor](${invitacionBot}) ya mismo y juega con tus amigos.\n 🗨️ Únete al [servidor oficial](${invitacionServer}) para reportar bugs y ganar roles exclusivos.\n${donacionEspanol}`,
    play_final_message: `¿Quieres llevar todo este caos a tu servidor y darle una paliza a tus amigos? Pues [invita al bot](${invitacionBot}) y pon /play para comenzar a jugar. ¡Es gratis y la diversión está garantizada!\n ${donacionEspanol}`,
  },
  en: {
    game_started: "A new Hunger Games battle has started",
    already_running: "There is already a battle in progress",
    wait_timeout: "Waiting time is over. Please start a new battle.",
    join_button: "Join battle",
    begin_button: "Start now",
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
    winners_three: " We have 3 winners! {a}, {b} and {c} take the trophy home!",
    winners_two: " We have 2 winners! {a} and {b} take the trophy home!",
    winner_one: " We have a winner! {name} managed to survive this chaos!",
    no_winners: " Looks like there were no winners this time...",
    stop_by_staff: "{nick} stopped the Hunger Games battle.",
    stop_no_permission: "Nice try, only Staff can stop a battle.",
    help_message: `🛠️ **Commands:**\n\n - **/play** - Start a new Hunger Games match. You must select the game language and can choose the auto-start time; if omitted, it defaults to 10 minutes. In order to start the game, 2 players are needed. 8 players per game max.\n - **/stop** - Stops the match in progress. Only the player who started it or the owner can stop it.\n - **/help** - Shows this help message explaining the commands.`,
    help_embed_title: "🤖 RobbieBot - Beta",
    help_embed_description: ` 🚀 Enjoying the game? This bot is in Beta now and has a full version on the way.\n 🔗 [Invite the bot](${invitacionBot}) to your server now and play with your friends.\n 🗨️ Join the [official server](${invitacionServer}) to report bugs and earn exclusive roles.\n ${donationEnglish}`,
    play_final_message: `Wanna bring the whole chaos to your guild and beat up your friends? Then [invite the bot](${invitacionBot}) and use /play to start playing. It's free and you all are going to have fun for sure!\n ${donationEnglish}`,
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
