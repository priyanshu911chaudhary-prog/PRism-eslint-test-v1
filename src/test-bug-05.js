const SHIPPING_RATE = 15.00;

function processOrder(orderId, items) {
    

    if (items === null) {
        throw new Error("No items in order");
    }

    var totalCost = 0;
     
    
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        
        if (Number.isNaN(item.price)) {
            console.log("Invalid price detected");
            continue;
        }

        totalCost += item.price;
    }
    
    totalCost = totalCost + SHIPPING_RATE;

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
