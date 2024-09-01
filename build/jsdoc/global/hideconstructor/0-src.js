/**
 * Waffle iron singleton.
 */
class WaffleIron {
    instance = null;

    /**
     * Create the waffle iron.
     *
     * @hideconstructor
     */
    constructor() {
        if (instance) {
            return instance;
        }

        /**
         * Cook a waffle.
         *
         * @param {Batter} batter - The waffle batter.
         * @return {Waffle} The cooked waffle.
         */
        this.cook = function(batter) {};

        this.instance = this;
    }

    /**
     * Get the WaffleIron instance.
     *
     * @return {WaffleIron} The WaffleIron instance.
     */
    getInstance() {
        return new WaffleIron();
    }
}
