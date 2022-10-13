import React, {useState} from 'react';
import CardF1 from "./s1/s1";

function Card(props) {
    const [step, setStep] = useState("f1")
    const Content = () =>
        ({
            f1: <CardF1 setStep={setStep}/>,
            f2: (
                <div>
                    some
                </div>
            ),
            f3: (
                <div>
                    some 2
                </div>
            )
            ,
        }[step])
    return (
        <Content/>
    );
}

export default Card;