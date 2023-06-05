const normalTable = document.querySelector(".container-normal-calculator").querySelector(".normal-calculator-table");

const trs = normalTable.querySelectorAll("tr");

trs.forEach((linha) => {
  const celulas = linha.querySelectorAll("td");

  celulas.forEach((tds) => {
    tds.addEventListener("click", () => {
      const lastChar = textArea.value.slice(-1);
      const operators = ["*", "+", "-", "/"];

      if (tds.classList.contains("number")) {
        textArea.value += tds.innerText;
      } else if (tds.classList.contains("mult")) {
        if (textArea.value && !operators.includes(lastChar)) {
          textArea.value += "*";
        }
      } else if (tds.classList.contains("div")) {
        if (textArea.value && !operators.includes(lastChar)) {
          textArea.value += "/";
        }
      } else if (tds.classList.contains("sub")) {
        if (textArea.value && !operators.includes(lastChar)) {
          textArea.value += "-";
        }
      } else if (tds.classList.contains("soma")) {
        if (textArea.value && !operators.includes(lastChar)) {
          textArea.value += "+";
        }
      } else if (tds.classList.contains("ac")) {
        textArea.value = "";
      } else if (tds.classList.contains("del")) {
        textArea.value = textArea.value.slice(0, -1);
      } else if (tds.classList.contains("virgula")) {
        if (isValidNumber(textArea.value)) {
          const lastNumber = getLastNumber(textArea.value);
          if (!lastNumber.includes(".")) {
            textArea.value += ".";
          }
        }
      } else if (tds.classList.contains("equal")) {
        if (!textArea.value) {
          window.alert("É necessário inserir uma expressão matemática válida");
          return;
        }
        const resultado = eval(textArea.value);
        textArea.value = formatResultado(resultado);
      }
    });
  });
});

const textArea = document.querySelector("textarea");
textArea.readOnly = true;

function getLastNumber(expression) {
  const numbers = expression.split(/[-+*/]/);
  return numbers[numbers.length - 1];
}

function isValidNumber(expression) {
  const lastChar = expression.slice(-1);
  const operators = ["*", "+", "-", "/"];
  return !(operators.includes(lastChar) || expression === "");
}

function formatResultado(resultado) {
  const num = parseFloat(resultado);
  return num % 1 !== 0 ? num.toFixed(1) : num.toString();
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
  const operators = ['/', '*', '-', '+', '.'];

  if (numbers.includes(Number(key))) {
    // Tecla pressionada é um número
    textArea.value += key;
  } else if (operators.includes(key)) {
    // Tecla pressionada é um operador
    const currentInput = textArea.value.trim();
    const lastChar = currentInput.charAt(currentInput.length - 1);

    // Verificar se o último caractere é um operador
    const isLastCharOperator = operators.includes(lastChar);

    if (currentInput.length === 0) {
      // Não é permitido começar com um operador
      return;
    }

    if (isLastCharOperator) {
      // Substituir o último operador pelo novo operador
      textArea.value = currentInput.slice(0, -1) + key;
    } else {
      // Adicionar o operador normalmente
      textArea.value += key;
    }
  } else if (event.keyCode === 13) {
    // Tecla pressionada é a tecla Enter (código de tecla 13)
    if (!textArea.value) {
      window.alert("É necessário inserir uma expressão matemática válida");
      return;
    }
    const resultado = eval(textArea.value);
    textArea.value = formatResultado(resultado);
  }

  // handleButtonPress(key)
});


