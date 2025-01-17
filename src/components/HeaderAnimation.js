import React, { useEffect, useRef, useState } from 'react'
import "../headeranimation.css"

const HeaderAnimation = ({heading}) => {
    const targetRef = useRef();
    const [letters, setLetters] = useState([])
    const [visible, setVisible] = useState([false])
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
          },
          {
            threshold: 1,
          }
        );
        observer.observe(targetRef.current);
  
        return () => {
          observer.disconnect();
        };
      }, []);
    useEffect(() => {
        const letterArray = heading.split("")
        setLetters(letterArray)
    }, [heading])
  return (
    <ul ref={targetRef} className='text hidder '>
    {letters.map((letter, index) => (
        <li key={index} className={`${letter === letters[0] ? '' : letter === letters[3] ? "spaced" : visible ? "" : "ghost"} ${letter === letters[3] ? visible ? "pl-3" : "pl-0" : ""}`}>
            {letter}
        </li>
    ))}
    </ul>
  )
}

export default HeaderAnimation