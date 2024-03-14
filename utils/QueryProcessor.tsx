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
    /Which of the following numbers is the largest: (\d+), (\d+), (\d+)/
  );

  if (numbers.test(query.toLowerCase())) {
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
  const add = new RegExp(/What is (\d+) plus (\d+)/);
  if (add.test(query.toLowerCase())) {
    console.log("add");
    const match = query.match(add);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return (x + y).toString();
    }
  }

  // Which of the following numbers is both a square and a cube: 3704, 4025, 705, 49, 2088, 1, 1728?
  const squareAndCube = new RegExp(
    /Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/
  );

  if (squareAndCube.test(query.toLowerCase())) {
    const match = query.match(squareAndCube);
    if (match) {
      const numbers = match.slice(1).map((n) => parseInt(n));
      for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (
          Math.sqrt(number) % 1 === 0 &&
          Math.cbrt(number) % 1 === 0
        ) {
          return number.toString();
        }
      }
    }

    return "";
  }

  return "";
}
