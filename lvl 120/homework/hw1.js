class OrderManager {
    constructor(activeOrders = new Map(), completedOrders = new Set()) {
        this.activeOrders = activeOrders;
        this.completedOrders = completedOrders;
    }

    printStatus() {
        const arr = [...this.activeOrders];
        console.log("=>> activeOrders =>>");
        arr.forEach(([orderId, customerName]) => {
            console.log(orderId, customerName);
        });

        console.log("\n=>> completedOrders =>>");
        console.log(...this.completedOrders);
        console.log('');
    }

    processOrder(orderId, customerName, callback) {
        this.activeOrders.set(orderId, customerName);
        console.log("შეკვეთა მიღებულია, შეკვეთის დასამუშავებლად საჭიროა 3 წამი");
        this.printStatus();

        setTimeout(() => {
            console.log(customerName);
            this.completedOrders.add(customerName);
            this.activeOrders.delete(orderId);
            callback(orderId);
            this.printStatus();
        }, 3000);
    }
}