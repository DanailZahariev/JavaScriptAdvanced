function addAndRemoveElements(commands) {

    let initialValue = 1;
    let arr = [];

    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === 'add') {
            arr.push(initialValue);

        } else if (commands[i] === 'remove') {
            arr.pop();
        }
        initialValue++;
    }
    if (arr.length === 0) {
        console.log('Empty');
        return;
    }
    for (const element of arr) {
        console.log(element);
    }
}


addAndRemoveElements(['add',
    'add',
    'add',
    'add'])

addAndRemoveElements(['remove',
    'remove',
    'remove'])

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])