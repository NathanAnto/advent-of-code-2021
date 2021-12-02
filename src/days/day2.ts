import { inputs } from './inputs';

/**
 * Now, you need to figure out how to pilot this thing.
 * It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:
 * *  forward X increases the horizontal position by X units.
 * *  down X increases the depth by X units.
 * *  up X decreases the depth by X units.
 * Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.
 * 
 *  @returns horizontal * depth
*/
export const part1 = async () => {
    let horizontal = 0;
    let depth = 0;

    inputs.forEach((dir: string) => {
        let count = Number(dir.substring(dir.length - 1, dir.length));

        if(dir.startsWith('forward')) {
            horizontal += count;
        }
        else if(dir.startsWith('down')) {
            depth += count;
        }        
        else if(dir.startsWith('up')) {
            depth -= count;
        }
    });
    return horizontal * depth;
}

/**
 * Based on your calculations, the planned course doesn't seem to
 * make any sense.You find the submarine manual and discover that
 * the process is actually slightly more complicated.
 * 
 *  @returns horizontal * depth
 */
export const part2 = async () => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    
    inputs.forEach((dir: string) => {
        let count = Number(dir.substring(dir.length - 1, dir.length));

        if(dir.startsWith('forward')) {
            horizontal += count;
            depth += aim*count;
        }
        else if(dir.startsWith('down')) {
            aim += count;
        }        
        else if(dir.startsWith('up')) {
            aim -= count;
        }
    });
    return horizontal * depth;
}