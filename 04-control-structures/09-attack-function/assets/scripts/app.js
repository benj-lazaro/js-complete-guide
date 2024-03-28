// Define player's maximum attack points
const ATTACK_VALUE = 10;

// Define maximum life as well as the monster & player's health points (HP)
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Render update on health bar (monster's for now)
adjustHealthBars(chosenMaxLife);

// Define callback function that handles the player's attack
function attackHanlder() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

// Hookup attack button's event handler to corresponding callback function
attackBtn.addEventListener("click", attackHanlder);
