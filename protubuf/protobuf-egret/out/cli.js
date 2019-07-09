#! /usr/bin/env node


var command = process.argv[2];
var egretProject = process.argv[3];
if (!egretProject) {
    egretProject = '.';
}
require('./').run(command, egretProject);