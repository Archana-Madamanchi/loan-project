document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showStep(2);
});

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showStep(3);
});

document.getElementById('kycForm').addEventListener('submit', function(event) {
    event.preventDefault();
    showStep(4);
});

function showStep(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(function(step) {
        step.classList.remove('active');
    });
    document.getElementById('step' + stepNumber).classList.add('active');
}

function validateDirectExpenses() {
    const wages = parseFloat(document.getElementById('wages').value);
    const stock = parseFloat(document.getElementById('stock').value);
    const purchases = parseFloat(document.getElementById('purchases').value);
    const carriage = parseFloat(document.getElementById('carriage').value);

    const totalDirect = wages + stock + purchases + carriage;
    const minDirect = 40000; // Change the validation threshold as required
    const directErrorDiv = document.getElementById('direct-expenses-error');

    if (totalDirect < minDirect) {
        directErrorDiv.textContent = "Direct expenses should be at least " + minDirect + ". Your total is " + totalDirect + ".";
    } else {
        directErrorDiv.textContent = "";
        alert("Direct expenses validated successfully!");
    }
}

function validateIndirectExpenses() {
    const salaries = parseFloat(document.getElementById('salaries').value);
    const repairs = parseFloat(document.getElementById('repairs').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const badDebts = parseFloat(document.getElementById('badDebts').value);

    const totalIndirect = salaries + repairs + rent + badDebts;
    const minIndirect = 19000; // Change the validation threshold as required
    const indirectErrorDiv = document.getElementById('indirect-expenses-error');

    if (totalIndirect < minIndirect) {
        indirectErrorDiv.textContent = "Indirect expenses should be at least " + minIndirect + ". Your total is " + totalIndirect + ".";
    } else {
        indirectErrorDiv.textContent = "";
        alert("Indirect expenses validated successfully!");
    }
}

function validateLiabilities() {
    const creditors = parseFloat(document.getElementById('creditors').value);
    const capital = parseFloat(document.getElementById('capital').value);
    const billsPayable = parseFloat(document.getElementById('billsPayable').value);

    const totalLiabilities = creditors + capital + billsPayable;
    const minLiabilities = 230000; // Change the validation threshold as required
    const liabilitiesErrorDiv = document.getElementById('liabilities-error');

    if (totalLiabilities < minLiabilities) {
        liabilitiesErrorDiv.textContent = "Liabilities should be at least " + minLiabilities + ". Your total is " + totalLiabilities + ".";
    } else {
        liabilitiesErrorDiv.textContent = "";
        alert("Liabilities validated successfully!");
    }
}

function validateAssets() {
    const debtors = parseFloat(document.getElementById('debtors').value);
    const cash = parseFloat(document.getElementById('cash').value);
    const land = parseFloat(document.getElementById('land').value);

    const totalAssets = debtors + cash + land;
    const minAssets = 60000; // Change the validation threshold as required
    const assetsErrorDiv = document.getElementById('assets-error');

    if (totalAssets < minAssets) {
        assetsErrorDiv.textContent = "Assets should be at least " + minAssets + ". Your total is " + totalAssets + ".";
    } else {
        assetsErrorDiv.textContent = "";
        alert("Assets validated successfully!");
    }
}
