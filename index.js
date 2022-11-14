class Message{
    constructor(authorName,text){
    this.authorName=authorName;
    this.text=text;
    
    this.time=new Date();
}
toString() {
    return `${this.time.getHours()}:${this.time.getMinutes()} ${this.authorName}${this.text}`
 }
}

class Messenger extends Message{
    constructor(authorName,text){
        super(authorName,text)
        this.getValues=[]
        
    }
    send(author,text){
        this.authorName=author;
        this.text=text;
        this.getValues.push(`${this.time.getHours()}:${this.time.getMinutes()} ${this.authorName}${this.text}`)
    }
    show_history(){
        this.getValues.forEach(item=>{
            console.log(item);
        })
    }
}

let messenger = new Messenger()
messenger.send('Adil', ' Salam')
messenger.send('Məryəm', ' Salam')
messenger.show_history()



