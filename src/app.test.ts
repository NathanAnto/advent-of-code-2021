import * as day1 from './days/day1';
import * as day2 from './days/day2';

describe('Day 1 tests', () => {
    test('Part 1', (done) => {
        day1.part1().then(res => {
            expect(res).toBe(1688);
            done();
        }).catch(e => {
            throw e;
        });
    });
    test('Part 2', (done) => {
        day1.part2().then(res => {
            expect(res).toBe(1728);
            done();
        }).catch(e => {
            throw e;
        });
    });
});

describe('Day 2 tests', () => {

    test('Part 1', (done) => {
        day2.part1().then(res => {
            expect(res).toBe(1484118);
            done();
        }).catch(e => {
            throw e;
        });

    });

    test('Part 2', (done) => {
        day2.part2().then(res => {
            expect(res).toBe(1463827010);
            done();
        }).catch(e => {
            throw e;
        });
    });
});