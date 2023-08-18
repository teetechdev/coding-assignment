function getHandScore(input: string): number {
  const cards: string[] = input.split(" ");
  const suits: { [key: string]: number } = { S: 0, C: 0, H: 0, D: 0 };

  
  for (const card of cards) {
    const suit: string = card[0];
    const value: string = card.substring(1);

    if (value === "A") {
      suits[suit] += 11;
    } else if (["K", "Q", "J"].includes(value)) {
      suits[suit] += 10;
    } else {
      suits[suit] += parseInt(value, 10);
    }
  }

  // Find the max score among suits
  const maxScore: number = Math.max(...Object.values(suits));

  // Special case: if there are three cards of the same rank
  if (
    cards[0].substring(1) === cards[1].substring(1) &&
    cards[1].substring(1) === cards[2].substring(1)
  ) {
    if (cards[0].substring(1) === "A") {
      return 35;
    }
    return 32.5;
  }

  return maxScore;
}

console.log(`Hand: S8 S10 CA Score: ${getHandScore("S8 S10 CA")}`);
console.log(`Hand: SA HA CA Score: ${getHandScore("SA HA CA")}`);
console.log(`Hand: S2 D2 C2 Score: ${getHandScore("S2 D2 C2")}`);