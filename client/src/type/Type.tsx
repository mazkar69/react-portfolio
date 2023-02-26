export type contextType = {
    isDark:boolean,
    setIsDark:React.Dispatch<React.SetStateAction<boolean>>,
    isNavOpen:boolean,
    setIsNavOpen:React.Dispatch<React.SetStateAction<boolean>>,
    trandingPost:TrandingBlogPost,
    data:any,
    projects:any
}

export type AppProvideType = {
    children:React.ReactNode

}


// For uploadPost Form 
export type FormDataType = {
    title:string,
    slug:string,
    description:string,
    content:string,
    tags:string,
    sortBy:string,
    category:string,
    featuredImage:string,
}

//For single BlogPost 
export type PostType = {
    _id:string
    title:string,
    slug:string,
    description:string,
    content:string,
    tags:string[],
    sortBy:string[],
    featuredImage:string,
    category:string,
    views?:string,
    date?:any

}

// For SliderComponent in blog
export type SliderType = {
    posts:TrandingBlogPost,
    tag:string
} 


//For tranding BlogPost
export type TrandingBlogPost = PostType[]


// For Protected component 
export type ProtectedType = {
    children:React.ReactNode
}
