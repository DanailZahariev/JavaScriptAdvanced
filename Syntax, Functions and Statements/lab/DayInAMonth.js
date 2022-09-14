function dayInAMonth(month, year) {

    const daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth)
}

dayInAMonth(1, 2021)