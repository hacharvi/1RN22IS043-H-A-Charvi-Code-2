class AverageController {
    calculateAverage(numbers: number[]): number {
        if (numbers.length === 0) {
            throw new Error("Array must not be empty");
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }
}

export default AverageController;