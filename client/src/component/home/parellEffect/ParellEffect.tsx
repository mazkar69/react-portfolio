import styled from "styled-components"

const ParellEffect = () => {
    return (
        <Section className="section section-freelancing">
        <div className="overlay"></div>
        <div className="container">
          <h2>
            I am <span>available</span> for Remote work
          </h2>
          <p>Hire me for remote work, I'm free for work from home.</p>
          <a href="#contact" className="btn">Hire me</a>
        </div>
    
      </Section>
      )
}

const Section = styled.section`
    

/*==============================================
              Freelancing SECTION START
================================================ */

  background-image: url('/images/3.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  position: relative;
  transition: all 0.7s linear;
  text-align: center;


.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--overlay-color);
  opacity: .7;

}

 .container {
  position: relative;

}

h2 {
  font-size: 5.4rem;

}

span {
  font-size: 5.4rem;
  color: #a0f669;

}
h2, p {
  color: white;
  margin-bottom: 1.6rem;
}

`
export default ParellEffect