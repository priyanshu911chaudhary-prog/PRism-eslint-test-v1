// ============================================================
// PRism PROTOTYPE DEMO: ESLint Finding & Fix Workflow (Test 3)
// ============================================================

// ------------------------------------------------------------
// SCENARIO 1: Deterministic Autofixable Errors
// ------------------------------------------------------------

// 'no-unused-vars' (ESLint autofix)
const unusedMultiplier = 100;

function calculateScore(points, multiplier) {
    const unusedMax = 999;
    return points * multiplier;
}

// ------------------------------------------------------------
// SCENARIO 2: AI Fallback Candidates
// ------------------------------------------------------------

// 'eqeqeq' (Use strict equality) - AI should fix this to `===`
function isSpecialUser(role) {
    if (role == "admin") {
        return true;
    }
    return false;
}

// 'no-undef' or 'prefer-const' 
// `globalCounter` is not declared. AI should add `let globalCounter = 0;` or change it.
function incrementCounter() {
    globalCounter = globalCounter ? globalCounter + 1 : 1;
    return globalCounter;
}

// 'no-dupe-keys'
// AI should intelligently remove the duplicate key or merge them.
const userProfile = {
    name: "John Doe",
    age: 30,
    role: "user",
    age: 31 // duplicate key
};

// ------------------------------------------------------------
// SCENARIO 3: Unfixable Logic Errors (AI Abort Triggers)
// ------------------------------------------------------------

// 'no-unreachable'
// AI should abort rather than indiscriminately deleting code after the return.
function calculateTaxes(income) {
    const baseTax = income * 0.15;
    return baseTax;
    
    // Unreachable logic that might be important but is accidentally orphaned
    if (income > 100000) {
        return baseTax + (income - 100000) * 0.05;
    }
}

// 'no-constant-condition'
function processRefund(amount) {
    if (false) {
        console.log("Processing manual override for refund:", amount);
    }
    return true;
}

// ------------------------------------------------------------
// SCENARIO 4: Valid Code
// ------------------------------------------------------------

function isValidTransaction(tx) {
    if (tx && tx.amount > 0 && tx.currency === "USD") {
        return true;
    }
    return false;
}

console.log(calculateScore(50, 2));
console.log(isSpecialUser("admin"));
console.log(incrementCounter());
console.log(userProfile);
console.log(calculateTaxes(150000));
console.log(processRefund(50));
console.log(isValidTransaction({ amount: 100, currency: "USD" }));
