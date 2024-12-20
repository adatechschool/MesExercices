const sayHello = (name) => {
  if (typeof name != "string" || name == null) {
    return `Erreur, entrez un prénom`;
  }

  if (name.length > 15) {
    return `Erreur, entrez un prénom plus court`;
  }

  return `Bonjour, ${name} !`;
};

module.exports = { sayHello };
