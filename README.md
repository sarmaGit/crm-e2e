# crm-E2E-tests
requires nodejs latest stable
for windows users requires latest java-SDK

###insert in /credentials/userCredentials.js
```
module.exports = {
    login: 'valid_login',
    password: 'valid_password'
};
```

###insert in /credentials/projectConstants.js
```
var site = {};
site.url ='srm url';
module.exports = site;
```

###do not use npm install 
