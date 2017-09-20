import Zombie from 'zombie';

const testValues = [
    {"value": "/add/5/2", "expected": "7"},
    {"value": "/add/5/-2", "expected": "3"},
    {"value": "/add/-5/-2", "expected": "-7"},
    
    {"value": "/subtract/5/2", "expected": "3"},
    {"value": "/subtract/-5/2", "expected": "-7"},
    {"value": "/subtract/-5/-2", "expected": "-3"},
    
    {"value": "/multiply/5/2", "expected": "10"},
    {"value": "/multiply/-5/2", "expected": "-10"},
    {"value": "/multiply/5/0", "expected": "0"},
    
    {"value": "/divide/4/2", "expected": "2"},
    {"value": "/divide/5/2", "expected": "2.5"},
    {"value": "/divide/5/0", "expected": "Infinity"},
    
    {"value": "/pow/4/2", "expected": "16"},
    {"value": "/pow/5/0", "expected": "1"},
    {"value": "/pow/25/0.5", "expected": "1"},
    
    {"value": "/kramer/3/2/1/1/4/-3", "expected": "1 -1"},
    {"value": "/kramer/3/2/0/1/4/5", "expected": "-1 1.5"},
    {"value": "/kramer/-2/1/5/3/1/1", "expected": "-0.8 3.4"}
];
const appUrl = 'https://node-works-didimoner.c9users.io';

const browser = new Zombie();
const promisifiedChecker = url => new Promise(resolve => browser.visit(url, resolve));

for (const testVal of testValues) {
    it('should calculate this expression: ' + testVal.value, async () => {
        expect.assertions(1);
        
        await promisifiedChecker(appUrl + testVal.value)
            .then(() => {
                const response = browser.document.querySelector('body').textContent;
                
                expect(response).toEqual(testVal.expected);
            });
    })
    
}
