function solution(players, callings) {
  const rank = {};
  players.forEach((c, i) => (rank[c] = i));

  for (const winner of callings) {
    let winnerIndex = rank[winner];
    let loserIndex = winnerIndex - 1;

    rank[winner]--;
    rank[players[loserIndex]]++;

    players[winnerIndex] = players[loserIndex];
    players[loserIndex] = winner;
  }

  return players;
}
