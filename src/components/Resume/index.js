import React from 'react';
import resumeIcon from '../../assets/resume/resume.png';

function Resume() {
    return (
        <section className="resume">
            <h1>Resume</h1>
            <a href="https://drive.google.com/file/d/15eX2qyOLBjefY4EFfy4A4-IZQSZ4EUSK/view?usp=sharing"
                target="_blank" rel="noreferrer"><img src={resumeIcon} alt="bitmoji" className="resume-bitmoji" /></a>
        </section>
    )
}

export default Resume;