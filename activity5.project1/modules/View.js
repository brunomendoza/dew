export default function View(parent) {
    this.parent = parent;

    const operations = new Map();
    operations.set('add', '+');
    operations.set('substract', '-');
    operations.set('multiply', '*');
    operations.set('divide', '/');

    const display = document.createElement('div');
    display.id = 'display';
    display.classList.add('display');
    display.innerHTML = '0';

    const numpad = document.createElement('div');
    numpad.id = 'numpad';
    numpad.classList.add('numpad');

    for (const [operator, label] of operations) {
        var operatorButton = document.createElement('button');
        operatorButton.setAttribute('data-operation', operator);
        operatorButton.classList.add('numpad__button');
        operatorButton.classList.add('numpad__button--operator');
        operatorButton.innerHTML = label;
        numpad.append(operatorButton);
    }

    ['.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse().forEach((n) => {
        var buttonElem = document.createElement('button');
        buttonElem.innerHTML = n;
        buttonElem.setAttribute('name', 'button' + n);
        buttonElem.setAttribute('value', n);
        buttonElem.classList.add('numpad__button');

        numpad.appendChild(buttonElem);
    });

    var clearButton = document.createElement('button');
    clearButton.setAttribute('data-operation', 'clear');
    clearButton.classList.add('numpad__button');
    clearButton.classList.add('numpad__button--operator');
    clearButton.innerHTML = "ce";
    numpad.append(clearButton);

    var equalsButton = document.createElement('button');
    equalsButton.setAttribute('data-operation', 'equals');
    equalsButton.classList.add('numpad__button');
    equalsButton.classList.add('numpad__button--equals');
    equalsButton.innerHTML = '=';
    numpad.append(equalsButton);
    
    this.parent.appendChild(display);
    this.parent.appendChild(numpad);
}