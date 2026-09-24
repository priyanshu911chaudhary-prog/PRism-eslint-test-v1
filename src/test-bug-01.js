// ============================================================
// PRism FINAL ESLint PROTOTYPE TEST
// ============================================================

// 1. Multiple deterministic no-unused-vars fixes

const unusedTopLevel = "REMOVE_ME";
const anotherUnusedTopLevel = 123;

function calculateTotal(price, quantity) {
    const unusedDiscount = 10;
    const unusedTax = 18;

    return price * quantity;
}


// 2. More deterministic fixes inside functions

function greetUser(name) {
    const unusedGreeting = "Hello";
    const unusedPrefix = "User:";

    return "Welcome " + name;
}


function processUser(user) {
    const unusedStatus = "active";
    const unusedRole = "admin";

    return user;
}


// 3. Non-fixable no-constant-condition

function processData() {
    if (true) {
        console.log("This condition is always true");
    }

    return "done";
}


// 4. Non-fixable no-unreachable
// This is intentionally useful for testing AI fallback.

function calculateSomething(value) {
    const result = value * 2;

    return result;

    console.log("This code is unreachable");
}


// 5. Another non-fixable issue for AI fallback

function validateUser(user) {
    if (false) {
        console.log("This branch can never execute");
    }

    return user;
}


// 6. AI fallback candidate

const finalUnusedValue = "AI_FIX_TEST";


// 7. Multiple deterministic findings later in the same file

function prepareData(data) {
    const unusedConfig = {
        debug: true,
    };

    const unusedMetadata = {
        source: "test",
    };

    return data;
}


// 8. Valid code
// These lines should remain untouched.

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculateTotal(10, 20));
console.log(greetUser("Priyanshu"));
console.log(processUser("admin"));
console.log(processData());
console.log(calculateSomething(10));
console.log(validateUser("test"));
console.log(prepareData({ id: 1 }));
console.log(add(5, 10));
console.log(multiply(5, 10));