export default function memoize(fn, cache = new Map()) {

    console.log('Initializing memoization cache', cache);

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Returning cached result for args:', args);
            return cache.get(key);

        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        console.log('Caching result for args:', args, 'Result:', result);
        return result;
    };
}

