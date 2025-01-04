export const validatePassword = (password) => {
    const validations = [
      { rule: /.{8,}/, description: "Minimum length of 8 characters" }, // Longitud mínima
      { rule: /[A-Za-z]/, description: "At least one letter" }, // Al menos una letra
      { rule: /[0-9]/, description: "At least one number" }, // Al menos un número
      { rule: /[^A-Za-z0-9]/, description: "At least one symbol" }, // Al menos un símbolo
    ];
  
    // Filtra las validaciones que cumplen
    const fulfilled = validations.filter(({ rule }) => rule.test(password));
    
    return fulfilled.length; // Devuelve el número de validaciones cumplidas
  };