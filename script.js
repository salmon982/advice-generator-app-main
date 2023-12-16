const advices = ["Make yourself necessary and you will always be needed.", "Your thoughts are like boomerangs.", "You are more defined by what comes out of your mouth than what goes in it.", "The journey of your success will always begin with the small step of taking a chance.", "Your education is never complete.", "Don't allow the voice of your fears to be louder than the other voices in your head.", "A good reputation is more valuable than money.", "You never really lose until you stop trying.", "You get more by giving more.", " Rule your mind or it will rule you.", "Great heroes are truly humble.", "Defeat isn't bitter if you're smart enough not to swallow it.", "Your thoughts are powerful, make them positive.", "Forgiveness benefits two people--the giver and receiver.", "The word impossible contains its opposite: I'm possible.", "Preparation is a stepping stone to success.", "You are constantly creating your own reality.", "You are in control of your own heaven or hell.", "Envy consumes itself.", "You can become bitter or better as a result of your circumstances. ", "Those who seldom make mistakes seldom stumble upon new innovation.", "It's in losing yourself that you find yourself.", "When you're facing the right direction, all you need to do is keep walking.", "Be grateful every day, because that's the source of true power."];
let adviceId = document.querySelector('.id');
const quote = document.querySelector('.quote');
const diceButton = document.querySelector('.generator');
const divider = document.querySelector('.divider');

if (window.matchMedia('(min-width: 800px)').matches) {
  divider.src = './images/pattern-divider-desktop.svg';
}

diceButton.addEventListener('click', () => {
  let randomIndex = getRandomIndex(advices);
  quote.textContent = `"${advices[randomIndex]}"`;
  console.log(randomIndex, advices[randomIndex]);
  adviceId.textContent = `#${String(randomIndex + 1)}`;
})

function getRandomIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return randomIndex
}