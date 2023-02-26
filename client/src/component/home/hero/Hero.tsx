import styled from 'styled-components'
import { useGlobalContext } from '../../../context';
const Hero = () => {
    const { isDark ,data} = useGlobalContext();
    return (
        <Main isDark={isDark}>
            <section className="section-hero section">
                <div className="container grid grid-two-column flex">
                    <div className="section-hero-data">
                        <p className="hero-top-data">This is me</p>
                        <h1 className="hero-heading">Mohd Azkar</h1>
                        {/* <p className="hero-para"></p> */}
                        <p className="hero-para" dangerouslySetInnerHTML={{ __html: data?.shortBio}}/>
                        <div>
                            <a href="#contact" className="btn hireme-btn">Hire me</a>
                        </div>

                    </div>



                    {/* <!-- <img src="/static/images/me.jpg" alt="img" className="hero-img"></img> --> */}
                    <img src={data.profile} alt="img" className="hero-img"></img>


                </div>
            </section>
        </Main>
    )
}


const Main = styled.main<{ isDark?: boolean }>`
    
/*==============================================
              Hero SECTION START
================================================ */

background-color: ${(props: { isDark?: boolean }) => {
        return !props.isDark ? 'var(--bg)' : 'var(--darkBg)'
    }};


.section-hero {

/* background-color: var(--bg); */

}
.bio-col{
font-weight: bold;
}
.section-hero-data {
display: flex;
flex-direction: column;
justify-content: center;

/* align-items: ; */
}

.hero-img {
max-width: 40%;
/* border-radius: 1rem; */
box-shadow: -2rem -2rem 0 0 var(--helper);

}

.hero-top-data {
text-transform: uppercase;
font-weight: bold;
font-size: 1.5rem;
color: var(--helper);

}

.hero-heading {
color: ${(props: { isDark?: boolean }) => {
        return props.isDark ? "white" : null
    }};
text-transform: uppercase;
font-weight: 700;
font-size: 6.4rem;
}

.hero-para {
margin: 1.5rem 0;
margin-bottom: 5rem;
max-width: 60rem;
}

`
export default Hero