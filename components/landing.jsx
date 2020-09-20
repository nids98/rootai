import React, {useEffect} from 'react'
import { init } from 'ityped'
import Paper from '@material-ui/core/Paper';
import { Container } from './landing-style'

const Landing = () => {
    useEffect(() => {
        const myElement = document.querySelector('#tagline')
        init(myElement, {
            showCursor: false,
            strings: ['Natural Language Processing', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence' ],
            typeSpeed: 100,
            backSpeed: 50,
        })
    }, [])
    return (
        <Container>
            <div id="tagline" className="tagline"></div>
        </Container>
    )
}

export default Landing

// select={e => {
//     if (prevElem) {
//         if (prevtoprevElem)
//             prevtoprevElem.style.setProperty("background-color", "initial");
//             prevtoprevElem = prevElem
//         }
//         e.element.style.setProperty("background-color", "red", "important");
//         prevElem = e.element;
//         console.log(e.element);
//         console.log(prevElem);
//         console.log(prevtoprevElem);
//         OptionSelect(e.element.innerText)
//     }
// }