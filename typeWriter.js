let holder = document.querySelector(".container");

let skills = [
  "coder",
  "freelancer",
  "front end dev.",
  "fighter",
  "love challenges",
  "Instructor",
];

let wordIndex = 0;
let charecterIndex = 0;

getText();

function getText() {
  charecterIndex++;
  // in case of unique letters
  let exp  = /^(a|e|i|o|u)/ig
  let check = exp.test(skills[wordIndex])
  

  // in case of length of skill more than 1 but equal to 2
  let skillWords = true;
  let currSkill = skills[wordIndex];
  if (currSkill.split(" ").length == 2 || currSkill.split(" ").length > 3) {
    skillWords = !skillWords;
  }

  

  holder.innerHTML = `
    <h2 class="text">
    I ${skillWords ? "'m a" : ""}${check ? "n":""} 
    ${skills[wordIndex].slice(0, charecterIndex)}
    </h2>
    `;

  if (charecterIndex === skills[wordIndex].length) {
    wordIndex++;
    charecterIndex = 0;
  }

  if (wordIndex === skills.length) {
    wordIndex = 0;
  }

  setTimeout(getText, 150);
}
