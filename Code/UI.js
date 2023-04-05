export class UI{
    constructor(game){
        this.game = game
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
        this.livesImage = document.getElementById('lives')
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 2;         // text styling
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign ='Left';
        context.fillStyle = this.game.fontColor;
        //score
        context.fillText('score: ' + this.game.score,20,50);
        //timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' +(this.game.time*0.001).toFixed(1),20,80);
        //lives image
        for(let i=0;i<this.game.lives;i++){
            context.drawImage(this.livesImage,20 *i+20,95,25,25)
        }
       
        //game Over
        if(this.game.gameOver){
            context.textAlign = 'center';
            if(this.game.score > this.game.winningScore){
                context.font = this.fontSize*2 + 'px ' + this.fontFamily;
            context.fillText('You won', this.game.width * 0.5,this.game.height*0.5 -20);

            context.font = this.fontSize*0.8 + 'px ' + this.fontFamily;
            context.fillText('Boo-yah...', this.game.width * 0.5,this.game.height*0.5+20);
            }
            else{
                context.font = this.fontSize*2 + 'px ' + this.fontFamily;
            context.fillText('You Loose', this.game.width * 0.5,this.game.height*0.5 -20);

            context.font = this.fontSize*0.8 + 'px ' + this.fontFamily;
            context.fillText('Play again ?', this.game.width * 0.5,this.game.height*0.5+20);
            }
            
        }
        context.restore();
    }
}