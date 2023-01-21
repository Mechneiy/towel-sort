
module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const result = matrix.map((el, index, mas) => {
        return index % 2 !== 0 ? mas[index].reverse() : mas[index];
    });

    return result.flat();
};
