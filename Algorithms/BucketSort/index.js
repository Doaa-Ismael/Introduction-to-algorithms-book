const bucketSort = (array) => {
    const buckets = new Array(10).fill(0).map(() => [])
    array.forEach(num => {
        const index = Math.floor(num * 10);;
        buckets[index].push(num);
    })
    return buckets.map(bucket => bucket.sort()).flat();
}

export default bucketSort;

