import styled from 'styled-components'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'

const PostCard = ({ post }: any) => {

  // console.log(post)
  const { isDark } = useGlobalContext();
  return (

    <Link to={`/blog/${post.slug}`}>
      <Box isDark={isDark}>
        <div className='picture'>
          <img src={post.featuredImage} alt="MOHD AZKAR" className="logo" />
        </div>
        <div className="data">
          <div className="info">
            <span className='tag'>{post.category}</span>
            <span className='date'>6/11/2018</span>
          </div>
          <div className="title">
            <h3>{post.title}</h3>
          </div>
          <div className="author">
            <span>By: AzKaaR</span>
          </div>
        </div>
      </Box>
    </Link>

  )
}



const Box = styled.div<{ isDark?: boolean }>`
  border: 1px solid silver;
  cursor: pointer;
  background-color: ${(props: { isDark?: boolean }) => {
    return !props.isDark ? "white" : "var(--darkCard)";
  }};
  overflow: none;
  

  .picture{
    width: 100%;
    overflow: hidden;
    /* border: 2px solid black; */

    img{
      width: 100%;
      height: 230px;
      transition:all .5s linear;
      
      &:hover{
        transform:scale(1.1);
      }
    }
  }
  .data{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .info{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tag{
        background-color: #26a79d;
        color: white;
        padding: 2px 5px;
      }
    }

    .title,.author,.date{
      color:${(props: { isDark?: boolean }) => {
    return !props.isDark ? "black" : "white";
  }} !important;
      }
    }

  

`
export default PostCard