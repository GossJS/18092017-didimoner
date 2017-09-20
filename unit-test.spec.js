import {calc, kramer} from './helpers';

const testCalcValues = [
    {"value": [5, 2, '+'], "expected": 7},
    {"value": [5, -2, '+'], "expected": 3},
    {"value": [-5, -2, '+'], "expected": -7},
    
    {"value": [5, 2, '-'], "expected": 3},
    {"value": [-5, 2, '-'], "expected": -7},
    {"value": [-5, -2, '-'], "expected": -3},
    
    {"value": [5, 2, '*'], "expected": 10},
    {"value": [-5, 2, '*'], "expected": -10},
    {"value": [5, 0, '*'], "expected": 0},
    
    {"value": [4, 2, '/'], "expected": 2},
    {"value": [5, 2, '/'], "expected": 2.5},
    {"value": [5, 0, '/'], "expected": Infinity},
    
    {"value": [4, 2, '^'], "expected": 16},
    {"value": [5, 0, '^'], "expected": 1},
    {"value": [25, 0.5, '^'], "expected": 5},
];

describe('calc test', () => {
    for (const testValue of testCalcValues) {
        it(`${testValue.value[0]} ${testValue.value[2]} ${testValue.value[1]} should be ${testValue.expected}`, () => {
           expect(calc(...testValue.value)).toBe(testValue.expected);
        }) 
    }
});

const testKramerValues = [
    {"value": {a1:3, b1:2, c1:1, a2:1, b2:4, c2:-3}, "expected": "1 -1"},
    {"value": {a1:3, b1:2, c1:0, a2:1, b2:4, c2:5}, "expected": "-1 1.5"},
    {"value": {a1:-2, b1:1, c1:5, a2:3, b2:1, c2:1}, "expected": "-0.8 3.4"}
];

describe('kramer test', () => {
    for (const testValue of testKramerValues) {
        it(`Should be ${testValue.expected}`, () => {
           expect(kramer(testValue.value)).toBe(testValue.expected);
        }) 
    }
});
