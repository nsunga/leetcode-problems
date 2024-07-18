// 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
 
// Constraints:

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // smallest possible number of bananas eaten per hour
    let leftpointer = 1;
    // The maximum number in piles is the bounding value that satisfies
    // eating all the piles in h hours. Any number past this value
    // arbitrarily eats the piles in h hours.
    let rightpointer = Math.max(...piles);
    // We know that we can finish eating the bananas at the
    // maximum number in piles
    let result = rightpointer;

    while (leftpointer <= rightpointer) {
        const bananasEatenPerHour = Math.floor((rightpointer + leftpointer)/2);
        let hoursTakenToFinishPiles = 0;

        for (const pile of piles) {
            hoursTakenToFinishPiles = hoursTakenToFinishPiles + Math.ceil(pile/bananasEatenPerHour);
        }

        if (hoursTakenToFinishPiles > h) {
            // We are not eating enough bananas to finish under h hours
            // Anything to the left of the midpoint would take longer
            // to finish
            leftpointer = bananasEatenPerHour + 1;
        } else {
            // We are finishing the bananas <= h hours
            // However, can we do better?
            // Anything to the right of the midpoint would yield
            // a faster time than currently
            result = Math.min(result, bananasEatenPerHour);
            rightpointer = bananasEatenPerHour - 1;
        }
    }

    return result;
};