const scientificTable = document.querySelector(".container-scientific-calculator").querySelector(".scientific-calculator-table");
const textarea = document.querySelector(".result-scientific");
const operators = ["-", "+", "*", "/", "^", ".", "(", ")"];
const lastChar = textarea.value.slice(-1);

const trsScientific = scientificTable.querySelectorAll("tr");

let resultado = "";

const actions = {
  number: (td) => {
    textarea.value += td.innerText;
    resultado += td.innerText;
  },
  divide: () => {
    textarea.value += "/";
    resultado += "/";
  },
  plus: () => {
    if (!textarea.value) return;
    textarea.value += "+";
    resultado += "+";
  },
  mult: () => {
    if (!textarea.value) return;
    textarea.value += "x";
    resultado += "*";
  },
  minus: () => {
    if (!textarea.value) return;
    textarea.value += "-";
    resultado += "-";
  },
  pi: (td) => {
    textarea.value += Math.PI;
    resultado += td.innerText;
  },
  euler: (td) => {
    textarea.value += Math.E;
    resultado += td.innerText;
  },
  clear: () => {
    textarea.value = "";
    resultado = "";
  },
  del: () => {
    textarea.value = textarea.value.slice(0, -1);
    resultado = resultado.slice(0, -1);
  },
  sup: () => {
    if (!textarea.value) return;
    textarea.value += "^";
    resultado += "**";
  },
  mod: () => {
    if (!textarea.value) return;
    if (textarea.value[textarea.value.length - 1] === "d") return;
    textarea.value += "mod";
    resultado += "%";
  },
  exp: () => {
    if (!textarea.value) return;
    textarea.value += ",e+";
    resultado += "*10**";
  },
  module: () => {
    if (!textarea.value) return;
    textarea.value = Math.abs(textarea.value);
    resultado = Math.abs(textarea.value);
  },
  one: () => {
    if (!textarea.value) return;
    textarea.value = 1 / textarea.value;
    resultado = 1 / textarea.value;
  },
  squared: () => {
    textarea.value = textarea.value ** 2;
    resultado = textarea.value ** 2;
  },
  "square-root": () => {
    if (!textarea.value) return;
    textarea.value = Math.sqrt(textarea.value);
    resultado = Math.sqrt(textarea.value);
  },
  factorial: () => {
    if (!textarea.value) {
      textarea.value = 1;
    }
    textarea.value = calcularFatorial(textarea.value);
    resultado = calcularFatorial(textarea.value);
  },
  log: () => {
    if (!textarea.value) return;
    textarea.value = Math.log(textarea.value);
    resultado = Math.log(textarea.value);
  },
  "log-in": () => {
    if (!textarea.value) return;
    textarea.value = Math.log(textarea.value).toFixed(2);
    resultado = Math.log(textarea.value).toFixed(2);
  },
  "plus-min": () => {
    if (!textarea.value) return;
    if (textarea.value.startsWith("-")) {
      textarea.value = textarea.value.slice(1);
    } else {
      textarea.value = "-" + textarea.value;
    }
  },
  "equal-btn": () => {
    if(!textarea.value) return
    textarea.value = eval(resultado);
  },
  "ten-exp": () => {
    if (!textarea.value) return;
    textarea.value = 10 ** textarea.value;
  },
};

trsScientific.forEach((linha) => {
  const tdsScientific = linha.querySelectorAll("td");
  tdsScientific.forEach((td) => {
    for (const actionClass in actions) {
      if (td.classList.contains(actionClass)) {
        td.addEventListener("click", () => actions[actionClass](td));
        break;
      }
    }
  });
});

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}
textarea.readOnly = true;
