const Pb = require('./Person');

exports.getPb = function () {
    console.log('package', Pb.Person);
    return Pb.Person.personInfo;
}

exports.create = function () {

}