//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://hsiungwilliam:1451633@ds121014.mlab.com:21014/mongo', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyA1U_UgfvuYDj4nVCLAcMgb4orjvvmhF2k'
  },
  port: 8080
};