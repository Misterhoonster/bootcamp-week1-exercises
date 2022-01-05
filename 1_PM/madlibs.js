/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const noun1 = "Bob";
const adj1 = "fluffy";
const place1 = "zoo";
const noun2 = "hippo";

const story = `
${noun1} went to the ${place1} today and met a ${adj1} ${noun2}!
`

console.log(story)
