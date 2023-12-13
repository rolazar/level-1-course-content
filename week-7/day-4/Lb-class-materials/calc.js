document.addEventListener('DOMContentLoaded', (event) => {
  // Function to calculate the total cost
  function calculateCost(event) {
    event.preventDefault(); // Prevent default form submission

    // Costs per square foot for different roof types
    const costPerSquareFoot = {
      shingles: 5,
      metal: 10,
      tile: 15,
    };

    // Additional disposal cost
    const disposalCost = document.getElementById('disposal').checked ? 500 : 0;

    // Get selected roof type and roof area
    const roofType = document.getElementById('roofType').value;
    const area = parseFloat(document.getElementById('area').value);

    // Calculate the total cost
    let totalCost = costPerSquareFoot[roofType] * area + disposalCost;

    // Update the DOM with the calculated cost
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
  }

  // Attaching the event listener to the form
  document
    .getElementById('roofingCalculator')
    .addEventListener('submit', calculateCost);
});
