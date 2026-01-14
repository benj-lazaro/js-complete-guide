const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

// Renders the health status bar of monster & player
adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage;

  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  // For every attack of the player, the monster fights back in return
  const damage = dealMonsterDamage(maxDamage);
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

// Event handlers
function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

// Link event listeners to their corresponding buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
