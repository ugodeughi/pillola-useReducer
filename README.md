# Gestione Avanzata dello Stato con useReducer

## Introduzione
Quando lo stato in un componente React diventa complesso, `useState` può risultare difficile da gestire.  
`useReducer` offre un'alternativa strutturata, simile a Redux, per mantenere il codice organizzato.

---

## 📌 Cos'è useReducer?
`useReducer` gestisce lo stato basandosi su:
1. Uno **stato iniziale**.
2. Un **reducer** che gestisce le azioni.
3. La funzione `dispatch()` per aggiornare lo stato.

Ecco un esempio pratico:

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Azione non riconosciuta");
  }
}

function ContatoreAvanzato() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Conteggio: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>➕</button>
      <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
    </div>
  );
}

export default ContatoreAvanzato;
```

---

## 🎯 Quando usare useReducer?
✅ Stati complessi con più proprietà interdipendenti.  
✅ Quando `useState` diventa difficile da gestire.  
✅ Per centralizzare la logica di aggiornamento dello stato.  

🔥 **Tip Avanzato**: Per uno stato globale senza Redux, combina `useReducer` con `useContext`!

---

## 📌 Risorse Utili
- [Documentazione ufficiale React](https://react.dev/)
- [Guida approfondita a useReducer](https://react.dev/reference/react/useReducer)

🚀 **Seguimi per altre Pillole di Web Dev!** 🚀

