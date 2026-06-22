class Meal {
    constructor(
        private cost: number = 0.0,
        private takeOut: boolean = false,
        private main: string = "",
        private drink: string = ""
    ) {}

    getCost(): number {
        return this.cost;
    }

    getTakeOut(): boolean {
        return this.takeOut;
    }

    getMain(): string {
        return this.main;
    }

    getDrink(): string {
        return this.drink;
    }

    setCost(cost: number): void {
        this.cost = cost;
    }

    setTakeOut(takeOut: boolean): void {
        this.takeOut = takeOut;
    }

    setMain(main: string): void {
        this.main = main;
    }

    setDrink(drink: string): void {
        this.drink = drink;
    }
}

class MealBuilder {
    constructor(
    private meal = new Meal()
    ) {}

    /**
     * @param {number} cost
     * @return {MealBuilder}
     */
    addCost(cost: number): void {
        this.meal.setCost(cost)
    }

    /**
     * @param {boolean} takeOut
     * @return {MealBuilder}
     */
    addTakeOut(takeOut: boolean): void {
        this.meal.setTakeOut(takeOut)
    }

    /**
     * @param {string} main
     * @return {MealBuilder}
     */
    addMainCourse(main: string): void {
        this.meal.setMain(main)
    }

    /**
     * @param {string} drink
     * @return {MealBuilder}
     */
    addDrink(drink: string): void {
        this.meal.setDrink(drink)
    }

    /**
     * @return {Meal}
     */
    build(): Meal {
        return this.meal
    }
}
