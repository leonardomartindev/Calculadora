const scientificTable = document.querySelector(".container-scientific-calculator").querySelector(".scientific-calculator-table");
const textarea = document.querySelector(".result-scientific")
const operators = ["-", "+","*","/","^",".","(",")"]
const lastChar = textarea.value.slice(-1)

const trsScientific = scientificTable.querySelectorAll("tr");

let resultado = "";

trsScientific.forEach((linha)=>{
    const tdsScientific = linha.querySelectorAll("td");
    tdsScientific.forEach((td)=>{
        if(td.classList.contains("number")) {
            td.addEventListener("click", ()=>{
                textarea.value += td.innerText
                resultado += td.innerText
            })
        }
        if(td.classList.contains("divide")) {
            td.addEventListener("click", ()=>{
                textarea.value += "/"
                resultado += "/"

            })
        }
        if(td.classList.contains("plus")) {
            td.addEventListener("click", ()=>{
                textarea.value += "+"
                resultado += "+"


            })
        }
        if(td.classList.contains("mult")) {
            td.addEventListener("click", ()=>{
                textarea.value += "x"
                resultado += "*"


            })
        }
        if(td.classList.contains("minus")) {
            td.addEventListener("click", ()=>{
                textarea.value += "-"
                resultado += "-"
            })
        }
        if(td.classList.contains("pi")) {
            td.addEventListener("click", ()=>{
                textarea.value += Math.PI
                resultado += td.innerText

            })
        }
        if(td.classList.contains("euler")) {
            td.addEventListener("click", ()=>{
                textarea.value += Math.E
                resultado += td.innerText

            })
        }
        if(td.classList.contains("clear")) {
            td.addEventListener("click", ()=>{
                textarea.value = ""
                resultado = ""
            })
        }
        if(td.classList.contains("del")) {
            td.addEventListener("click", ()=>{
                textarea.value = textarea.value.slice(0, -1);
                resultado = resultado.slice(0, -1);
            })
        }
        if(td.classList.contains("sup")) {
            td.addEventListener("click", ()=>{
                textarea.value += "^"
                resultado += "**"
            })
        }
        if(td.classList.contains("mod")) {
            td.addEventListener("click", ()=>{
                textarea.value += "mod"
                resultado += "%"
            })
        }
        if(td.classList.contains("exp")) {
            td.addEventListener("click", ()=>{
                textarea.value += ",e+"
                resultado += "*10**"
            })
        }
        if(td.classList.contains("module")) {
            td.addEventListener("click", ()=>{
                textarea.value = Math.abs(textarea.value)
                resultado = Math.abs(textarea.value)
            })
        }
        if(td.classList.contains("one")) {
            td.addEventListener("click", ()=>{
                textarea.value = 1/textarea.value
                resultado = 1/textarea.value
            })
        }
        if(td.classList.contains("squared")) {
            td.addEventListener("click", ()=>{
                textarea.value = textarea.value ** 2
            })
        }
        if(td.classList.contains("square-root")) {
            td.addEventListener("click", ()=>{
                textarea.value = Math.sqrt(textarea.value)
            })
        }
        if(td.classList.contains("factorial")) {
            td.addEventListener("click", ()=>{
                textarea.value = calcularFatorial(textarea.value)
            })
        }
        if(td.classList.contains("log")) {
            td.addEventListener("click", ()=>{
                textarea.value = Math.log(textarea.value)
            })
        }
        if(td.classList.contains("log-in")) {
            td.addEventListener("click", ()=>{
                textarea.value = Math.log(textarea.value).toFixed(2);
            })
        }
        if (td.classList.contains("plus-min")) {
            td.addEventListener("click", () => {
              // Verifica se a textarea começa com um número negativo
              if (textarea.value.startsWith("-")) {
                // Remove o sinal de negativo
                textarea.value = textarea.value.slice(1);
              } else {
                // Adiciona o sinal de negativo
                textarea.value = "-" + textarea.value;
              }
            });
          }
          if(td.classList.contains("equal-btn")) {
            td.addEventListener("click", ()=>{
                textarea.value = eval(resultado)
            })
        }
    })
})

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFatorial(numero - 1);
    }
  }
  
  
  
  