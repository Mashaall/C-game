class Player {
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
        this.rank = null
    }

    //reading the playerCount value from database
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val()
        })
    }

     //writing the playerCount value to database
     updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    //writing the player name and distance to database
    updateInfo(){
        database.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance,
        })
    }

    // read all the players information in 1 go
    static getPlayersInfo(){
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    }

     //reading the CarsAtEnd value from database
     getCarsAtEnd(){
        database.ref("CarsAtEnd").on("value", (data)=>{
            this.rank = data.val()
        })
    }

     //writing the CarsAtEnd value to database
     static updateCarsAtEnd(rank){
        database.ref("/").update({
            CarsAtEnd:rank
        })
    }
}