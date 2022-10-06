function requestValidator(inputObject) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let validUri =  /^[\w.]+$/g;
    let validMessage = /^([^<>\\&'"]*)$/g;

    if (!validMethods.includes(inputObject.method) || !inputObject.hasOwnProperty('method')) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!validUri.test(inputObject.uri) || !inputObject.hasOwnProperty('uri')) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!validVersions.includes(inputObject.version) || !inputObject.hasOwnProperty('version')) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!validMessage.test(inputObject.message) || !inputObject.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return inputObject;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))

try {
    requestValidator({
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'
    });

} catch (e) {
    console.log(e.message)
}

try {
    requestValidator({
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    });

} catch (e) {
    console.log(e.message)
}