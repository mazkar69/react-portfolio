import { useState, useEffect } from "react"
import { createContext } from "react"
import { useContext } from 'react';
import { contextType, TrandingBlogPost } from "./type/Type";
import { AppProvideType } from "./type/Type";
import { FetchData } from './config/fetchData'

//Creting the context.
const MyContext = createContext<contextType>(null!);


const AppProvider = ({ children }: AppProvideType) => {

  const [isDark, setIsDark] = useState(false)

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [trandingPost, setTrandingPost] = useState<TrandingBlogPost>(null!);
  const [projects, setProjects] = useState<any>([]);
  const [data,setData] = useState<any>({})

  //It will fetch tranding BlogPost and save in state.
  useEffect(() => {
    const url = "/api/blogpost?sortBy=tranding";
    FetchData(url).then((data) => {
      setTrandingPost(data.response)
    }).catch((err) => {
      console.log(err)
    })

  }, [])


  //This will fetch the general news
  useEffect(() => {
    //Fetching the general details
    FetchData('/api/general').then((data) => {
      // console.log(data.response);
      setData(data.response);

    }).catch((err) => {
      console.log(err)
    })

  }, [])


  //This will fetch the Projects 
  useEffect(() => {
    //Fetching the general details
    FetchData('/api/project').then((data) => {
      // console.log(data.response);
      setProjects(data.response);

    }).catch((err) => {
      console.log(err)
    })

  }, [])




  return <MyContext.Provider value={{ isDark, setIsDark, isNavOpen, setIsNavOpen, trandingPost ,data,projects}}>{children}</MyContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(MyContext);
}
export default AppProvider;