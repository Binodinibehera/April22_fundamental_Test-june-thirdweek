const arr = [1, -5, 2, 10, -30, 29, 50];
const sumpositives = (arr = []) => {
    const ispositive = num => typeof num === 'number' && num > 0;
    const res = arr.reduce((acc, val) => {
        if (ispositive(val)) {
            acc += val;
        };
        return acc;
    }, 0);
    return res;
};
console.log(sumpositives(arr));