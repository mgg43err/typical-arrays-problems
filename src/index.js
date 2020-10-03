exports.min = function min(array = [0]) {
    const t = array.reduce((min, current) => min = current < min ? min = current : min = min, 0);
    return t;
}

exports.max = function max(array = [0]) {
    const t = array.reduce((max, current) => max = current > max ? max = current : max = max, 0);
    return t;
}

exports.avg = function avg(array = [0]) {
    const total = array.reduce((total, current) => total = total + current, 0);
    const totalIndexes = array.length;
    if (isNaN(total / totalIndexes)) {
        return 0;
    } else {
        return total / totalIndexes;
    }
}