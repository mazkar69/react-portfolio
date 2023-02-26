import styled from "styled-components"
import { useGlobalContext } from "../../context"
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
const PostCard2 = ({ post }: any) => {
    const { isDark } = useGlobalContext();
    return (
        <Link to={`/blog/${post.slug}`}>
            <Div isDark={isDark}>
                <picture>
                    <img src={post.featuredImage} alt="" />
                </picture>
                <div className="data">
                    <div className="title">
                        <h3 className="title">{post.title}</h3>
                        <div className="info">
                            <span className='tag'>{post.category}</span>
                            <span className='date'>6/11/2018</span>
                        </div>
                    </div>
                    <div className="discription">
                        <p className="description">{post.description}</p>
                    </div>
                    <div className="read-btn">
                        <span className="btn-1">Read More</span>
                        <AiOutlineArrowRight className="icon" />
                    </div>
                </div>

            </Div>
        </Link>
    )
}

const Div = styled.div<{ isDark?: boolean }>`

/* border: 1px solid green; */
    background-color: ${(props: { isDark?: boolean }) => {
        return !props.isDark ? "white" : "var(--darkCard)";
    }};
padding: 1rem;
display: flex;
/* border: 1px solid red; */
box-shadow: 1px 1px 1px gray;

picture{
    min-width: 30%;
    max-width: 30%;
    img{
        width: 100%;
        height: 100%;
    }
}
.data{
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.title{
    font-size: 2.5rem !important;

}

.info{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tag{
        background-color: #26a79d;
        color: #ffffff;
        padding: 2px 5px;
      }
    }
.read-btn{
    text-align: right;
    color: var(--para);
    .btn-1{
        font-size: 2rem;
        padding: 1rem 2rem ;
        /* color: black;
        border: 1px solid gray; */
    }
    .icon{
        font-size: 2rem;
    }
}

.title,.author,.date{
      color:${(props: { isDark?: boolean }) => {
        return !props.isDark ? "black" : "white";
    }} !important;
      }
    

@media (max-width:700px) {

    flex-direction: column;

    picture{
    min-width: 100%;
    max-width: 100%;
    img{
        width: 100%;
        height: 100%;
        }
    }
    .info{
        justify-content: space-between;
    }
}

`

export default PostCard2