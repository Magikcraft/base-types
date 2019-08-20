declare const magikcraft: {
  io: magik;
};

interface Memento {
  (value: any): void;
  (key: string | number, value: any): void;
  setItem(key: string | number, value: any): void;
  getItem(key: string | number): any;
}

interface magik {
  /**
   * Return a reference to the Magikcraft Bukkit Plugin
   *
   */
  getPlugin(): Plugin;

  /**
   * Execute the callback function once, after the delay in milliseconds
   *
   * @export
   * @param {() => void} callback
   * @param {number} delay
   * @returns {number}
   */
  setTimeout(callback: () => void, delay: number): number;

  /**
   * Wait for a number of seconds, then do the task.
   *
   * @param {number} delayInSeconds
   * @param {() => void} task
   * @returns {number}
   * @memberof magik
   */
  doAfter(delayInSeconds: number, task: () => void): number;

  /**
   * Execute the callback function multiple times, after the delay in milliseconds.
   * Returns a handle that can be used to clear the interval timer.
   *
   * @export
   * @param {() => void} callback
   * @param {number} delay
   * @returns {number}
   */
  setInterval(callback: () => void, delay: number): number;
  /**
   * Clear the interval timer.
   */
  clearInterval(handle: number): void;

  /**
   * Volare means to fly. This has you float up into the air.
   * Be careful, because you will take damage if you fall on the ground. Landing in water causes no damage.
   *
   * Example:
   * ```
   * const magik = magikcraft.io;
   *
   * function fly() {
   *      magik.volare();
   * }
   * ```
   */
  volare(duration?: number): void;

  /**
   *
   * Return a reference to where you are looking.
   *
   * Example:
   *
   * Here's a spell that teleports you to where you are looking.
   * ```
   * const magik = magikcraft.io;
   *
   * function blink() {
   *      const there = magik.aspecto();
   *      magik.ianuae(there);
   * }
   * ```
   */
  aspecto(): Location;

  /**
   * The caldarium function takes an array of ingredients and returns a secret. Sometimes it's a new function name, sometimes it's a clue.
   *
   * Example:
   * ```
   * const magik = magikcraft.io;
   *
   * function pot() {
   *
   * }
   * ```
   */
  caldarium(ingredientsList: string[]): string;

  /**
   *  Launch a firework.
   *
   * Example:
   * This spell will launch a firework where you are looking.
   * ```
   * const magik = magikcraft.io;
   *
   * function rocket() {
   *      const there = magik.aspecto();
   *      magik.stella(there);
   * }
   * ```
   */
  stella(location: Location): void;

  /**
   * Declaro - to manifest (to make clear, to bring into clarity). Manifests an item in Minecraft.
   *
   * The argument is a special code that can be found from clues in the Magikcraft universe.
   *
   * Example:
   * Here is how you get an elytra:
   * ```
   * const magik = magikcraft.io;
   *
   * function magik_carpet() {
   *      magik.declaro('elytra');
   * }
   * ```
   */
  declaro(item: string): void;

  /**
   *
   * Strike lightning.
   *
   * Defaults to where you are looking if you do not specify a location.
   *
   * Example:
   * ```
   * const magik = magikcraft.io;
   *
   * function lightning() {
   *      magik.shakti();
   * }
   * ```
   */
  shakti(location?: Location): void;

  /**
   * Satio feeds you with magik, giving you a full health bar.
   *
   * Example:
   *
   * ```
   * function feedme() {
   *      magik.satio();
   * }
   * ```
   */
  satio(): void;

  /**
   * Generate and return a random number.
   *
   * Example:
   *
   * Here's a spell that rolls a die and produces a random number.
   * ```
   * const magik = magikcraft.io;
   *
   * function rollDie(sides = 6) {
   *      const dieroll = magik.random(1, sides);
   *      magik.dixit(`You rolled:  ${dieroll}`);
   *      return dieroll;
   * }
   * ```
   */
  random(min: number, max: number): number;

  /**
   * Return a reference to the current player Bukkit API object.
   * On Magikcraft campaign servers this will return null if you do not have sufficient permissions.
   * On Magikcraft Open Source Platform servers this always returns a reference to the player Bukkit API object.
   *
   */
  getSender(): Player;

  /**
   * Dixit prints a message out to the user's Minecraft console. It's useful for debugging.
   * This is the equivalent of `console.log`.
   * You can send a message to another user by passing their name as the optional second argument.
   *
   * Example:
   * ```
   *  const magik = magikcraft.io;
   *
   * function say(msg="Hello world!") {
   *      magik.dixit(msg);
   * }
   * ```
   */
  dixit(message: string, playername?: string): void;

  /**
   * Call a task function the specified number of times. When finished, optionally execute a callback function. Delay is the number of milliseconds between invocations of the task function.
   *
   * Example:
   * This spell will have you jump multiple times in a row, to get extra height. Be careful though - jump too high and you'll hurt yourself if you fall!
   * ```
   * const magik = magikcraft.io;
   *
   * function multiJump(times = 2) {
   *      magik.doNTimes(exsultus, times, 1000);
   * }
   * ```
   *
   * Here is a version with a callback function that executes when it is finished:
   * ```
   * const magik = magikcraft.io;
   *
   * function mj(times = 2, delay = 1000) {
   *      magik.doNTimes(exsultus, times, delay, () => magik.dixit("Done!"));
   * }
   * ```
   */
  doNTimes(
    task: () => void | any,
    times: number,
    delay: number,
    callback?: () => void | any
  ): void;

  /**
   * Jump into the air.
   *
   * The power parameter is between 0 and 100 - it is a percentage of your maximum jumping power.
   *
   * Example:
   * ```
   * const magik = magikcraft.io;
   *
   * function jump(power = 100) {
   *      magik.exsultus(power);
   * }
   * ```
   */
  exsultus(power: number): void;

  /**
   *
   * Recall your memory, which can be of any type, including a dictionary-like object.
   *
   * Examples:
   *
   * Here is a simple example that retrieves your memory:
   * ```
   * const magik = magikcraft.io;
   *
   * function remember() {
   *      const thing = magik.exmemento();
   *      magik.dixit(thing.toString());
   * }
   * ```
   *
   * Here's a more advanced example that retrieves memories by name, using a dictionary-like object:
   * ```
   * const magik = magikcraft.io;
   *
   * function remember(name = "default") {
   *      const memory = magik.exmemento() || {};
   *      if (memory[name]) {
   *          magik.dixit(memory[name]);
   *      } else {
   *          magik.dixit("I don't remember that!");
   *      }
   * }
   */

  exmemento(): any;

  /**
   * Create a global namespace. Use this to maintain state.
   *
   * Example:
   * Create a namespace called 'mct1'.
   * ```
   *  const magik = magikcraft.io;
   *
   * function initialiseMCT1() {
   *      const mct1 = magik.global('mct1');
   *      mct1.state = {
   *          insulin: 0.4,
   *          bgl: 0.3
   *      }
   * }
   * ```
   */
  global(namespace: string): object;

  /**
   * Return a reference to the current location.
   *
   * Example:
   * ```
   * const magik = magikcraft.io;
   *
   * function where() {
   *      const here = magik.hic();
   *      magik.dixit(here);
   *      return here;
   * }
   * ```
   *
   */
  hic(): Location;

  /**
   * Toss another player. Iacta gives us "eject" in English.
   *
   * Example:
   * ```
   *  const magik = magikcraft.io;
   *
   * function toss(playername) {
   *      magik.iacta(playername);
   * }
   * ```
   */
  iacta(playername: string): void;

  /**
   * Teleport. Ianuae comes from Janus, the guardian of doorways. January is the gateway or entry to the year.
   *
   * Examples:
   * Here is a spell that takes a location from your memory and teleports you there.
   * ```
   *  const magik = magikcraft.io;
   *
   * function teleport() {
   *      const where = magik.exmemento();
   *      magik.ianuae(where);
   * }
   * ```
   * Here is a more advanced version that assumes that your memory contains a dictionary of locations:
   * ```
   * const magik = magikcraft.io;
   *
   * function tp(where = "default") {
   *      const memory = magik.exmemento();
   *      if (memory[where]) {
   *          magik.ianuae(memory[where]);
   *      } else {
   *          magik.dixit(`I don't remember ${where}!`);
   *      }
   * }
   * ```
   */
  ianuae(location: Location): void;

  /**
   * Set another player on fire.
   *
   * Example:
   * ```
   * const magik = magikcraft.io;
   *
   * function ignite(name: string) {
   *      magik.incendium(name);
   * }
   */
  incendium(playername: string): void;

  /**
   * Memorize something for later. You have a single memory location that can store anything, including a dictionary-like object. This memory is wiped when you disconnect from the server.
   *
   * Examples:
   *
   * Here is a simple example that allows you to remember the current location:
   * ```
   * const magik = magikcraft.io;
   *
   * function memorize() {
   *      const here = magik.hic();
   *      magik.memento(hic);
   * }
   * ```
   *
   * Here's a more advanced example that allows you to remember various locations:
   * ```
   * const magik = magikcraft.io;
   *
   * function memorize(name = "default") {
   *      const memory = magik.exmemento() || {};
   *      memory[name] = magik.hic();
   *      magik.memento(memory);
   * }
   */

  memento: Memento;

  /**
   * Shoot a fireball.
   *
   * Example:
   * ```
   *  const magik = magikcraft.io;
   *
   * function fireball() {
   *      magik.infierno();
   * }
   * ```
   */
  infierno(): void;
}
