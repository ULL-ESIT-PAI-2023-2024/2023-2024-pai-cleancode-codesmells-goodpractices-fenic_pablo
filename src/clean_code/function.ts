/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jose Fenic Peiteado Padiila
 * @author Pablo Santana Gonzalez
 * @desc This Contains diferrents way for to better our develope function
 * @see {@link }
 * @license GNU General Public License, version 3 (GPL-3.0)
 * @see {@link https://opensource.org/licenses/GPL-3.0}
 */


/**
 * Check if a value is between two values
 * @param title Name of the menu
 * @param body content of the menu
 * @param buttonText text of the button
 * @param cancellable if the menu can be cancelled or not
 */
function createMenu(title: string, body: string, buttonText: string, cancellable: boolean) {
    // ...
}

createMenu('Foo', 'Bar', 'Baz', true);


/**
 * Check if a value is between two values
 * @param options object with the options of the menu
 */
function createMenu(options: { title: string, body: string, buttonText: string, cancellable: boolean }) {
}
  
// Option that is better, why is better?
// The code is more readable and the function is more flexible
type MenuOptions = { title: string, body: string, buttonText: string, cancellable: boolean };

/**
 * Check if a value is between two values
 * @param options object with the options of the menu
 */
function createMenu(options: MenuOptions) {
  // ...
}

// Function names should say what they do

function addToDate(date: Date, month: number): Date {
  // ...
}

const date = new Date();

// It's hard to tell from the function name what is added
addToDate(date, 1);

// Functions should only be one level of abstraction

// Don't use flags as function parameters

/**
 * create a file in the system 
 * @param name string with the name of the file
 * @param temp boolean if the file is temporary or not
 */
function createFile(name: string, temp: boolean) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

/**
 * create a file in the system temporary
 * @param name name of the file
 */
function createTempFile(name: string) {
  createFile(`./temp/${name}`);
}
 /**
  * create a file in the system
  * @param name name of the file
  */
function createFile(name: string) {
  fs.create(name);
}



// Dont use flags as function parameters

/**
 * Creates a file with a specified name and allows 
 * the option to mark it  as temporary or not.
 * @param name The name of the file.
 * @param temp A boolean flag indicating whether the file is temporary or not.
 */
function createFile(name: string, temp: boolean) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

/**
 * Create a file temporary file with the specified name
 * @param name The name of the temporary file
 */
function createTempFile(name: string) {
  createFile(`./temp/${name}`);
}

/**
 * Creates a file with the specified name
 * @param name The name of the file
 */
function createFile(name: string) {
  fs.create(name);
}


// Encapsulate conditionals

// Checks various situations to determine the course of action. However...
if (subscription.isTrial || account.balance > 0) {
  // ...
}


/**
 * Determines if a service can be activated based on the subscription and account status.
 * @param subscription The subscription object containing information about the subscription.
 * @param account The account object containing information about the user's account.
 * @returns A boolean value indicating whether the service can be activated.
 */
function canActivateService(subscription: Subscription, account: Account) {
  return subscription.isTrial || account.balance > 0;
}


if (canActivateService(subscription, account)) {
  // ...
}


// Avoid negative conditionals

// Avoid type checking

// TypeScript is a strict syntactical superset of JavaScript and adds optional 
// static type checking to the language. Always prefer to specify types of variables, 
// parameters and return values to leverage the full power of TypeScript features. 
// It makes refactoring more easier.

function travelToTexas(vehicle: Bicycle | Car) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(currentLocation, new Location('texas'));
  } else if (vehicle instanceof Car) {
    vehicle.drive(currentLocation, new Location('texas'));
  }
}

type Vehicle = Bicycle | Car;


function travelToTexas(vehicle: Vehicle) {
  vehicle.move(currentLocation, new Location('texas'));
}

