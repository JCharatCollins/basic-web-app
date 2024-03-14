export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Pob.";
  }

  // Regex for Which of the following numbers is the largest: 98, 5, 62?
  const numbers = new RegExp(
    /^Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?$/
  );

  if (numbers.test(query)) {
    const match = query.match(numbers);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const z = parseInt(match[3]);
      return Math.max(x, y, z).toString();
    }

    return "";
  }

  // Regex for what is x + y?
  const add = new RegExp(/^What is (\d+) plus (\d+)\?$/);
  if (add.test(query)) {
    const match = query.match(add);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return (x + y).toString();
    }
  }

  // Which of the following numbers is both a square and a cube: 3704, 4025, 705, 49, 2088, 1, 1728?
  const squareAndCube = new RegExp(
    /^Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)\?$/
  );

  if (squareAndCube.test(query)) {
    const match = query.match(squareAndCube);
    if (match) {
      const numbers = match.slice(1).map((n) => parseInt(n));
      for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (Math.sqrt(number) % 1 === 0 && Math.cbrt(number) % 1 === 0) {
          return number.toString();
        }
      }
    }

    return "";
  }

  // What is 36 multiplied by 83?
  const multiply = new RegExp(/^What is (\d+) multiplied by (\d+)\?$/);
  if (multiply.test(query)) {
    const match = query.match(multiply);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return (x * y).toString();
    }
  }

  // What is 23 plus 84 plus 43?
  const addMultiple = new RegExp(/^What is (\d+) plus (\d+) plus (\d+)\?$/);
  if (addMultiple.test(query)) {
    const match = query.match(addMultiple);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const z = parseInt(match[3]);
      return (x + y + z).toString();
    }
  }

  // What is 91 minus 40?
  const subtract = new RegExp(/^What is (\d+) minus (\d+)\?$/);
  if (subtract.test(query)) {
    const match = query.match(subtract);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return (x - y).toString();
    }
  }

  // Which of the following numbers are primes: 13, 69, 89, 28, 19?
  const primes = new RegExp(
    /^Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)\?$/
  );

  if (primes.test(query)) {
    const match = query.match(primes);
    if (match) {
      const numbers = match.slice(1).map((n) => parseInt(n));
      const primes = numbers.filter((n) => {
        if (n === 1) return false;
        if (n === 2) return true;
        for (let i = 2; i < n; i++) {
          if (n % i === 0) return false;
        }
        return true;
      });
      return primes.join(", ");
    }

    return "";
  }

  // What is 20 to the power of 92?
  const power = new RegExp(/^What is (\d+) to the power of (\d+)\?$/);
  if (power.test(query)) {
    const match = query.match(power);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return Math.pow(x, y).toString();
    }
  }

  return "";
}
