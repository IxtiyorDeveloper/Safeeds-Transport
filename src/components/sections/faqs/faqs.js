import React from 'react';
import {Collapse} from 'antd';
import "./faqs.scss"

const {Panel} = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faqs = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="pd fqwr">
            <div className="txs">
                <div className="tx1">
                    Frequently asked car shipping questions
                </div>
                <div className="tx2">
                    Everything you need to know about our reliable auto transport services
                </div>
            </div>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 10" key="10">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 21" key="21">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default Faqs;
