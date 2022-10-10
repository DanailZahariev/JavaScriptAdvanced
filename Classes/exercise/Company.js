class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                employees: []
            }
        }

        this.departments[department].employees.push({
            name, salary, position
        });

        this.updateDepartment(this.departments[department], salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    updateDepartment(department, salary) {
        department.sumSalary += Number(salary);
        department.avgSalary = department.sumSalary / department.employees.length;
    }

    bestDepartment() {

        let bestDepartment = Object.entries(this.departments)
            .sort((depOne, depTwo) => {
                return depTwo.avgSalary - depOne.avgSalary;
            })[0];

        let sortEmployees = bestDepartment[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let result = `Best Department is: ${bestDepartment[0]}\n`;
        result += `Average salary: ${bestDepartment[1].avgSalary.toFixed(2)}\n`;

        for (let emp of sortEmployees) {
            result += `${emp.name} ${emp.salary} ${emp.position}\n`
        }

        return result.trim();
    }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());