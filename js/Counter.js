import { UI } from "./UI";


export class Counter extends UI {
  value = null;
  #element = null;

  init() {
    this.#element = this.getElement(this.UiSelectors.counter);
  }

  setValue(value) {
    this.value = value;
    this.#updsateValue();
  }

  increment() {
    this.value++;
    this.#updateValue();
  }

  decrement() {
    this.value--;
    this.#updateValue();
  }

  #updateValue() {
    this.#element.textContent = this.value;
  }
}