const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Renders the health status bar of monster & player
adjustHealthBars(chosenMaxLife);

function attackHandler() {
  // For every player attack on the monster, the monster fights back
  const damage = dealMonsterDamage(ATTACK_VALUE);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

  currentMonsterHealth -= damage;
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Player wins!");
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("Monster wins!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It is a draw!");
  }
}

// Link event listeners to their corresponding buttons
attackBtn.addEventListener("click", attackHandler);
