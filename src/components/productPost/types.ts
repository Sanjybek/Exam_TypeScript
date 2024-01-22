import { SubmitHandler } from "react-hook-form";

type  postsProduct  =  {
    title: string
    description: string
    price: string
    id?: number
}
type values = {
    title: string
    description: string
    price: string
    
}
export type  postsProps = {
    onSubmit: SubmitHandler<postsProduct>
    handleAddPhotoClick: () => void
    values?: values
    image?: string
} 

