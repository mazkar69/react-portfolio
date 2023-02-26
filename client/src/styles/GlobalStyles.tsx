
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --heading: rgb(0 10 45);
  --para: #777777;
  --para-tint: #e4e4e4;
  --third: #fff;
  --helper: #8490ff;
  --black: #212529;
  --helper-tint: #f3f4ff;
  --bg: rgb(249 249 255);
  --overlay-color: #3e64ff;
  --icon-bg: rgba(144, 172, 209, 0.2);
  --gradient: linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%);
  --shadow: 0px 0px 20px 0px rgb(132 144 255 / 20%);
  --shadowSupport: 0 2rem 2rem 0 rgb(132 244 155 / 30%);

  //For Dark Mode
  --darkBg:#121212;            //For backgroud
  --darkBgSecoundry:#181818;        //For Navigation
  --darkCard:#282828;       //Card
  --darkBgHover:#404040;        //Hover on card
  --darkBgPara:#b3b3b3;         //para  
  --darkHeading:#fffff;       //title

}

/* spacing 
desktop = 4.8rem */

html {
  font-size: 50.5%;
  font-family: "Work Sans", sans-serif;
  /* overflow-x: hidden; */
  scroll-behavior: smooth;
}

body {
  /* overflow-x: hidden; */
}

.body::-webkit-scrollbar {
  display: none;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}

h1 {
  color:var(--heading);
  font-size: 6rem;
  font-weight: 600;
}

p {
  color: var(--para);
  line-height: 1.6;
  font-size: 1.9rem;

  /* word-spacing: 0.1rem; */
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


/*==============================================
              Reuseable code 
================================================ */

.section {
  padding: 9rem 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: repeat(4, 1fr);
}

.flex {
  display: flex;
  gap: 5rem;
  padding: 3rem;
}

.container {
  max-width: 135rem;
  /* border: 2px solid red; */
  margin: auto;
}

.btn {
  background: var(--gradient);
  padding: 1.6rem 3.2rem;
  border: none;
  color: var(--helper-tint);
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover,
.btn:active {
  box-shadow: var(--shadowSupport);
  /* transform: translateY(-1rem); */
  /* color: red; */
}

.common-heading {
  font-size: 4.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
  position: relative;
}

.common-heading::before {
  content: "";
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  left: 0;
  top: 75px;
  background-color: var(--helper);
  border-radius: 50%;


}

.common-heading::after {
  content: "";
  position: absolute;
  top: 80px;
  left: 1.5rem;
  min-width: 20rem;
  height: .3rem;
  background-color: var(--helper);
}

h3 {
  font-size: 2rem;
  font-weight: 400;
}

span {
  font-size: 1.5rem;
}


.active{
  color: var(--helper);
}



//Media Query for responsive



/* ---------------------------------------------------------- */
                      /* media Query */
/* ---------------------------------------------------------- */

/* Media Queries */

@media (max-width: 1160px) {
  .container {
    max-width: 130rem;
    padding: 0 3rem;
  }
}
@media (max-width: 980px) {
  html {
    font-size: 45.5%;

  }

}
@media (max-width: 800px) {
  html {
    font-size: 42.5%;

  }

  .section-services .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }

  .section-services .grid {
    margin-top: 9rem;
    row-gap: 8rem;
  }

  #section-bio .grid {
    gap: 4rem;
  }

  .section-footer .grid-four-column {
    grid-template-columns: 1fr 1fr;
  }

  .section-footer .grid {
    row-gap: 4rem;
    column-gap: 8rem;
  }
  .section-projects .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }

}


@media (max-width: 700px) {
  .container {
    max-width: 80rem;
  }

  .flex {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .section-hero-data {
    text-align: center;
  }

  .hero-img {
    max-width: 65% !important;
  }


  .section-work-data .grid-four-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .overlay-btn{
    font-size: 1.5rem;
    padding: .5rem 1rem;  
  }
}

@media (max-width: 460px) {
  html {
    font-size: 40%;

  }

  .common-heading::before {
    top: 40px;
  }

  .common-heading::after {
    top: 45px;
  }

  .section-footer .f-about,
  .section-footer .f-address {
    grid-column: 1/-1;
  }

  .p-btns {

    gap: 1.5rem;

  }

  .btn {
    padding: 1rem 2rem;
  }

  .section-projects .grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .counter-numbers {
    font-size: 2.8rem;
  }

  .section-work-data .grid {
    column-gap: 2rem;

  }

  .section-services .grid-three-column {
    grid-template-columns: 1fr;
  }

  .section-freelancing h2 {
    font-size: 3.4rem;

  }

  .section-freelancing span {
    font-size: 3.4rem;


  }

  .section-freelancing h2,
  .section-freelancing p {

    margin-bottom: 1.3rem;
  }

  .section-contact-main {
    padding: 0 1.3rem;
  }

  .section-contact-main .grid-two-column {
    grid-template-columns: 1fr;
  }

  .hero-heading {

    font-size: 4.8rem;
  }

  .hero-img {
    max-width: 70%;
  }

  .common-heading {
    font-size: 3.5rem;

  }

}
`


