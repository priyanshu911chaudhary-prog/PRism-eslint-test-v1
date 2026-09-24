const SHIPPING_RATE = 15.00;

function processOrder(orderId, items, customerId) {
    debugger; 

    if (items === null) {
        throw new Error("No items in order");
    }

    var totalCost = 0;
    var unusedDiscountCode = "SUMMER2025"; 
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        
        if (item.price === NaN) {
            console.log("Invalid price detected");
            continue;
        }

        totalCost += item.price;
    }
    
    var totalCost = totalCost + SHIPPING_RATE;

    var taxRate = 0.08;
    var finalAmount = totalCost + (totalCost * taxRate);

    logger.info("Order processed", { orderId, finalAmount });

    return {
        id: orderId,
        amount: finalAmount,
        status: "PROCESSED",
        processedAt: new Date()
    };
}

module.exports = { processOrder };
