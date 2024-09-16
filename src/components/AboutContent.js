import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import SkillGraph from "./SkillGraph"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="top">
            <p>
                A final year student pursuing Computer Science Engineering at Kalinga Institute of Industrial Technology (KIIT) Bhubaneswar. Has Experience in using software development tools such as AWS Cloud9, GITHUB and ATOM, knowledge of the various architectures like X86. Programming languages familiar with but not limited to :C, C++, HTML, CSS, PHYTON, JAVASCRIPT,SQL. Currently learning DAA, ReactNative. Tools I can use: VS Code , Git Hub. Interested in the field of CyberSecurity,ML/AI ,Deep Learning, Blockchain
            </p>
            </div> 


            <div className="bottom">
                <div >
                    <p>
                    <SkillGraph language="C/C++" percentage={85} />
                    <SkillGraph language="Python" percentage={70} />
                    <SkillGraph language="DBMS (SQL)" percentage={65} />
                    <SkillGraph language="Front End" percentage={50} />
                    <SkillGraph language="Back End" percentage={80} />
                    <SkillGraph language="Java" percentage={50} />
                    </p>
                </div>
            </div>

    </div>
  )
}

export default AboutContent
