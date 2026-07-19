function installmentCalc() {
  // 1. Get the raw text using YOUR English IDs
  let rawPrice = document.getElementById("price").value
  let rawAdvance = document.getElementById("advance").value
  let duration = parseInt(document.getElementById("duration").value)
  let resultElement = document.getElementById("installmentResult")

  // 2. Reset styling every time the function runs
  resultElement.style.fontSize = "3.5rem"
  resultElement.style.color = "#fff"

  // 3. Graceful 'Empty' State
  if (rawPrice.trim() === "") {
    resultElement.innerText = "€ 0,00"
    return
  }

  // Convert to numbers for math (fallback to 0 if they type something weird)
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

  // If there's nothing to finance
  if (financingCapital <= 0) {
    resultElement.innerText = "€ 0,00"
    return
  }

  // --- THE ACTUAL MATH ---
  const annualRate = 6.9
  const monthlyRate = annualRate / 100 / 12

  const rata =
    (financingCapital * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -duration))

  // Format and Display
  const formattedRata = rata.toFixed(2).replace(".", ",")
  resultElement.innerText = "€ " + formattedRata
}

// Run once on load to set the initial value
window.onload = installmentCalc
