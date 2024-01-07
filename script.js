function convertCurrency() {
  // Get the values from the form
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;

  // Make the fetch request to get the conversion rate
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      // Calculate the converted amount
      let conversionRate = data.rates[toCurrency];
      let convertedAmount = amount * conversionRate;

      // Create a new table row
      const row = document.createElement('tr');

      // Create table cells for the from currency, to currency, conversion rate, and converted amount
      const fromCurrencyCell = document.createElement('td');
      fromCurrencyCell.textContent = fromCurrency;
      row.appendChild(fromCurrencyCell);

      const toCurrencyCell = document.createElement('td');
      toCurrencyCell.textContent = toCurrency;
      row.appendChild(toCurrencyCell);

      const conversionRateCell = document.createElement('td');
      conversionRateCell.textContent = conversionRate;
      row.appendChild(conversionRateCell);

      const convertedAmountCell = document.createElement('td');
      convertedAmountCell.textContent = convertedAmount;
      row.appendChild(convertedAmountCell);

      // Append the new row to the table
      const table = document.getElementById('result');
      table.tBodies[0].appendChild(row);
    })
    .catch(error => {
      console.log('Error:', error);
      document.getElementById("result").innerHTML = `Error: ${error}`;
    });
}
  
// Call the convertCurrency function when the form is submitted
document.getElementById("convertForm").addEventListener("submit", function(event) {
  event.preventDefault();
  convertCurrency();
});



// Add a click event listener to the "Contact" link
var contactLink = document.getElementById('contact');
contactLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  var contactSection = document.getElementById('contacts');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});



