import styled from 'styled-components'
import { useGlobalContext } from '../../../context'
const Contact = () => {
    const {isDark} = useGlobalContext();

    return (
        <Section className="section section-contact" id="contact" isDark={isDark}>
            <div className="container">
                <h2 className="common-heading">Contact Us</h2>
            </div>

            <div className="section section-contact-main">
                <form action="https://formspree.io/f/xayvzezb" method="POST">
                    <div className="grid grid-two-column">

                        <div>
                            <label htmlFor="username"></label>
                            <input type="text" name="username" id="username" placeholder="Username" required />
                        </div>

                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="subject"></label>
                        <input type="text" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div>
                        <label htmlFor="textarea"></label>
                        <textarea name="textarea" id="textarea" cols={30} rows={10} required></textarea>
                    </div>
                    <div>
                        <input type="submit" name="submit" id="submit" value="Send" className="btn" />
                    </div>
                </form>

            </div>
        </Section>
    )
}

const Section = styled.section<{isDark?:boolean}>`
/*==============================================
              Contact code 
================================================ */
/* background-image: url('/images/bg.png'); */

background-repeat: no-repeat;
background-color: ${(props:{isDark?:boolean})=>{
        return !props.isDark ? "var(--bg)" : "var(--darkBg)";
    }};

.common-heading,input,textarea{
    color:${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "white";
    }} !important;
}

.section-contact-main {
  max-width: 70rem;
  margin: auto;
  margin-top: 9rem;
  transition: all .3s linear;
}

.section-contact-main form {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

}

.section-contact-main input,
.section-contact-main textarea {
  padding: 1.5rem 2rem;
  border: .1rem solid #c9c9c9;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: "work sans";
  width: 100%;
  resize: none;
  background-color: ${(props:{isDark?:boolean})=>{
        return !props.isDark ? "" : "var(--darkCard)";
    }};

}

.section-contact-main input[type="submit"] {
  max-width: 30rem;
  border: none;

}

.section-contact-main .grid {
  gap: 3.2rem;
}
`
export default Contact