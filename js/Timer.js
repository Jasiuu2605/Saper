import { UI } from "./UI.js";

export class Timer extends UI {
  #element = null;
  numberOfSeconds = 0;
  #interval = null;

  init() {
    this.#element = this.getElement(this.UiSelectors.timer);
  }

  #startTimer() {
    this.#interval = setInterval(() => {
      this.#updateTimer();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.#interval);
    this.#interval = null;
  }

  resetTimer() {
    this.numberOfSeconds = 0;
    this.#setTimerValue(this.numberOfSeconds);
    this.stopTimer();
    this.#startTimer();
  }

  #updateTimer() {
    this.numberOfSeconds++;
    this.#setTimerValue(this.numberOfSeconds);
  }

  #setTimerValue(value) {
    this.#element.textContent = value;
  }
}
