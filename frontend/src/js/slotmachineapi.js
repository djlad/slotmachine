/*
    shuffle request 
    - takes in amount of credits, user token
    - gets back response that contains shuffle response (array of ints)
*/

class slotMachineAPI{

constructor(){
    this.MIN_CREDITS = 1;
    this.CURRENT_CREDITS = 10;
    this.CURRENT_TOKEN;
    this.url = "http://localhost:8000/slotmachineservices";
}

// logs the user in by validating credentials, then gens session token
loginUser(username,password){
    fetch(this.url+"/login",{
        method: 'GET'
        // body: JSON.stringify(username,password),
        // headers: {
        //     'Content-Type' : 'application/json'
        // }
    }).then((response) => response.json())
    .then((response) => {
        this.CURRENT_TOKEN = response;
        console.log(this.CURRENT_TOKEN);
    });
     // res should be a token
}

// returns num of credits current user has by looking up token in db
getCredits(){
    fetch(this.url,{
        method: 'POST',
        body: JSON.stringify(this.CURRENT_TOKEN),
        headers: {'Content-Type': 'application/json'}
    }).then((res)=> res.json())
    .then((res) => {
        this.CURRENT_CREDITS = res;
        console.log(this.CURRENT_CREDITS);
    });
     // sets current num of credits 
}

validCredits(){
    return this.MIN_CREDITS <= this.CURRENT_CREDITS;
}

getResults(callback){
    if(this.validCredits() && this.CURRENT_TOKEN){
      fetch(this.url+"/runslotmachine",{
        method: 'POST',
        body: JSON.stringify(this.CURRENT_TOKEN),
        headers: {'Content-Type': 'application/json'}
      }).then((res) => res.json())
      .then((res) => {
          console.log(res);
          return callback(res);
        });
      
    }
    else{
       console.log("Credits or token are invalid!");
       return callback(null); 
    } 
} 
}