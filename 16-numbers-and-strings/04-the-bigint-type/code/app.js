// Unable to go beyond the MAX_SAFE_INTEGER value & rounds the result
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 100);

// Goes beyond the MAX_SAFE_INTEGER value
let largerNumber = 9007199254740991234234234n;
console.log(largerNumber);

largerNumber = -9007199254740991234234234n;
console.log(largerNumber);

// Perform calculations w/ fellow BigInt numbers ONLY
console.log(10n - 4n);

// Requires explicit conversion when working w/ other non-BigInt numbers
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));

// BigInt division does NOT return the remainder
console.log(5n / 2n); // Returns 2n instead of 2.5n
