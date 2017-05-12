function flatMap(arr, mapFunc) {
    const result = [];
    for (const [index, elem] of arr.entries()) {
        const x = mapFunc(elem, index, arr);
        if (Array.isArray(x)) {
            result.push(...x);
        } else {
            result.push(x);
        }
    }
    return result;
}
