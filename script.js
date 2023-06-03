const normalTable = document.querySelector("table")
const trs = normalTable.querySelectorAll("tr")
const tdsNumber = document.querySelectorAll("number")
const numbers = [0,1,2,3,4,5,6,7,8,9]
// console.log(tdsNumber)

trs.forEach((linha)=>{
    const celulas = linha.querySelectorAll('td')
    
    celulas.forEach((tds) =>{
        if(tds.classList.contains("number")) {
            return tds.addEventListener("click", ()=>{
                textArea.value += tds.innerText
            })
        }
        if (tds.classList.contains("mult")) {
            return tds.addEventListener("click", () => {
              if (textArea.value) {
                const lastChar = textArea.value.slice(-1);
                if (lastChar !== "x" && lastChar !== "+" && lastChar !== "-" && lastChar !== "/") {
                  textArea.value += "*";
                }
              }
            });
          }
        if (tds.classList.contains("div")) {
            return tds.addEventListener("click", () => {
              if (textArea.value) {
                const lastChar = textArea.value.slice(-1);
                if (lastChar !== "x" && lastChar !== "+" && lastChar !== "-" && lastChar !== "/") {
                  textArea.value += "/";
                }
              }
            });
          }
          if (tds.classList.contains("sub")) {
            return tds.addEventListener("click", () => {
              if (textArea.value) {
                const lastChar = textArea.value.slice(-1);
                if (lastChar !== "x" && lastChar !== "+" && lastChar !== "-" && lastChar !== "/") {
                  textArea.value += "-";
                }
              }
            });
          }
          if (tds.classList.contains("soma")) {
            return tds.addEventListener("click", () => {
              if (textArea.value) {
                const lastChar = textArea.value.slice(-1);
                if (lastChar !== "x" && lastChar !== "+" && lastChar !== "-" && lastChar !== "/") {
                  textArea.value += "+";
                }
              }
            });
          }
        if(tds.classList.contains("ac")){
            return tds.addEventListener("click", ()=>{
                textArea.value = ""
            })
        }
        if(tds.classList.contains("del")){
            return tds.addEventListener("click", ()=>{
                textArea.value = textArea.value.slice(0, -1)
            })
        }
        if (tds.classList.contains("virgula")) {
            return tds.addEventListener("click", () => {
              if (!textArea.value) {
                textArea.value = "0";
              }
              const lastChar = textArea.value.slice(-1);
              if (
                lastChar !== "x" &&
                lastChar !== "+" &&
                lastChar !== "-" &&
                lastChar !== "/" &&
                lastChar !== "," &&
                !textArea.value.includes(",")
              ) {
                textArea.value += ",";
              }
            });
          }
          if(tds.classList.contains("equal")){
            return tds.addEventListener("click", ()=>{
                if(!textArea.value){
                    window.alert("É necessário inserir uma expressão matemática válida")
                    return
                }
                const resultado = eval(textArea.value)
                textArea.value = resultado
            })
        }
    })
})


const textArea = document.querySelector("textarea")
textArea.readOnly = true;
