class Game {
    constructor(){

    }

    //reading the gameState value from database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }

     //writing the gameState value to database
     updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player
            player.getCount()
            form = new Form
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        car1.addImage(Car1)
        car2.addImage(Car2)
        car3.addImage(Car3)
        car4.addImage(Car4)
        cars=[car1,car2,car3,car4]
    }

    play(){
       form.input.hide()
       form.title.hide()
       form.button.hide()
       form.greeting.hide()
       Player.getPlayersInfo()
       if(players!==undefined){
       image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
       var index=0
       var x=195
       var y
       for(var i in players){
           index++
           x+=225
           y=height-players[i].distance
           cars[index-1].x = x
           cars[index-1].y = y
           if(index===player.index){
                fill("blue")
                ellipse(x,y,60)
               camera.position.x = width/2
               camera.position.y = cars[index-1].y
           }
       }
       }
       player.getCarsAtEnd()
       if(player.distance>4100){
           player.rank+=1
           Player.updateCarsAtEnd(player.rank)
           gameState = 2
       }
       
       if(keyDown("up")&&player.index!==null ){
           player.distance+=10
           player.updateInfo()
       }
       
       drawSprites()
    }

    end(){
        console.log("GameOver")
        console.log(player.rank)
    }
}