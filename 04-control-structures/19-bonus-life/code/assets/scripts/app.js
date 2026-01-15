// Global scope constants & variables
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

// Initial rendering of the monster & player's health bars
adjustHealthBars(chosenMaxLife);

// Monster attacks player at the end of each round
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;

  // Monster attacks player
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  // Checks for "bonus life" & restores player's health (a bit)
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = "false";

    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert("You would be dead but the bonus life saved you!");
  }

  // Checks who wins the current round
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Player wins!");
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("Monster wins!");
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It is a draw!");
  }
}

// Player attack modes
function attackMonster(mode) {
  let maxDamage;

  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  } else if (mode === "STRONG_ATTACK") {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;

  endRound();
}

// Event handlers
function attackHandler() {
  attackMonster("ATTACK");
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}

function healPlayerHandler() {
  let healValue;

  // Prevents healing above the player's max life
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  // Heal the player's UI health bar
  increasePlayerHealth(healValue);

  // Heal the player's health value
  currentPlayerHealth += healValue;

  endRound();
}

// Link event listeners to their corresponding buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
