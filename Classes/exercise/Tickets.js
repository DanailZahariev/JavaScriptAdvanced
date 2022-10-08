function solve(inputArr, info) {

    class Tickets {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    inputArr.forEach(ticket => {
        let [destination, price, status] = ticket.split('|');
        tickets.push(new Tickets(destination, price, status));
    });

    return info === 'price' ? tickets.sort((a, b) => (a[info] - b[info]))
        : tickets.sort((a, b) => (a[info].localeCompare(b[info])));
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));