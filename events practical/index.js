const DrinkMachine = require('./drink machine');
const PizzaShop = require('./pizza shop');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, toppings) => {
  console.log(`order placed for ${size} pizza with ${toppings}`);
  drinkMachine.serveDrink(size);
  pizzaShop.displayOrderNumber();
});

pizzaShop.order('large', 'tomato');
