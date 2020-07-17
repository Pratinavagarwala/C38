class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("PLAY");

        this.greet=createElement("h5");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        
        this.input.position(130,160);

        this.button.position(200,200);

        this.button.mousePressed(()=>{
                this.input.hide();
                this.button.hide();

                player.name=this.input.value();

                playerCount++;
                player.index=playerCount;
                player.update();
                player.updateCount(playerCount);

                greet.html("Welcome " +player.name);
                greet.position(130,160);
                }
        )
    }
}