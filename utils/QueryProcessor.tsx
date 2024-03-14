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

  // Regex for which of the following numbers is the largest
  const numbers = "which of the following numbers is the largest: ";

  if (query.toLowerCase().includes(numbers.toLowerCase())) {
    const sub = query.toLowerCase().substring(numbers.length, query.length);
    const numList = sub.split(", ");
    const numArr = numList.map((num) => parseInt(num));
    const max = Math.max(...numArr);
    return max.toString();
  }

  // Regex for what is x + y
  const add = /what is (\d+) plus (\d+)/;
  if (add.test(query)) {
    const match = query.match(add);
    if (match) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      return (x + y).toString();
    }
  }

  return "";
}
