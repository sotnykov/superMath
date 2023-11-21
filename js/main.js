class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    const allowedOperators = ['+', '-', '/', '*', '%'];

    if (!allowedOperators.includes(znak)) {
      console.log('Invalid operator entered.');
      return this.input();
    }

    const confirmOperation = confirm(`Do you want to perform an operation ${znak} with ${X} and ${Y}?`);

    if (confirmOperation) {
      const result = this.performOperation(X, Y, znak);
      console.log(`The result of the operation ${znak} with ${X} and ${Y} is ${result}.`);
    } else {
      return this.input();
    }
  }

  input() {
    const X = prompt('Enter a number X:');
    const Y = prompt('Enter a number Y:');
    const znak = prompt('Enter an operator (+, -, /, *, %):');

    return this.check({ X: parseFloat(X), Y: parseFloat(Y), znak });
  }

  performOperation(X, Y, znak) {
    switch (znak) {
      case '+':
        return X + Y;
      case '-':
        return X - Y;
      case '/':
        return X / Y;
      case '*':
        return X * Y;
      case '%':
        return X % Y;
      default:
        return NaN;
    }
  }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: '/' };
p.check(obj);