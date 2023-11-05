const {Circle, Triangle, Square} = require('../lib/shapes');

describe ('shapes.js', () => {
    // Test for Circle class
    describe('Circle', () => {
        it('should make a new triangle', () => {
            const html = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ray</text>
        </svg>`
            const circle = new Circle('ray', red, blue)
            expect(shape.render()).toEqual(html);
        })
    });

    // Test for Triangle class
    describe('Triangle', () => {
        it('should make a new triangle', () => {
            const html = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ray</text>
        </svg>`
            const circle = new Triangle('ray', red, blue)
            expect(shape.render()).toEqual(html);
        })
    });

    // Test for Square class
    describe('Square', () => {
        it('should make a new triangle', () => {
            const html = `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ray</text>
        </svg>`
            const circle = new Square('ray', red, blue)
            expect(shape.render()).toEqual(html);
        })
    });
})