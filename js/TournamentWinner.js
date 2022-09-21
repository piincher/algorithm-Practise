// const HOME_TEAM_WON = 1;
// const POINTS = 3;
// function TournamentWinner(competitions, results) {
//   let bestTeam = "";
//   const scores = { [bestTeam]: 0 };
//   for (let i = 0; i < competitions.length; i++) {
//     const [homeTeam, awayTeam] = competitions[i];
//     const result = results[i];

//     const winninTEam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

//     updateScores(scores, winninTEam);

//     if (scores[winninTEam] > scores[bestTeam]) {
//       bestTeam = winninTEam;
//     }
//   }

//   return bestTeam;
// }
// console.log(
//   TournamentWinner(
//     [
//       ["HTML", "C#"],
//       ["C#", "Python"],
//       ["Python", "HTML"],
//     ],
//     [0, 0, 1]
//   )
// );
// function updateScores(scores, team) {
//   const prevScore = scores[team] || 0;
//   scores[team] = prevScore + POINTS;
// }

function TournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];

    const winninTEam = result === 1 ? homeTeam : awayTeam;

    const prevScore = scores[winninTEam] || 0;
    scores[winninTEam] = prevScore + 3;

    if (scores[winninTEam] > scores[currentBestTeam]) {
      currentBestTeam = winninTEam;
    }
  }

  return currentBestTeam;
}

console.log(
  TournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);

//  [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ]
