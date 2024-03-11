import React, { useEffect, useState } from 'react';
import './Synopsis.css';

const Synopsis = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = `
    Hello, I'm Vishal, a 25-year-old IT professional with a passion for leveraging technology to solve complex problems and drive innovation. I hold a Master's degree in Information Technology, specializing in database administration, Azure data engineering, data mining and analytics, reporting, and front-end web development.

    With expertise in SQL Server database administration and Azure data engineering, I excel at designing robust data solutions and optimizing database performance to meet business objectives. My skills in data mining and analytics allow me to extract valuable insights from large datasets, empowering organizations to make data-driven decisions.

    In addition to my technical skills, I bring a unique blend of creativity and analytical thinking to every project. I thrive in dynamic environments and am known for my adaptability and flexibility. Whether it's developing intuitive user interfaces or architecting scalable data pipelines, I approach each task with a meticulous attention to detail and a commitment to excellence.

    While my strengths lie in my flexibility, creativity, and analytical mindset, I acknowledge that my perfectionism can sometimes be a challenge. However, I continuously strive to find a balance between striving for excellence and embracing imperfection as part of the learning process.

    Currently, I am open to new opportunities and eager to contribute my skills and expertise to innovative projects. Feel free to reach out to me anytime to discuss potential collaborations or opportunities.

    You can contact me at [insert contact information].
  `;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prevText) => prevText + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 50);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="synopsis-container">
      <div className="paper-container">
        <h1>About Vishal</h1>
        <p>{typedText}</p>
      </div>
    </div>
  );
};

export default Synopsis;
