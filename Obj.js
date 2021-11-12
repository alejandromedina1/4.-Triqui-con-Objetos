class Obj{
    contructor(){
        this.x=x;
        this.y=y;
        this.letter=letter;
    }
   
    draw(letter, x, y){
        textSize(20);
        text(this.letter,this.x+100,this.y+100);
        textSize(12);
    }

    get getX(){
        return this.x;
    }
    set setX(px){
        this.x = px;
    }
    get getLetter(){
        return this.letter;
    }
    set setLetter(py){
        this.letter = pLetter;
    }
}