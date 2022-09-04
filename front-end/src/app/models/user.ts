export interface User {
    _id?:string
    name:string 
    email:string 
    password:string 
    status?:boolean
    age?:number
    userImage?:string
    tokens?:[
        {
            _id:string
            token:string
        }
    ]
    createdAt?:Date
    updatedAt?:Date

}
