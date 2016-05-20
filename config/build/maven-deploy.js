var maven = require('maven-deploy');

var config = {
    "groupId"      : "de.gedoplan.knowhow",    // required - the Maven group id.
    "artifactId"   : "{name}",         // the Maven artifact id.
    "buildDir"     : "dist",           // project build directory.
    "finalName"    : "{name}",         // the final name of the file created when the built project is packaged.
    "type"         : "war",            // type of package. "war" or "jar" supported.
    "fileEncoding" : "utf-8"           // file encoding when traversing the file system, default is UTF-8
};

maven.config(config);
maven.install();