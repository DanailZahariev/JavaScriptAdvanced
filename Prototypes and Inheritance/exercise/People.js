function solve() {

    class Employee {

        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot make instance of abstract class Employee');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.task = [];
        }

        work() {
            let currentTask = this.task.shift();
            console.log(this.name + ' ' + currentTask);
            this.task.push(currentTask);
        }

        getSalary() {
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.task.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {

        constructor(name, age) {
            super(name, age);
            this.task.push('is working on a complicated task.');
            this.task.push('is taking time off work.');
            this.task.push('is supervising junior workers.');
        }
    }

    class Manager extends Employee {

        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.task.push('scheduled a meeting.');
            this.task.push('is preparing a quarterly report.');
        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }

    return {Employee, Junior, Senior, Manager};
}