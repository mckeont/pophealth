var https = require('https');
var fs = require('fs');
var getZip = function(zipcode) {
var file = fs.createWriteStream(zipcode + ".csv");
var baseURL = 'https://iaspub.epa.gov/enviro/efservice/'
var request = https.get(baseURL + "/tri_facility/zip_code/"+zipcode+"/tri_reporting_form/CSV", function(response) {
  response.pipe(file);
});
}
getZip('19125');
