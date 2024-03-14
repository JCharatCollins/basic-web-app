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

  const numbers = "Which of the following numbers is the largest:"

  if (query.toLowerCase().includes(numbers)) {
    const sub = query.toLowerCase().substring(numbers.length, query.length);
  
    const numList = sub.split(", ");
    const numArr = numList.map((num) => parseInt(num));
    const max = Math.max(...numArr);
    return max.toString();
  }

  return "";
}
