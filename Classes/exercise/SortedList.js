class List {

    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(Number(element));
        this.size = this.list.length;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index > this.list.length) {
            throw new Error("Index out of bounds");
        }

        this.list.splice(index, 1);
        this.size = this.list.length;
        this.list.sort((a, b) => a - b);
    }

    get(index) {
        if (index < 0 || index > this.list.length) {
            throw new Error("Index out of bounds");
        }
        return this.list[index];
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));