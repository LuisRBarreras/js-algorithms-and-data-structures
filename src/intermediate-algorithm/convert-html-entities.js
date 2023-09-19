/**
 *
 * Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 */
export default function convertHTML (str) {
  const dictionary = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  }

  return str.split('').map(letter => {
    if (dictionary[letter]) {
      return dictionary[letter]
    } else {
      return letter
    }
  }).join('')
}
