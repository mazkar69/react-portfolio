import styled from "styled-components"
import PostCard2 from "./PostCard2"
import { useGlobalContext } from "../../context"
import { FetchData } from "../../config/fetchData"
import { useState, useEffect, useRef } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { TrandingBlogPost } from "../../type/Type"





const Template = () => {
  const { isDark } = useGlobalContext();
  const [allPost,setAllPost] = useState<TrandingBlogPost>([])
  
  //We can use use ref so that the refrance can be update when the state change.
  const pg = useRef(0);
  
  const next = async()=>{
    pg.current += 1;
    // console.log(pg.current)
    const url = `/api/blogpost?pg=${pg.current}`

    const data = await FetchData(url);

    setAllPost([...allPost,...data.response])
  }

  useEffect(()=>{
    next();
  },[])

  // console.log(allPost);

  return (
    <Section className="section section-post" isDark={isDark}>
      <div className="container">
        <h2 className="common-heading">Latest Post</h2>
        <div className="posts">
          <InfiniteScroll
          className="scroll-component"
            dataLength={allPost?.length | 1}
            next={next}
            hasMore={true}
            loader={<h4>......</h4>}
          >
            {
              allPost?.map((post) => {
                return <PostCard2 key={post._id} post={post} />
              })
            }
            {/* <PostCard2 /> */}
          </InfiniteScroll>

        </div>
      </div>
    </Section>
  )
}

const Section = styled.section<{ isDark?: boolean }>`
    background-color: ${(props: { isDark?: boolean }) => {
    return !props.isDark ? "var(--bg)" : "var(--darkBg)";
  }};
    
    .common-heading,h3{
    color:${(props: { isDark?: boolean }) => {
    return !props.isDark ? "" : "white";
  }} !important;
}
.posts, .scroll-component{
  
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

`

export default Template