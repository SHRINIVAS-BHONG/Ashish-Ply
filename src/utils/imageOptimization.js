/**
 * High-Performance Image Optimization Engine using Data Structures & Algorithms:
 * 1. LRU Cache (Least Recently Used) - O(1) cache access & memory eviction for decoded image assets.
 * 2. Priority Queue - Prioritized asynchronous image prefetch scheduler with bounded concurrency.
 * 3. Set-based Deduping - Prevents duplicate network downloads.
 */

// ==========================================
// 1. LRU (Least Recently Used) Cache - O(1)
// ==========================================
export class ImageLRUCache {
    constructor(capacity = 50) {
        this.capacity = capacity;
        this.cache = new Map(); // JavaScript Map preserves insertion order for O(1) LRU eviction
    }

    get(url) {
        if (!this.cache.has(url)) return null;
        // Move accessed key to the end to mark as most recently used
        const img = this.cache.get(url);
        this.cache.delete(url);
        this.cache.set(url, img);
        return img;
    }

    set(url, img) {
        if (this.cache.has(url)) {
            this.cache.delete(url);
        } else if (this.cache.size >= this.capacity) {
            // Evict least recently used (first item in Map)
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        this.cache.set(url, img);
    }

    has(url) {
        return this.cache.has(url);
    }
}

export const globalImageCache = new ImageLRUCache(60);

// ==========================================
// 2. Priority Queue & Concurrency Scheduler
// ==========================================
class PriorityPrefetchQueue {
    constructor(concurrency = 4) {
        this.concurrency = concurrency;
        this.running = 0;
        this.highQueue = [];
        this.lowQueue = [];
        this.pendingUrls = new Set();
    }

    enqueue(url, isHighPriority = false) {
        if (!url || globalImageCache.has(url) || this.pendingUrls.has(url)) {
            return;
        }

        this.pendingUrls.add(url);
        if (isHighPriority) {
            this.highQueue.unshift(url);
        } else {
            this.lowQueue.push(url);
        }

        this.processNext();
    }

    processNext() {
        if (this.running >= this.concurrency) return;

        const nextUrl = this.highQueue.shift() || this.lowQueue.shift();
        if (!nextUrl) return;

        this.running++;

        const img = new Image();
        img.decoding = 'async';
        img.src = nextUrl;

        img.onload = () => {
            globalImageCache.set(nextUrl, img);
            this.pendingUrls.delete(nextUrl);
            this.running--;
            this.processNext();
        };

        img.onerror = () => {
            this.pendingUrls.delete(nextUrl);
            this.running--;
            this.processNext();
        };
    }
}

export const prefetchScheduler = new PriorityPrefetchQueue(4);

/**
 * Preloads a list of image URLs with priority flag
 */
export function prefetchImages(urls, isHighPriority = false) {
    if (!Array.isArray(urls)) return;
    for (const url of urls) {
        if (url) prefetchScheduler.enqueue(url, isHighPriority);
    }
}
