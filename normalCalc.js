const normalTable = document.querySelector("table");
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
        textArea.value = parseFloat(resultado).toFixed(1) ;
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
