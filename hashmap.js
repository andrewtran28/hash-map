class HashMap {
    constructor() {
        this.size = 0;
        this.bucketCapacity = 16;
        this.buckets = new Array(this.bucketCapacity).fill(null).map(() => []);
        this.loadFactor = 0.75;
    }
    
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i));
        }
        return hashCode % this.buckets.length;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (var i = 0; i < bucket.length; i++) {
            const [bucket_key] = bucket[i];
            if (bucket_key === key) {
                bucket[i] = [key, value];
                return;
            }
        }
        
        bucket.push([key, value]);
        this.size++;

        if (this.size / this.buckets.length > this.loadFactor) {
            this.grow();
        }
    }

    grow() {
        const newBuckets = new Array(this.buckets.length * 2)
            .fill(null)
            .map(() => []);
        this.buckets.forEach((bucket) => {
            bucket.forEach(([key, value]) => {
            const index = this.hash(key) % newBuckets.length;
            newBuckets[index].push([key, value]);
        });
      });
      this.buckets = newBuckets;        
    }

    get(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (var i  = 0; i < bucket.length; i++) {
            const [bucket_key, bucket_value] = bucket[i];
            if (bucket_key === key) {
                return bucket_value;
            }
        }
        return null;
    }

    has(key) {
        if (this.get(key)) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        let index = this.hash(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            const [bucketKey] = bucket[i];
            if (bucketKey === key) {
              bucket.splice(i, 1);
              this.size--;
              return true;
            }
          }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.bucketCapacity).fill(null).map(() => []);
        this.size = 0;
    }

    keys() {
        const keyArray = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach(([key]) => {
                keyArray.push(key);
            });
        });

        return keyArray;
    }

    values() {
        const valueArray = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach(([ ,value]) => {
                valueArray.push(value);
            });
        });

        return valueArray;
    }

    entries() {
        const entryArray = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach (([key, value]) => {
                entryArray.push ([key, value]);
            });
        });

        return entryArray;
    }
}

export { HashMap };