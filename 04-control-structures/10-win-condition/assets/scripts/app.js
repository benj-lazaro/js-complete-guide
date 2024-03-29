// Define player's maximum attack points
const ATTACK_VALUE = 10;

// Define monster's maximum attack points
const MONSTER_ATTACK_VALUE = 14;

// Define maximum life as well as the monster & player's health points (HP)
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Render update on health bar (monster's for now)
adjustHealthBars(chosenMaxLife);

// Attack function
function attackHandler() {
  // Player attacks
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

  // Monster attacks back
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  // Check player's win condition
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Monster won!");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
}

// Hookup attack button's event handler to corresponding callback function
attackBtn.addEventListener("click", attackHandler);
