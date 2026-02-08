/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  // Check for non-string input or empty string
  if (typeof password !== 'string' || password === '') {
    return 'weak';
  }
  
  let criteriaMet = 0;
  
  // Criterion 1: At least 8 characters long
  if (password.length >= 8) {
    criteriaMet++;
  }
  
  // Criterion 2: Contains at least one uppercase letter (A-Z)
  if (/[A-Z]/.test(password)) {
    criteriaMet++;
  }
  
  // Criterion 3: Contains at least one lowercase letter (a-z)
  if (/[a-z]/.test(password)) {
    criteriaMet++;
  }
  
  // Criterion 4: Contains at least one number (0-9)
  if (/[0-9]/.test(password)) {
    criteriaMet++;
  }
  
  // Criterion 5: Contains at least one special character
  // Special chars: !@#$%^&*()_+-=[]{}|;:,.<>?
  if (/[!@#$%^&*()_+\-=[\]{}|;:,.<>?]/.test(password)) {
    criteriaMet++;
  }
  
  // Determine strength level based on criteria met
  if (criteriaMet <= 1) {
    return 'weak';
  } else if (criteriaMet >= 2 && criteriaMet <= 3) {
    return 'medium';
  } else if (criteriaMet === 4) {
    return 'strong';
  } else {  // criteriaMet === 5
    return 'very strong';
  }
}
