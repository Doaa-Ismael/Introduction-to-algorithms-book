import bucketSort from "../index";

describe('Bucket Sort', () => {
    it('should sort correctly -1 ', () => {
        expect(bucketSort([0.1, 0.23, 0.12, 0.9, 0.4, 0.22])).toEqual([0.1, 0.12, 0.22, 0.23, 0.4, 0.9]);
    })
})
