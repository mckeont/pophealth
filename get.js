var https = require('https');
var fs = require('fs');
var args = process.argv.slice(2);
var tables = ['SEMS_ACTIVE_SITES','TRI_FACILITY']
var getZip = function(zipcode,table) {
    var file = fs.createWriteStream('tmp/'+ table + '_' + zipcode + ".csv");
    var baseURL = 'https://iaspub.epa.gov/enviro/efservice/'
    var request = https.get(baseURL + "/" + table + "/zip_code/"+zipcode+"/CSV", function(response) {
        response.pipe(file);
    });
}
for (i in args) {
    for (j in tables) {
        getZip(args[i],tables[j]);
    }
}
