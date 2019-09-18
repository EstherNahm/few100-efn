describe('declaring variables', () => {
    describe('using let', () => {
        it('declaring a variable with let', () => {
            let name;

            name = 'herro';

            expect(name).toBe('herro');
            expect(typeof (name)).toBe('string');

            name = 1137;

            expect(name).toBe(1137);
            expect(typeof (name)).toBe('number');
        });
        it('explicitly typing ', () => {
            let name: string | number;
            name = 'Esther';
            name = 123;
        });
        it('implicitly typed variables', () => {
            let name = 'esther';
            name = 'estherly';
            // name = 113;
        });

    });
    describe('constants', () => {
        it('has them and prefers them', () => {
            const pi = 3.1415;
            const friends = ['a', 'b', 'c'];
            friends[2] = 'd';

            const movie = { title: 'before sunrise', director: 'hawke' };
            movie.title = 'after sunrise';

            const age = 30;
            expect(age).toBe(30);
        });
    });
    describe('var and why it is evil and you should not use it.', () => {

        it('does not have block scope!', () => {

            const age = 22;

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var message;
                message = 'Old Enough';
            }

            expect(message).toBe('Old Enough');
        });
    });
    describe('literals', () => {
        it('has a bunch of numeric literals', () => {
            const n1 = 123;
            const n2 = 3.14;
            const bigNumber = 12_123_520;

            const hexNumber = 0xff;
            const binaryNumber = 0b101010101;
            const octalNumber = 0o567;

            let x: number;
            x = octalNumber;

            const pay = parseInt('42.83', 10);
            expect(pay).toBe(42);
            const pay2 = parseFloat('42.83');
            expect(pay2).toBe(42.83);
        });
        it('string literals', () => {

            const title = 'Jones';
            expect(title).toBe("Jones");
        });
        it('template strings', () => {
            const s1 = `Tacos`;
            expect(typeof (s1)).toBe('string');
            const story = `My life story -
            was good.
            forever happy.`;
            console.log(story);

            const name = 'Bob';
            const age = 49;
            const oldSkool = 'The name is ' + name + ' and the age is ' + age + ' yrs';
            const newSkool = `The name is ${name} and the age is ${age} yrs`;
            expect(newSkool).toBe(oldSkool);
        });
        it('has array literals', () => {
            const luckyNumbers = [9, 20, 108];
            expect(luckyNumbers[0]).toBe(9);
            luckyNumbers[999] = 50;

            expect(luckyNumbers[100]).toBeUndefined();

            let friends: string[];
            friends = ['Bill', 'Beth'];

            let someArray: (string | number)[];
            someArray = [99, 'dog', 42];

            let someArray2: Array<string | number>;
        });
        it('intro to tuples', () => {
            type SettingOption = 'log' | 'warn' | 'trace';
            type Setting = [boolean, SettingOption, SettingOption, SettingOption];

            let setting: Setting;

            setting = [true, 'log', 'warn', 'trace'];
            // setting = ['dog', false]; //won't compile
            const isSet = setting[0];
            const allowLog = setting[1];
        });
    });
    describe('function literals', () => {
        it('three different ways to declare a function - puls methods in a class we will do later', () => {

            // named function
            function add(a: number, b: number): number {
                return a + b;
            }
            // anonymous functions

            const subtract = function (a: number, b: number): number {
                return a - b;
            };

            const multiply = (a: number, b: number): number => a * b;

            const divide = (a: number, b: number): number => {
                if (b === 0) {
                    throw new Error('no!');
                } else {
                    return a / b;
                }
            };
            expect(add(10, 2)).toBe(12);
            expect(subtract(8, 2)).toBe(6);
            expect(multiply(2, 4)).toBe(8);
        });
    });
    describe('object literals', () => {
        it('has them', () => {
            type MPAARating = 'G' | 'PG' | 'PG-13' | 'R';
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
                MPAARating?: MPAARating;
                [key: string]: any;
            }

            const movie: Movie = {
                title: 'Thor Ragnorak',
                director: 'Taika Waititi',
                yearReleased: 2016
            };

            expect(movie.title).toBe('Thor Ragnorak');
            expect(movie['title']).toBe('Thor Ragnorak');

            movie.yearReleased = 2017;
            movie.MPAARating = 'PG-13';
            movie.cast = ['person 1', 'person 2'];
            movie.watched = true;
        });
        it('making a dictionary', () => {
            interface Vehicle {
                vin: string;
                make: string;
                model: string;
                year: number;
            }

            interface Dictionary<T> {
                [key: string]: T;
            }

            const myVehicles: Dictionary<Vehicle> = {
                '83989sjioe': {
                    vin: '83989sjioe',
                    make: 'Chevy',
                    model: 'Bolt',
                    year: 2018
                },
                xyzpdq: {
                    vin: 'xyzpdq',
                    make: 'Honda',
                    model: 'Pilot',
                    year: 2019
                }
            };

            expect(myVehicles['83989sjioe'].make).toBe('Chevy');
        });
        it('duck typing', () => {
            function doSomething(thing: { message: string }) {
                console.log(thing.message);
            }

            doSomething({ message: 'Call your mom' });

            const phoneCall = {
                from: 'Sue',
                time: 'AM',
                message: 'Call me back'
            };
            doSomething(phoneCall);
        });
    });
});


