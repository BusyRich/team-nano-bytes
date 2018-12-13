import React from 'react';
import '../screens/3-About.css';
import johnny from '../assets/images/johnny.png';
import ashley from '../assets/images/ashley.png';
import meeli from '../assets/images/meeli.png';
import gaylyn from '../assets/images/gaylyn.png'; 

const About = () => (
  <div className="aboutPage">
      <h1>Our World is a Beautiful Place</h1>

    <div className="website">
      <h2>The Website:</h2>

      <p className="info">In our Website you can see the beautiful photos.</p>
    </div>

    <div className="team">
      <h2>The Team:</h2>
      <p className="info">"Our World Is So Beautiful" was started by a group of students called Team Nano Bytes as a team project. <br/> The team consists of four students: Johnny Rodriguez, Meeli Sonn, Ashley Warren, and GayLyn Jaramillo.</p> 
    </div>

    <div className="members">   
      <h2>Team Members:</h2>

      <div id="member">
          <img className="photo" src={johnny} alt="JohnnyRodrguez"  />
            <p id="name">Johnny Rodriguez</p>        
        <div id="info">            
            <p id="code">Front-End and Style</p> 
            <p id="about">Some information about Johnny goes here.</p>  
        </div> 
      </div>   
     

      <div id="member">   
          <img className="photo"  alt="AshleyWarren" src={ashley}/>
            <p id="name">Ashley Warren</p>        
        <div id="info">                
            <p id="code">Back-End and Database</p>
            <p id="about">Ashley has been working in the music industry for 8 1/2 years. <br/>She looks to help the music industry and independent artists through knowledge gained by taking the Full Stack Development course at WOZ-U.</p> 
        </div>       
      </div>  
        
      <div id="member">
          <img className="photo"  alt="MeeliSonn" src={meeli}/>
            <p id="name">Meeli Sonn</p>        
        <div id="info">            
            <p id="code">Back-End and Database</p> 
            <p id="about">Meeli likes to write. She likes photography very much. <br/> She has two Master: in Education Geography and Biology and in Instruction Design. <br/> Web Developing she started in 2017 in Coder Camp (WOZ-U).</p> 
        </div>
      </div>    
        
      <div id="member">  
          <img className="photo" alt="GayLynJaramillo" src={gaylyn}/> 
            <p id="name">GayLyn Jaramillo</p>      
        <div id="info">            
            <p id="code">Front-End and Style</p>
            <p id="about">GayLyn began working with 3D modeling and photo editing programs as a hobby.<br/> Wanting to further her knowledge, in 2018 she began taking software development course with WOZ-U. </p>
        </div>
      </div>

      </div>

    <div className="contact">
      <h2>Contact Info:</h2> 
        <p>Email: wozunano@gmail.com</p>
    </div>

  </div>
);

export default About;
