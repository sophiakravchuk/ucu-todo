
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);
    if (newElement.toString() != "[object HTMLUnknownElement]") {
      const {innerHTML, innerText} = attributes;

      for (let attribute in attributes) {
        if (['innerHTML', 'innerText'].includes(attribute)) {
          continue;
        }

        newElement.setAttribute(attribute, attributes[attribute]);
      }

      innerHTML && (newElement.innerHTML = innerHTML);
      innerText && (newElement.innerText = innerText);

      parent.appendChild(newElement);

      return newElement;
    }
    else{
      throw new StepanError(element + ' is not a valid tag name');
    }
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object
      if (parent === null || parent === undefined){
        throw new StepanError('parent is null or undefined');
      } else if (!(parent instanceof HTMLElement)){
        throw new StepanError('parent is not a valid DOM object');
      }
      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}


class StepanError extends Error {
  constructor(message) {
    super(message);
    this.name = "StepanError";
  }
}

