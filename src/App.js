import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className='name'>
          <h1>Param Patel</h1>
        </div>
        <div className='address'>
          <p>1708,2309 Brunswick Street, Halifax, NS, B3K 2Z1 </p>  
        </div>
        <div className='links'>
          <p>
            <span>782-882-4466</span>
            <span><a target="_blank" href="parampatel@dal.ca">parampatel@dal.ca</a></span>
            <span><a target="_blank" href="https://www.linkedin.com/in/param-patel-227a72251/">Linkedin</a></span>
            <span><a target="_blank" href="https://www.linkedin.com/in/param-patel-227a72251/">Github</a></span>
          </p>
        </div>
      </header>

      <main>
        <div className='education'>
          <h1>Education</h1>
          <div className='edu'>
            <p>Dalhousie University</p>
            <p>Sep. 2022 – Sep. 2026 </p>
          </div>
          <div className='edu1'>
            <p>Bachelor of Computer Science </p>
            <p>Halifax, Nova Scotia</p>
          </div>
        </div>

        <div>
      <h2>Summary</h2>
      <div className='edu1'>
        <p>I am a dedicated and skilled computer science student at Dalhousie University, actively seeking my first internship. Possesses
a strong foundation in programming languages and a focus on enhancing user experiences. Demonstrates proven proficiency
in various technical skills, such as Python, Java, and C, and showcases extensive experience with developer tools, frameworks,
and analytical tools. I am known for strong analytical and problem-solving abilities, effective communication, attention to
detail, and a proactive, self-motivated approach. I am gaining practical experience as a cashier at Walmart while contributing
to projects like the Flight Check Website and secure Authentication Page Development. </p>
      </div>

      <h2>Technical Skills</h2>
      <ul>
        <li>Languages: Python, Java, C, HTML/CSS, JavaScript, SQL, R</li>
        <li>Developer Tools/Technologies: VS Code, IntelliJ, AZURE, Git/GitHub, Linux</li>
        <li>Frameworks: jQuery, ReactJS</li>
        <li>Analytical Tools: PowerBI, Tableau, Excel, PowerShell, Power BI, SQL Server, Oracle, financial analysis, Microsoft Office, Pivot Tables, Analytical Skills, Innovative Thinking, Strong Communication</li>
      </ul>

      <div className='exp'>
        <h2>Experience</h2>
        <h3>Walmart - Cashier | September 2022 – present</h3>
        <p>
          • Maintained cash register balance accurately, resulting in 0 errors.
        </p>
        <p>
          • Aided with payment processing and bill management and efficiently resolved 95% customer queries.
        </p>
      </div>

      <h2>Projects</h2>
      <h3>Flight Check Website | JavaScript, HTML, CSS | December 2022</h3>
      <ul>
        <li>Designed and implemented a comprehensive search engine for displaying real-time flight data, handling 1000 simultaneous queries per second.</li>
        <li>Developed 10 HTML prototypes and prepared 15 XHTML documents integrated with CSS style sheets to enhance the user interface.</li>
        <li>Implemented JavaScript functionality, resulting in 50% faster data retrieval and display for users.</li>
        <li>Displayed a detail-oriented approach in ensuring the seamless integration of flight information, allowing users to obtain data by entering specific locations, resulting in a 60% increase in user satisfaction.</li>
      </ul>

      <h3>Authentication Page Development | PHP, DATABASE September 2023</h3>
      <ul>
        <li>Developed a secure authentication page using PHP, ensuring the confidentiality of user data for 100,000 users.</li>
        <li>Exhibited strong analytical and problem-solving abilities in implementing a user-friendly front-end login page in PHP, complemented by a Register page for seamless data integration into the database, resulting in 70% faster user registration.</li>
        <li>Utilized the PDO class to establish a secure connection to the database, implementing checks to validate user credentials on the login page for 500 accounts.</li>
        <li>Implemented a data storage mechanism in local storage, showcasing a detail-oriented approach to enhance user convenience and prevent logging, thus improving the overall user experience, resulting in a 40% reduction in data retrieval time.</li>
      </ul>
    </div>
      </main>
    </div>
  );
}

export default App;
