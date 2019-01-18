# Cheack-Online-or-Offline-app-in-react-native
How to check online or offline app in react-native ?


## Last issue solve
```
 (async () => {
          try {
         let status = await utils.getNetwork();
         if(!stauts){
          this.dropdown.alertWithType(
        "info",
        "OH!!",
        "Sorry You're Not Connected to the Internet"
      );
         }
           } catch (err) {
            console.log(err);
          }
        })();
        ```
##        utils.js file
```
        getNetwork() {
    return new Promise(resolve => {
          resolve(isNetwork);
    });
  }
  ```
