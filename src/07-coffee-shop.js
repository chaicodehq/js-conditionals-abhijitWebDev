/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
 let basePrice;
 if(size === 'small') basePrice= 3;
 else if(size === 'medium') basePrice = 4;
 else if(size === 'large') basePrice = 5;
 else return -1;

 let typePrice;
 if(type === 'regular') typePrice = 0.00;
 else if(type === 'latte') typePrice = 1.00;
 else if(type === 'cappuccino') typePrice = 1.50;
 else if(type === 'mocha') typePrice = 2.00;
 else return -1;

 let total = typePrice + basePrice;
 if(extras.whippedCream) total = total + 0.50;
 if(extras.extraShot) total = total + 0.75;

return parseFloat(total.toFixed(2));  


}
