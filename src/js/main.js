import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'


class Main extends Component {
    render () {
        return (
     <main>
     
            {/* <div className = 'col-lg-12 text-box text-center'>
                    <h4> "When something is important enough, you do it even if the odds are not in your favor." 
                    </h4> <quote> Elon Musk </quote>
            </div>
                     */}
                     <div className = 'parallax' data-aos="fade-right"> <i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i> <i class="fab fa-js-square"></i><i class="fab fa-react"></i><i class="fab fa-node"></i><i class="fab fa-git"></i></div>

                    <div className = 'mainSection projects'
                        id = "projects"> 
                        <div className = 'projects-text' data-aos="fade-up">
                        <h2> &lt; Projects built with <i className = 'fa fa-heart'/> /&gt; </h2>
                    </div>

            <div className = "sectionDiv">
                <div className = 'wrapper' >
                <div className = 'rectangles' data-aos="fade-up">

                            <section className = 'container1 one'>

                                    <img id = 'first'
                                    src = './assets/images/ExchangeRateCalculator.png'
                                    alt = 'computers web design'
                                    width = '100%'
                                    height = '50%' 
                                    />


                                    <div className = 'bottom'>
                                                <h3> <a href = 'https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/'
                                                target = "_blank" > Exchange Rate Calculator </a>
                                                </h3>
                                                <h5> Project Specifications: </h5>
                                                <div>
                                                    <ul>
                                                            <li> Display UI with 2 select lists
                                                            for countries and 2 inputs
                                                            for amounts </li>
                                                            <li> Fetch exchange rates from <a href = 'https://api.exchangerate-api.com'
                                                            target = "_blank" > API </a></li>
                                                            <li> Display the values
                                                            for both countries </li>
                                                            <li > Update values on amount change </li> 
                                                            <li> Swap country rates </li> 
                                                            
                                                    </ul> 
                                                    <div className="button">
                                                    <button className="btn"><a href = 'https://furbo1.github.io/Exchange-Rate-Calculator-Portfolio/'
                                                            target = "_blank" > 👉 View Project </a> </button>
                                                    <button className="btn">  <a href = 'https://github.com/furbo1/Exchange-Rate-Calculator-Portfolio'
                                                            target = "_blank" >👉 Source Code </a></button>
                                                            </div>
                                                </div>

                                    </div>
                            </section>
                            <section className = 'container1 two'>
                                        <img id = 'second'

                                        src = './assets/images/CustomVideoPlayer.png'
                                        alt = 'Human DNA code'
                                        width = '100%'
                                        height = '50%' 
                                        />

                                    <div className = 'bottom'>
                                        <h3> <a href = 'https://furbo1.github.io/Custom-Video-Player-Portfolio/'
                                        target = "_blank"> Custom Video Player </a> 
                                        </h3>
                                        <h5> Project Specifications: </h5> 
                                        <div>
                                                <ul>
                                                        <li> Display custom video player styled with CSS </li> 
                                                        <li> Play / Pause / Stop </li> 
                                                        <li> Video progress bar </li> 
                                                        <li> Set progress bar time </li> 
                                                        <li> Display time in mins and seconds </li> 
                                                        
                                                </ul> 
                                                <div className="button">
                                                <button className="btn"><a href = 'https://furbo1.github.io/Custom-Video-Player-Portfolio/'
                                                        target = "_blank" > 👉 View Project</a></button>
                                                        <button className="btn"><a href = 'https://github.com/furbo1/Custom-Video-Player-Portfolio'
                                                        target = "_blank" > 👉 Source Code</a></button> 
                                                        </div>
                                                        

                                        </div> 
                                    </div>
                            </section>
                            <section className = 'container1 three'>
                                <img id = 'third'
                                src = './assets/images/MovieBooking.png'
                                alt = 'Human DNA code'
                                width = '100%'
                                height = '50%' 
                                />

                                <div className = 'bottom'>
                                    <h3> <a href = 'https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/'
                                        target = "_blank" > Movie Seat Booking App </a> 
                                    </h3> 
                                    <h5> Project Specifications: </h5> 
                                    <div>
                                            <ul>
                                                    <li> Display UI with movie select, screen, seats, legend & seat info </li> 
                                                    <li> User can select a movie / price & select / deselect seats </li> 
                                                    <li> User can not select occupied seats </li> 
                                                    <li> Number of seats and price will update </li> 
                                                    <li> Save seats, movie and price to local storage so that UI is still populated on refresh </li>  
                                                    
                                            </ul>  
                                            <div className="button">
                                            <button className="btn"><a href = 'https://furbo1.github.io/Movie-Seat-Booking-App-Portfolio/'
                                                        target = "_blank" > 👉 View Project</a></button>
                                                        <button className="btn"><a href = 'https://github.com/furbo1/Movie-Seat-Booking-App-Portfolio'
                                                        target = "_blank" > 👉 Source Code</a></button>

</div>
                                    </div>

                                </div>

                            </section> 
                    </div>
                        
                    <div  className="gitHubProjects list" data-aos="fade-right">
                        <h2> &lt;.... & More projects built with <i className = 'fa fa-heart'/> here: /&gt; </h2>
                        <div>
                                <ul>
                                    <li > <a href = 'https://furbo1.github.io/React-Web-Developer-Template-Website-Portfolio/'
                                    target = "_blank" > 👉: React - Web - Developer - Template - Website - Portfolio </a></li>
                                    <li > <a href = 'https://furbo1.github.io/Infinite-Scroll-Blog-Posts-Portfolio/'
                                    target = "_blank" > 👉: Infinite - Scroll - Blog - Posts - Portfolio </a></li>
                                    <li > <a href = 'https://furbo1.github.io/Sign-Up-Form-Validator-Javascript-Portfolio/'
                                    target = "_blank" > 👉: Sign - Up - Form - Validator - Javascript - Portfolio </a></li>
                                    <li > <a href = 'https://furbo1.github.io/Modal-Menu-Slider-Portfolio/'
                                    target = "_blank" > 👉: Modal - Menu - Slider - Portfolio </a></li>
                                    <li > <a href = 'https://furbo1.github.io/DOM-array-methods-portfolio/'
                                    target = "_blank" > 👉: DOM - array - methods - Portfolio </a></li>
                                    <li > <a href = 'https://github.com/furbo1/UD-FED-Evaluate-News-Article-with-NLP-Portfolio'
                                    target = "_blank" > 👉: Evaluate - News - Article - with - NLP - Portfolio </a></li>
                                </ul> 
                        </div>
                        <div className="gitHubProjects">
                            <h2>Technologies used:</h2>
                            
                            <p><span>HTML | CSS | Javascript | JQuery | React.js | Redux | Node.js | Express.js | Ajax | Git | Sass | Webpack | </span></p>
                        </div>
                        
                            </div>
                </div>

                
            </div>
                 <section id = 'description'>
                        <div className = 'container'>
                            <div >
                            <div className="abtMe" data-aos="fade-in">
                                <h2> About me </h2> 
                                <p> After a hugely sucessful career in Gaming industry in which I have held several executive roles including Fleet Cage Operations Manager and Casino Manager,due to my passion for programming, I decided to change careers and explore the limitless possibilities of programming and hopefully bring my modest contribution to the "Tech for good" community and help make the world a better place for all.</p>
                            </div>
                                <div className="experience" >
                                        <h2 data-aos="fade-left">Experience Summary , Skills & Accomplishments:</h2>
                                        <ul data-aos="fade-left">
                                            <li>I was admitted at University(U.S.A.M.V.- Faculty of Management, Bucharest, Romania) as top of the list with 10/10 at Math exam and 9.75/10 in Physics, earning government study grant. Only the top ten highest exam scores received goverment study grants.</li>
                                            <li>As Fleet Cage Operations Manager:
                                            <ul data-aos="fade-right">
                                                    <li>Consistently emphasized the habit of 'sharing of ideas' within the organization. </li>
                                                    <li>I am a strong beliver in being a leader rather than a boss, and in leading by example.</li>
                                                    <li>Provided accounting and compliance support to over 100 Management teams working onboard the Global Casino Operations shipboard Casinos.</li>
                                                    <li>Helped with develoment,training and implementation of various multi million budget programs, inclding Anti-Money Laundering(AML), Junket Operations programs. </li>
                                                    <li>Helped with developing accounting and compliance policies for the Casino operation across over 100 properties, as well as constantly revisiting and updating existing procedures.</li>
                                                    <li>Helped with staff training, evaluating and promotions.</li>

                                            </ul>  
                                            </li>    
                                            <li data-aos="fade-in">As Casino Manager: <ul>
                                                <li>I spearheaded teams of 12-40 employees and managed Casino enterprises generating monthly gaming revenue in excess one million USD.</li>
                                                <li>Constantly analyzed budgeting and expenses, Casino floor and staff performance using various metrics.</li>
                                                <li>Conceived plans for promotional activities, loyalty schemes and awards, developed financial analysis reports.</li>
                                                <li>Proposed and implemented initiatives that saved the company millions of dollars, through reducing liabilities at games with high Jackpots/payouts.</li>
                                            </ul></li>
                
                                            <li data-aos="fade-up">Publications:
                                                <ul>
                                                <li><a href="https://planetsave.com/2017/11/12/mapping-the-global-efforts-to-restore-the-worlds-forests/">Mapping The Global Efforts To Restore The World’s Forests!</a></li>    
                                                <li> <a href= "https://cleantechnica.com/2017/10/02/lab-grown-meat-arrived-good-news-planet/">Lab-Grown Meat Has Arrived, And It’s Good News For The Planet!</a></li>
                                                <li><a href='https://cleantechnica.com/2017/11/13/amazon-future-food/'>Amazon & The Future Of Food</a></li>
                                                </ul></li>
                                        </ul>
                                    </div>
                                </div>
                        
                                <div id='poza' data-aos="fade-up"> 
                                    <img id = 'pozapass'
                                    src = './assets/images/Poza_pasaport.jpg'
                                    alt = 'Poza mea'
                                    width = '200px'
                                    height = '200px' 
                                    />
                                </div> 
                        </div> 
                            <div className = 'mainSection' data-aos="fade-up">
                            <div className = 'sectionDiv' >
                                <section className = 'container1 one'>

                                    <img id = 'first'

                                    src = './assets/images/artificial-intelligence-3382507_640.jpg'
                                    alt = 'computers web design'
                                    width = '100%'
                                    height = '50%' 
                                    />

                                    <div className = 'bottom' >
                                        <h3> Education </h3>  
                                        <ul>
                                                    <li> <img src = "https://img.icons8.com/nolan/24/diploma.png" /> Front End Web Developer Nanodegree @ Udacity, 2019 / 2020 </li> 
                                                    <li> <img src = "https://img.icons8.com/nolan/24/diploma.png" /> Marketing in a Digital World @University of Illinois at Urbana - Champaign / Coursera, 2016 </li> 
                                                    <li> <img src = "https://img.icons8.com/nolan/24/diploma.png" /> Mini - MBA - Kauffman Fellows Academy, 2013 </li> 
                                                    <li> <img src = "https://img.icons8.com/nolan/24/diploma.png" /> Master Degree - Management & Rural Development, 1998 - 2005, U.S.A.M.V. - Bucharest, Romania </li>
                                                    <li> <img src = "https://img.icons8.com/fluent/24/000000/open-resume.png" /> <a href = "https://www.linkedin.com/in/alex-cocan-59a392139/"
                                                target = "_blank" > Full resume here: https: //www.linkedin.com/in/alex-cocan-59a392139/</a></li>
                                        </ul>

                                    </div> 
                                </section> 
                                <section className = 'container1 two'> 
                                        <img id = 'second'
                                        src = './assets/images/dna-3539309_640.jpg'
                                        alt = 'Human DNA code'
                                        width = '100%'
                                        height = '50%' 
                                        />

                                        <div className = 'bottom'>
                                            <h3> Experience </h3> 
                                                <ul>
                                                    <li> Worked in Gaming Industry
                                                    for past 21 years 1999 - 2020 </li>
                                                    <li> Worked
                                                    for 14 years in various Casino Management positions, including Fleet Cage Operations Manager and Casino Manager </li> 
                                                    <li> Fleet Manager - provided accounting / compliance support to over 100 Casino Management teams at Carnival Corporation, Global Casino Operations. </li> 
                                                    <li> Casino Manager - spearheaded teams of 12 to 40 employees & managed Casino bussiness generating monthly gaming revenue exceeding one million USD. </li> 
                                            </ul>


                                        </div>
                                    </section>
                                    <section className = 'container1 three'> 
                                        <img id = 'third'
                                        src = './assets/images/monitor-1307227_640.jpg'
                                        alt = 'Human DNA code'
                                        width = '100%'
                                        height = '50%' 
                                        />

                                            <div className = 'bottom'>
                                                <h3> Interests </h3> 
                                                <ul>
                                                    <li> Programming: I developed a passion
                                                    for it, thus I 'm changing careers  </li> 
                                                    <li> Reading & listening to Audio Books </li> 
                                                    <li> Sports, including body - building, running, cycling </li> 
                                                    <li> Nutrition </li> 
                                                    <li> Renewables / Environment(reading / sharing daily about) </li> 
                                                    <li> Investing / Anti - aging / AI / Robotics / & many others </li> 
                                                </ul>

                                            </div>
                                        </section>
                        </div>
                        
                    </div>
                </section>
        </div>
                
     </main>
    )
    }
}


class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Contact />
        <Footer />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})






