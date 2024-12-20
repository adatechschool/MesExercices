import { expect, test } from "vitest";
import { sayHello } from "./hello";

test("Cas de démarrage #1 - Dire bonjour avec un prénom", () => {
  expect(sayHello("Laïla")).toBe("Bonjour, Laïla !");
});

test("Cas d'erreur #2 - Dire bonjour avec un nombre", () => {
  expect(sayHello(42)).toBe("Erreur, entrez un prénom");
});

test("Cas d'erreur #3 - Dire bonjour avec un mot très long", () => {
  expect(sayHello("hsiuhusihqqcijhcjsdhbcuilhchjci")).toBe(
    "Erreur, entrez un prénom plus court"
  );
});

test("Cas de démarrage #4 - Dire bonjour avec null", () => {
  expect(sayHello()).toBe("Erreur, entrez un prénom");
});

test("Cas de démarrage #5 - Dire bonjour avec prénom et nom avec des espaces", () => {
  expect(sayHello("Alex Adeikalam")).toBe("Bonjour, Alex Adeikalam !");
});
