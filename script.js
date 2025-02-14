// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    // Helper function to format a number as currency
    function formatCurrency(num) {
        return "$" + num.toFixed(2);
    }

    function recalculate() {
        console.log("Recalculate button clicked.");

        // Direct Labor Cost inputs
        const employeesPerMachine = parseFloat(document.getElementById("employeesPerMachine").value) || 0;
        const numMachines = parseFloat(document.getElementById("numMachines").value) || 0;
        const downtimeMinutes = parseFloat(document.getElementById("downtimeMinutes").value) || 0;
        const shiftsPerDay = parseFloat(document.getElementById("shiftsPerDay").value) || 0;
        const workingDays = parseFloat(document.getElementById("workingDays").value) || 0;
        const laborRate = parseFloat(document.getElementById("laborRate").value) || 0;

        // Calculate Direct Cost: (employees × machines × downtimeMinutes × shifts × days × (laborRate/60))
        const directCost = employeesPerMachine * numMachines * downtimeMinutes * shiftsPerDay * workingDays * (laborRate / 60);
        document.getElementById("directCostResult").textContent =
            "Direct cost of downtime (USD per year): " + formatCurrency(directCost);
        console.log("Direct cost calculated:", directCost);

        // Downtime Tracking inputs
        const trackingEmployees = parseFloat(document.getElementById("trackingEmployees").value) || 0;
        const annualDowntimeDB = parseFloat(document.getElementById("annualDowntimeDB").value) || 0;
        const reportMinutes = parseFloat(document.getElementById("reportMinutes").value) || 0;
        const trackingShiftsPerDay = parseFloat(document.getElementById("trackingShiftsPerDay").value) || 0;
        const trackingLaborRate = parseFloat(document.getElementById("trackingLaborRate").value) || 0;

        // Calculate Tracking Cost: (trackingEmployees × reportMinutes × trackingShifts × days × (trackingLaborRate/60))
        const trackingCost = trackingEmployees * reportMinutes * trackingShiftsPerDay * workingDays * (trackingLaborRate / 60);
        document.getElementById("trackingCostResult").textContent =
            "Cost of downtime tracking (USD per year): " + formatCurrency(trackingCost);
        console.log("Tracking cost calculated:", trackingCost);

        // Savings percentages to calculate for (10%, 20%, 30%, 50%, 75%)
        const savingPercentages = [0.10, 0.20, 0.30, 0.50, 0.75];
        savingPercentages.forEach(function (percent) {
            const machineDowntimeSavings = directCost * percent;
            const totalSavings = machineDowntimeSavings - trackingCost - annualDowntimeDB;
            const percentLabel = (percent * 100).toString().replace('.0', '');

            const machineCell = document.getElementById("saving" + percentLabel + "_machine");
            const totalCell = document.getElementById("saving" + percentLabel + "_total");

            if (machineCell) {
                machineCell.textContent = formatCurrency(machineDowntimeSavings);
            } else {
                console.error("Element saving" + percentLabel + "_machine not found.");
            }
            if (totalCell) {
                totalCell.textContent = formatCurrency(totalSavings);
            } else {
                console.error("Element saving" + percentLabel + "_total not found.");
            }
            console.log(`For ${percentLabel}%: Machine Savings = ${machineDowntimeSavings}, Total Savings = ${totalSavings}`);
        });
    }

    // Attach event listener to the Recalculate button
    const recalcButton = document.getElementById("recalculateBtn");
    if (recalcButton) {
        recalcButton.addEventListener("click", recalculate);
        console.log("Event listener attached to recalculate button.");
    } else {
        console.error("Recalculate button not found. Check your HTML element ID.");
    }

    // Initial calculation on page load
    recalculate();
});
