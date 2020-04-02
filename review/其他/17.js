// var name = 'window'

// function Person(name) {
//     this.name = name;
//     this.show1 = function() {
//         console.log(this.name)
//     }
//     this.show2 = () => console.log(this.name)
//     this.show3 = function() {
//         return function() {
//             console.log(this.name)
//         }
//     }
//     this.show4 = function() {
//         return () => console.log(this.name)
//     }
// }

// var personA = new Person('personA')
// var personB = new Person('personB')

// personA.show1()
// personA.show1.call(personB)

// personA.show2()
// personA.show2.call(personB)

// personA.show3()()
// personA.show3().call(personB)
// personA.show3.call(personB)()

// personA.show4()()
// personA.show4().call(personB)
// personA.show4.call(personB)()
var num = 1;
var myObject = {
    num: 2,
    add: function() {
        this.num = 3;
        (function() {
            console.log(this.num);
            this.num = 4;
        })();
        console.log(this.num);
    },
    sub: function() {
        console.log(this.num)
    },
};

myObject.add();
// console.log(myObject.num);
// console.log(num);
var sub = myObject.sub;
sub();