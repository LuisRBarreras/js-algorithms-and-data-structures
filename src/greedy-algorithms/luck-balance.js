/**
 * Luck Balance
 * Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests.
 * Initially, her luck balance is 0.
 * She believes in "saving luck", and wants to check her theory.
 * Each contest is described by two integers,
 * and :is the amount of luck associated with a contest.
 * If Lena wins the contest, her luck balance will decrease by ; if she loses it, her luck balance will increase by .
 * denotes the contest's importance rating.
 * It's equal to  if the contest is important, and it's equal to  if it's unimportant.
 * If Lena loses no more than  important contests,
 * what is the maximum amount of luck she can have after competing in all the preliminary contests?
 * This value may be negative.
 */
export default function luckBalance (k, contests) {
  const impContest = []; const noImpContest = []
  const sumFunc = (acc, a) => acc + a

  for (const [value, important] of contests) {
    if (important === 1) impContest.push(value)
    else noImpContest.push(value)
  }

  impContest.sort((a, b) => b - a)
  console.log(impContest)

  return noImpContest.reduce(sumFunc, 0) +
          impContest.slice(0, k).reduce(sumFunc, 0) -
          impContest.slice(k).reduce(sumFunc, 0)
}
