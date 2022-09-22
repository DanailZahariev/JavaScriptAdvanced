function createSortedList() {

    let result = [];

    return {
        add,
        remove,
        get,
        size: 0
    };

    function add(num) {
        result.push(num);
        this.size++;
        return result.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < result.length) {
            result.splice(index, 1);
            this.size--;
            return result.sort((a, b) => a - b);
        }
    }

    function get(index) {
        if (index >= 0 && index < result.length) {
            return result[index];
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));