function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  let n = completion.length;

  for (let i = 0; i < n; i++) {
      if (participant[i] !== completion[i]) {
          return participant[i]; 
      }
  }

  return participant[n];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //
