class Car {
    static getSpecs(car) {
        return console.log(
            `Max speed: ${car.maxSpeed}, speed: ${car.speed} ${car.isOn}, distance: ${car.distance} price: ${car.price}`,
        );
    }

    constructor(maxSpeed, price) {
        this.$price = price;
        this.maxSpeed = maxSpeed;
        this.distance = 0;
        this.speed = 0;
        this.isOn = false;
    }
    get price() {
        return this.$price;
    }
    set price(price) {
        this.$price = price;
        return this.price;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            this.speed += value;
        }
    }

    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        }
    }

    drive(hours) {
        if (this.turnOn) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car(200, 2000);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
