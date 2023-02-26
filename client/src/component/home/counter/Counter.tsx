import styled from "styled-components"
import {  useState,useEffect,useRef } from "react"
import { useCountUp } from 'use-count-up'

const Counter = () => {
    const [isVisible,setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
          },
          { threshold: 0.5 }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);
    

    const { value:code } = useCountUp({
        isCounting: isVisible,
        end: 85000,
        duration: 6,
        start:0,
        
        
      })
    const { value:coffee } = useCountUp({
        isCounting: isVisible,
        end: 1520,
        duration: 6,
        start:0,
        
        
      })
    const { value:client } = useCountUp({
        isCounting: isVisible,
        end: 12,
        duration: 6,
        start:0,
        
        
      })
    const { value:project } = useCountUp({
        isCounting: isVisible,
        end: 22,
        duration: 6,
        start:0,
        
        
      })
    
    
    
    return (
        <Section className="section section-work-data" ref={ref}>
            <div className="container grid grid-four-column">
                <div>
                    <h2 className="counter-numbers" data-number="50">{code}+</h2>
                    <p>Lines of Code</p>
                </div>
                <div>
                    <h2 className="counter-numbers" data-number="25">{client}+</h2>
                    <p>Happy Client</p>
                </div>

                <div>
                    <h2 className="counter-numbers" data-number="150">{coffee}+</h2>
                    <p>Cups of coffee</p>
                </div>

                <div>
                <h2 className="counter-numbers" data-number="200">{project}+</h2>
                    <p>Projects</p>
                </div>
            </div>
        </ Section>
    )
} 

const Section = styled.section<{ref:any}>`

  background: var(--gradient);
  text-align: center;
  transition: all 0.7s linear;
  color: white;



.counter-numbers {
  font-size: 4.8rem;
}

p {
  color: white;
  text-transform: capitalize;
}

`
export default Counter