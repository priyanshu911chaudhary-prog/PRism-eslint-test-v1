// ============================================================
// PRism PROTOTYPE DEMO: ESLint Finding & Fix Workflow
// ============================================================

// ------------------------------------------------------------
// SCENARIO 1: Deterministic Autofixable Errors
// (These should be instantly fixed by the ESLint adapter)
// ------------------------------------------------------------

// 'no-unused-vars' (ESLint can often automatically strip these if they are unused)
const unusedString = "This should be deleted automatically";
const unusedNumber = 404;

function calculateDiscount(price) {
    const unusedTax = 0.05;
    return price * 0.90;
}

// ------------------------------------------------------------
// SCENARIO 2: AI Fallback Candidates
// (Errors that ESLint won't autofix, but the AI easily can)
// ------------------------------------------------------------

// 'no-var' / 'prefer-const' 
// AI will intelligently replace this with `let` or `const`
var userRole = "admin";
userRole = "superadmin";

// 'eqeqeq' (if configured without autofix) or basic syntax transformations
function compareValues(a, b) {
    if (a == b) {
        return "Match";
    }
    return "Mismatch";
}

// ------------------------------------------------------------
// SCENARIO 3: Unfixable Logic Errors (AI Abort Triggers)
// (AI will detect these are unsafe to fix and correctly abort)
// ------------------------------------------------------------

// 'no-constant-condition'
// AI should recognize fixing this requires changing business logic, which is unsafe.
function processCheckout(cart) {
    if (true) {
        console.log("Free shipping applied to everything!");
    }
    return cart;
}

// 'no-unreachable'
// AI should refuse to delete business logic just because it's unreachable.
function getUserData(userId) {
    return { id: userId, name: "Test User" };
    
    // This code is unreachable
    console.log("Fetching additional metadata...");
    return { error: "User not found" };
}

// ------------------------------------------------------------
// SCENARIO 4: Valid Code
// (These should remain untouched by the fix engine)
// ------------------------------------------------------------

function isValidUser(user) {
    if (user && user.role === "admin") {
        return true;
    }
    return false;
}

console.log(calculateDiscount(100));
console.log(compareValues(1, "1"));
console.log(processCheckout({ items: 2 }));
console.log(getUserData(123));
console.log(isValidUser({ role: "admin" }));
