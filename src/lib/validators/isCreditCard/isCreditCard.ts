import type { formStoreValueType } from '../../types'

export default function isCreditCard(field : string, store: formStoreValueType):formStoreValueType {
  // Remove all non-digit characters
  const sanitized = field.replace(/\D/g, '');
  // Check if the sanitized card number has the correct length
  if (sanitized.length < 13 || sanitized.length > 19) {
    store.errors[field]['isCreditCard'] = `Error: invalid Credit Card Number`
  } else {
    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized.charAt(i), 10);

      if (shouldDouble) {
          digit *= 2;
          if (digit > 9) {
              digit -= 9;
          }
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    // If the sum is a multiple of 10, the card number is valid
      if ((sum % 10) !== 0) {
        store.errors[field]['isCreditCard'] = `Error: invalid Credit Card Number`
      }
  }
  return store;
}
