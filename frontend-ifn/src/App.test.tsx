import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("App Component Tests", () => {
  // Verifică titlul aplicației
  test("renderează titlul aplicației", () => {
    render(<App />);
    const titleElement = screen.getByText(
      /Bine ați venit la panoul de control Frontend IFN!/i
    );
    expect(titleElement).toBeInTheDocument();
  });

  // Verifică prezența butoanelor
  test("renderează butoanele de exemplu", () => {
    render(<App />);
    const primaryButton = screen.getByText(/Adaugă \(Primary\)/i);
    const secondaryButton = screen.getByText(/Secundar/i);
    const accentButton = screen.getByText(/Accent/i);
    const tertiaryButton = screen.getByText(/Tertiar/i);
    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
    expect(accentButton).toBeInTheDocument();
    expect(tertiaryButton).toBeInTheDocument();
  });

  // Verifică elementele de tipografie
  test("renderează elementele de tipografie", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
    const paragraph = screen.getByText(/Acesta este un paragraf de text/i);
    expect(paragraph).toBeInTheDocument();
  });

  // Verifică prezența listelor
  test("renderează listele", () => {
    render(<App />);
    const unorderedList = screen.getByRole("list", {
      name: /listă neordonată/i,
    });
    const orderedList = screen.getByRole("list", { name: /listă ordonată/i });
    expect(unorderedList).toBeInTheDocument();
    expect(orderedList).toBeInTheDocument();
  });

  // Verifică prezența formularului
  test("renderează formularul", () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/Nume:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const messageTextarea = screen.getByLabelText(/Mesaj:/i);
    const submitButton = screen.getByRole("button", { name: /Trimite/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  // Verifică clasele utilitare
  test("renderează elementele cu clase utilitare", () => {
    render(<App />);
    const centeredText = screen.getByText(/Text centrat/i);
    const rightAlignedText = screen.getByText(/Text aliniat la dreapta/i);
    const spacedElement = screen.getByText(/Spațiere sus și jos/i);
    expect(centeredText).toHaveClass("text-center");
    expect(rightAlignedText).toHaveClass("text-right");
    expect(spacedElement).toHaveClass("mt-3");
    expect(spacedElement).toHaveClass("mb-3");
  });

  // Verifică interacțiunea cu butonul
  test("butonul de adăugare afișează un mesaj în consolă când este apăsat", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<App />);
    const addButton = screen.getByText(/Adaugă \(Primary\)/i);
    fireEvent.click(addButton);
    expect(consoleSpy).toHaveBeenCalledWith("Butonul Adaugă a fost apăsat");
    consoleSpy.mockRestore();
  });

  // Verifică layout-ul general
  test("renderează layout-ul principal", () => {
    render(<App />);
    const layoutElement = screen.getByTestId("layout");
    expect(layoutElement).toBeInTheDocument();
  });

  // Verifică responsivitatea (acest test este mai complex și poate necesita ajustări)
  test("aplică stiluri responsive", async () => {
    render(<App />);
    // Acest test ar putea necesita o bibliotecă suplimentară pentru a simula diferite dimensiuni de ecran
    // și pentru a verifica stilurile aplicate
  });
});
