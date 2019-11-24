/**
 * Generates a random number between supplied min and max
 */

export default (min, max) => Math.floor(Math.random() * (max - min)) + min;