export class Upload {
    key:string=""
    file:File
    url:string
    progress:number=0
    createdAt:Date=new Date()
    constructor(file:File){
        this.file= file
    }
}
