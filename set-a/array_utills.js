function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) result.push(array[i]);
  }
  return result;
}

function myReduce(array, callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

function myFlat(array, depth = 1) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      const flattened = myFlat(array[i], depth - 1);
      for (let j = 0; j < flattened.length; j++) result.push(flattened[j]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

function myDebounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function myThrottle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

// Tests
console.log("=== myMap ===");
console.log(myMap([1, 2, 3], (x) => x * 2)); // [2, 4, 6]

console.log("\n=== myFilter ===");
console.log(myFilter([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2, 4]

console.log("\n=== myReduce ===");
console.log(myReduce([1, 2, 3, 4], (acc, x) => acc + x, 0)); // 10
console.log(myReduce([5, 10, 15], (acc, x) => acc + x)); // 30 (no initial)

console.log("\n=== myFlat ===");
console.log(myFlat([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(myFlat([1, [2, [3, [4]]]], Infinity)); // [1, 2, 3, 4]

console.log("\n=== myDebounce (simulated) ===");
const debounced = myDebounce((msg) => console.log("Debounced:", msg), 300);
debounced("call 1");
debounced("call 2");
debounced("call 3"); // Only this one fires

console.log("\n=== myThrottle (simulated) ===");
const throttled = myThrottle((msg) => console.log("Throttled:", msg), 500);
throttled("call A"); // fires
throttled("call B"); // skipped (within 500ms)
setTimeout(() => throttled("call C"), 600); // fires (after 600ms)

module.exports = {
  myMap,
  myFilter,
  myReduce,
  myFlat,
  myDebounce,
  myThrottle,
};
