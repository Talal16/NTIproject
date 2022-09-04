export interface User {
    _id?:string
    title:string
    description:string
    courseImg?:string
    chapters?:[
        {
            sectionTitle:string
            sectionLink:string
            sectionimg:string
            sectionDescription:string
            
        }
    ]
    createdAt?:Date
    updatedAt?:Date

}