function solve() {
    let proto = {};
    let instance = Object.create(proto);

    instance.extend = function (template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            }
            instance[key] = value;
        });
    }
    return instance;
}