class Singleton {
    /**
     * In JavaScript consider this method as the 'getInstance'
     */
    private value: string;
    private static instance: Singleton;
    
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }
        Singleton.instance = this;
    }

    /**
     * @return {string}
     */
    getValue(): string {
        return this.value
    }

    /**
     * @param {string} value
     * @return {void}
     */
    setValue(value: string): void {
        this.value = value
    }
}
