import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { FetchData } from "../config/fetchData";
import { PostType } from "../type/Type";
import { useGlobalContext } from "../context";
import styled from "styled-components";


const BlogPost = () => {

  const [post, setPost] = useState<PostType>(null!);
  const { slug } = useParams();
  const { isDark } = useGlobalContext();

  useEffect(() => {
    const url = `/api/blogpost/${slug}`

    FetchData(url).then((data) => {
      setPost(data.response)
    }).catch((err) => { console.log(err) })

  }, [slug])

  // console.log(post)

  return (
    <Section className="section" isDark={isDark}>
      <div className="container">
        <div className="data">
          <h1>{post?.title}</h1>
        </div>

        <picture>

          <div className="info">
            <span className='tag'>{post?.category}</span>
            <span>By: AzKaaR</span>
            <span>6/11/2001</span>
          </div>
          <img src={post?.featuredImage} alt="" />
        </picture>

        <div className="content">

          <p className="para" dangerouslySetInnerHTML={{ __html: post?.content }}>
            {/* {post?.content} */}
          </p>

        </div>

        {/* Pending Task.....  */}
        <div className="popularPost">
          {/* <h1 className="common-heading">Popular Posts</h1> */}

        </div>
      </div>
    </Section>
  )
}

const Section = styled.section<{ isDark?: boolean }>`

    background-color: ${(props: { isDark?: boolean }) => {
    return !props.isDark ? "var(--bg)" : "var(--darkBg)";
  }};

.common-heading,h3,h1,h2,p,span,a{
    color:${(props: { isDark?: boolean }) => {
    return !props.isDark ? "" : "white";
  }} !important;
}

a{
  text-decoration: underline;
  color: var(--para);
}


.container{
  display: flex;
  max-width: 110rem;
  flex-direction: column;
  text-align: center;
  padding: 5rem;
  justify-content: center;
  gap: 3rem;

  picture{
    width: 60%;
    text-align: center;
    margin: auto;
    img{
      width: 100%;
    }
  }
}
.info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .tag{
        background-color: #26a79d;
        color: white;
        padding: 2px 5px;
      }
}
h1{
    font-size: 5rem;
    text-align: left;
  }

.content{
  /* border: 1px solid red; */
  /* max-width: 100rem;
  margin: auto; */

  p{
    color: black;
    font-size: 2rem;
    line-height: 2;
    text-align: left;
    padding: 1rem;
  }
}


//Media query
@media (max-width:600px) {
  .container{
    padding: 3rem;
  }
  picture{

    min-width: 70%;
  }
}
@media (max-width:400px) {


    .container{
    padding: 1rem;
  }
  picture{

    /* border: 1px solid red; */
    min-width: 100%;
  }
  h1{
    font-size: 3.5rem !important;
  }
  P{
    overflow: hidden;
  }
}

`

export default BlogPost