/**
 *  Pig Latin is a way of altering English Words. The rules are as follows:
 *  If a word begins with a consonant, take the first consonant or consonant cluster,
 *    move it to the end of the word, and add ay to it.
 *  If a word begins with a vowel, just add way at the end.
 */
export default function translatePigLatin (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(str.charAt(0))) {
    return str + 'way'
  } else {
    let cluster = ''
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str.charAt(i))) {
        cluster = cluster.concat(str.charAt(i))
      } else {
        break
      }
    }

    return str.slice(cluster.length) + cluster + 'ay'
  }
}
