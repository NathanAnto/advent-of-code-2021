import { depths } from './inputs/day1_input';

/**
 * As the submarine drops below the surface of the ocean,
 * it automatically performs a sonar sweep of the nearby
 * sea floor. On a small screen, the sonar sweep report
 * (your puzzle input) appears: each line is a measurement
 * of the sea floor depth as the sweep looks further and
 * further away from the submarine.
 * 
 * @returns Increased count
 */

export const part1 = async () => {
    let increasedCount = 0;

    for(let i = 1; i <= depths.length; i++) {
        if(depths[i] > depths[i-1])
            increasedCount++;
    }

    return increasedCount;
}

/**
 * Your goal now is to count the number of times the sum of
 * measurements in this sliding window increases from the
 * previous sum. So, compare A with B, then compare B with C,
 * then C with D, and so on. Stop when there aren't enough
 * measurements left to create a new three-measurement sum.
 * 
 * @returns Increased count
 */
export const part2 = async () => {
    let increasedCount = 0;
    let measurementCount = 3;
    
    let prevSum = 0;
    let currSum = 0;

    for (let i = 0; i < depths.length; i++) {
        for (let j = 0; j < measurementCount; j++) {
            currSum += depths[i+j];
        }

        if(currSum > prevSum && prevSum != 0)
            increasedCount++;

        prevSum = currSum;
        currSum = 0;
    }

    return increasedCount;
}