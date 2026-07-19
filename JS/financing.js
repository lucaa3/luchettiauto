function installmentCalc() {
  let rawPrice = document.getElementById("price").value
  let rawAdvance = document.getElementById("advance").value
  let duration = parseInt(document.getElementById("duration").value)
  let resultElement = document.getElementById("installmentResult")

  resultElement.style.fontSize = "3.5rem"
  resultElement.style.color = "#fff"

  if (rawPrice.trim() === "") {
    resultElement.innerText = "€ 0,00"
    return
  }

  let price = parseFloat(rawPrice) || 0
  let advance = parseFloat(rawAdvance) || 0
  let financingCapital = price - advance

  // --- REAL WORLD VALIDATIONS ---

  // Rule A: Millionaire check
  if (price > 1000000) {
    resultElement.style.fontSize = "1.2rem"
    resultElement.style.color = "#dc3545"
    resultElement.innerText =
      "Importo troppo elevato. Contatta il nostro team per opzioni di finanziamento personalizzate."
    return
  }

  // Rule B: Advance too high
  if (price > 0 && advance >= price) {
    resultElement.style.fontSize = "1.2rem"
    resultElement.style.color = "#dc3545"
    resultElement.innerText =
      "L'anticipo non può superare o eguagliare il prezzo del veicolo."
    return
  }

  // Rule C: Minimum Finance Amount
  const importoMinimo = 1500
  if (financingCapital > 0 && financingCapital < importoMinimo) {
    resultElement.style.fontSize = "1.2rem"
    resultElement.style.color = "#dc3545"
    resultElement.innerText =
      "L'importo minimo finanziabile è di € " + importoMinimo + "."
    return
  }

  if (financingCapital <= 0) {
    resultElement.innerText = "€ 0,00"
    return
  }

  const annualRate = 6.9
  const monthlyRate = annualRate / 100 / 12

  const rata =
    (financingCapital * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -duration))

  const formattedRata = rata.toFixed(2).replace(".", ",")
  resultElement.innerText = "€ " + formattedRata
}

window.onload = installmentCalc
