import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Article from './Blog/Article'
import Sidebar from './Blog/Sidebar'
import Images from './Blog/Image'

import ants1 from '../assets/ants1.jpg'
import ants2 from '../assets/ants2.jpg'
import ants3 from '../assets/ants3.jpg'
import ants4 from '../assets/ants4.jpg'
import ants5 from '../assets/ants5.jpg'
import ants6 from '../assets/ants6.jpg'
import ants7 from '../assets/ants7.jpg'
import ants8 from '../assets/ants8.jpg'
import ants9 from '../assets/ants9.jpg'
import ants10 from '../assets/ants10.jpg'
import ants11 from '../assets/ants11.jpg'

function Practica4(){
    return(
        <div className="content">
            <Sidebar>
                <a href="#practica4/introduction">Introduction</a>
                <a href="#practica4/objective">Objective</a>
                <a href="#practica4/justification">Justification</a>
                <a href="#practica4/dev">Development</a>
                <a href="#practica4/code">Coding</a>
                <a href="#practica4/results">Results</a>
                <a href="#practica4/video">Performance</a>
                <a href="#practica4/conclusions">Conclusions</a>
                <a href="#practica4/references">References</a>
            </Sidebar>
            <Article>
                <h1>Multi-agent system</h1><hr />
                <h3 id="practica4/introduction">Introduction</h3>
                <p>This practice is based on Multi-agent systems (MAS) this are an area in the field of 
                    distributed artificial intelligence (DAI), as well as in the mainstream computer science. 
                    These systems are compound of relatively autonomous and intelligent parts, called 
                    agents, every agent is defined in this are as a software-based computer system that has 
                    autonomy, social ability, reactivity, and pro-activeness. Basically, a Multi-agent system 
                    consists of multiple decision-making agents which interact in a shared environment to 
                    achieve common or conflicting goals. There are a lot of areas of applications that can 
                    be addressed using MAS methodologies, including autonomous driving, multi-robot 
                    factories, automated trading, commercial games, automated tutoring, etc. Multi-agent systems research spans some technical problems, such as how to design MAS to 
                    incentivize certain behaviors in agents, how to design algorithms enabling one or more 
                    agents to achieve specified goals, how information is communicated and propagated 
                    among agents, and how norms, conventions and roles may emerge.
                </p>
                <h3 id="practica4/objective">Objective</h3>
                <p>In this practice, the workflow of Multi-agent systems is so important because it has a lot 
                    of influence on each member's ability to understand, this is relevant because the 
                    subject could seem like a simple system, however, it has a complex level that could 
                    make it more difficult this activity to reach the goal. The main goal is to code a MAS 
                    using Python as a programming language and its modules Pygame to make the system 
                    more interactive and attractive to users and MESA to design the MAS. In this case the 
                    MAS that will be implemented is an Ant Colony Algorithm.
                </p>
                <Images>
                    <img src={ants1} alt="Ant colony" />
                </Images>
                <h3 id="practica4/justification">Justification</h3>
                <p>The team decided to work with an ant colony as a Multi-agent system because it looks 
                    an interesting topic to aboard an trying to solve it makes every member to learn more 
                    about how MAS and ant colony work. <br></br> <br></br> A colony of ants is interesting because they are 
                    part of nature and most of the time, they go unnoticed, they have a complex system 
                    within them because each colony has an amazing organization that talks about how 
                    ants look for food and how they collaborate to get the same objective, survive. To 
                    implement their organization using a programming language is a challenging activity 
                    but at the same time it makes the problem attractive, try to abstract ant colonies is the 
                    most important thing in this practice, and by applying some rules, the system could be 
                    simpler.
                </p>
                <h3 id="practica4/dev">Development</h3>
                <p>
                    To start with the resolution of the problem the first thing done was to separate the 
                    fundamental elements of the system, in this case obtaining the next components:
                </p>
                <Images>
                    <img src={ants2} alt="Component 1" />
                    <img src={ants3} alt="Component 2" />
                    <img src={ants4} alt="Component 3" />
                    <img src={ants5} alt="Component 4" />
                    <img src={ants6} alt="Component 5" />
                    <img src={ants7} alt="Component 6" />
                </Images>
                <p>A delimited area allows to work only with a reserved space which keeps all other 
                    elements within a range, the paths, tunnels, and free area are created at the beginning 
                    as natural consequence but also they can be created by the ants, the home is the 
                    place where the ants (agents) can leave the food that they look for and carry for feed, 
                    the pheromones are left behind by ants after collecting food to leave a trail that there 
                    are still more on the same path. So, in this case, the system is simplified in these six 
                    elements that are part of only one environment, where the main component are the 
                    ants, they allow the system to be continually changing thanks to the actions that they 
                    realize. This first part makes the follow steps easier, this, because the whole system could 
                    be separated and better organized in a simpler components.
                </p>
                <p>The next part was to establish the rules that govern the behavior of ants, because 
                although they are individually autonomous, as a group they follow the same guidelines. 
                In this case their behavior can be simplified in the next rules:
                </p>
                <p>
                    <ul>
                        <li>If there are no food, then ant move randomly</li>
                        <li>If there is pheromone, the ant must follow the pheromone</li>
                        <li>If there is food, then the ant must pick it up</li>
                        <li>If the ant has food, then must leave it at home</li>
                    </ul>
                </p>
                <p>Once defined the rules for the agents in this case, the ants, the next part is to define all 
                    the possible combinations that could appear once the ants are in the system, so in this 
                    case the different environment conditions were defined in the next figure.
                </p>
                <Images>
                    <img src={ants8} alt="Ant rules" />
                </Images>
                <p>The next part was to move this information from the process to an algorithm that could 
                    represent the rules of all the Multi-agent system in a correct way, then all the previous 
                    analysis served to make the code of the system.
                </p>
                <h3 id="practica4/code">Coding</h3>
                <p>The part of coding the Multi-agent system is interesting because the aim was to 
                    represent the system as similar to life as possible, to achieve this, Python, and its modules 
                    Pygame and MESA, were used. Pygame allows to make the system more interactive, in 
                    this case in the displayed window there is the possibility to draw some paths, ants and
                    food, the ants home is displayed randomly every time that the code is started, so with 
                    this module the system could be manipulated and observed by the user in a simple 
                    way. MESA allows users to quickly create agent-based models, and also to create the main structure of the MAS. The 
                    pheromones are represented like a green path, the food like yellow squares, and the 5
                    ants like little arrows, and the free area is drawn like with cells. The system once started 
                    shows a window with all the cells in black so the next actions could be done by the 
                    users:
                </p>
                <p>
                    <ul>
                        <li>Draw the paths and free area by clicking the black area in the window</li>
                        <li>Press F to start drawing food into a free area</li>
                        <li>Press A to start drawing ants into a free area</li>
                        <li>Press Q to begin the Multi-Agent system simulation</li>
                        <li>Press R to restart the system and clear the window</li>
                        <li>To exit from the simulation just click the cross on top of the window</li>
                    </ul>
                </p>
                <p>Into the class Cell that allows the drawing of the matrix, ant spawning and 
                    where is possible to add some other elements including free area and food, there are 
                    some methods that are very important to make the system work.
                </p>
                <SyntaxHighlighter language="python" style={atelierHeathLight} wrapLongLines={true}>      
{`
class Cell:
    def __init__(self, posX, posY, resolution):
        self.state = 1 
        self.pheromoneLifeTime = 200
        self.color = borderColor if (self.state) else emptyColor
        self.position = pygame.math.Vector2(posX*resolution, posY*resolution)
        self.x = posX
        self.y = posY
        self.width = resolution

    def draw(self):
        pygame.draw.rect(screen, self.color, (self.position.x, self.position.y, self.width, self.width))
        if self.state == 4:
            self.pheromoneLifeTime -= 0.25
            self.color = (0+(200-self.pheromoneLifeTime), 200, 0+(200-self.pheromoneLifeTime))
            if self.pheromoneLifeTime == 0:
                self.state = 0
                self.color = emptyColor
        
    def setHome(self):
        self.state = 3
        self.color = homeColor

    def setState(self, state):
        if self.state != 3:
            self.state = state
            if self.state == 4:
                self.pheromoneLifeTime = 200
            switch = {
                0: emptyColor,
                1: borderColor,
                2: foodColor,
                4: pheromoneColor
            }
            self.color = switch.get(self.state)
`}
                </SyntaxHighlighter>
                <p>Into the class Ant, the most important method is perceive, this, because here is where 
                    the rules are defined before applying them into the behavior of each ant.
                    <br></br> There are some nested if’s that make the function of each ant be based 
                    on the conditions of the environment
                </p>
                <SyntaxHighlighter language="python" style={atelierHeathLight} wrapLongLines={true}>      
{`
def perceive(self, grid):
    if self.targetReached or (self.foundPath and (grid[self.targetGrid[0]][self.targetGrid[1]].state == 0) and not self.hasFood):
        self.chooseMovePoint(grid)
    else:
        # if found pheromone - follow
        if grid[self.gridColumn][self.gridRow].state == 4 and not self.foundPath:
            self.foundPath = True

        if self.foundPath:
            self.vision = 2
        else:
            self.vision = 5

        # if it doesn't has food and founds food - grab
        if (grid[self.gridColumn][self.gridRow].state==2) and not self.hasFood:
            grid[self.gridColumn][self.gridRow].setState(0)
            self.hasFood = True
            self.target = self.position

        # if has food - move to home and leave pheromone
        if self.hasFood:
            grid[self.oldGridColumn][self.oldGridRow].setState(4)
`}
                </SyntaxHighlighter>
                <h3 id="practica4/results">Results</h3>
                <p>As a result of coding the Multi-agent system based on an ant colony, there are some 
                    screenshots in sequence that show the final product.
                </p>
                <Images>
                    <img src={ants9} alt="Result 1" />
                    <img src={ants10} alt="Result 2" />
                    <img src={ants11} alt="Result 3" />
                </Images>
                <h3 id="practica4/video">Performance</h3>
                    <iframe src="https://www.youtube.com/embed/YITBIAtcU3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3 id="practica4/conclusions">Conclusions</h3>
                <p>To work with Multi-agent systems was a grateful experience, in this case we understood 
                    how they work in a simple way, in this case to specify the MAS into a problem how an
                    ant colony make the work easier, as a team we had an idea because we had worked 
                    with threads, and we related a little to work with cars into a traffic light system with this 
                    problem, they are similar in some aspects, although to see better the differences
                    between these two practices, the development of the Multi-agent system based on 
                    ants into Python make us to clear doubts. The hardest part in this practice was to select 
                    the best example to do, in this case we selected an ant colony because we could see 
                    better the theory of a MAS applied in a natural system, so this makes us to work better 
                    as a team. To finish, we can mention that a good idea to improve the system is to apply 
                    a better algorithm to the ant’s behavior and with this to obtain a better result
                </p>
                <h3 id="practica4/references">References</h3>
                <ol>
                    <li>Multi Agent Systems - an overview | ScienceDirect Topics. (n.d.). ScienceDirect Topics. 
                        Retrieved November 8, 2021, from: <br></br>
                        <a href="https://www.sciencedirect.com/topics/chemical-engineering/multi-agent-systems">https://www.sciencedirect.com/topics/chemical-engineering/multi-agent-systems</a>
                    </li>
                    <li>Multi-agent systems. (n.d.). The Alan Turing Institute. Retrieved November 8, 2021, from: <br></br>
                        <a href="https://www.turing.ac.uk/research/interest-groups/multi-agent-systems">https://www.turing.ac.uk/research/interest-groups/multi-agent-systems</a>
                    </li>
                    <li>What is Multi-Agent System | IGI Global. (n.d.). IGI Global. Retrieved November 8, 
                        2021, from: <br></br>
                        <a href="https://www.igi-global.com/dictionary/using-multi-agent-systems-support/1936">https://www.igi-global.com/dictionary/using-multi-agent-systems-support/1936</a>
                    </li>
                </ol>
            </Article>
        </div>
    )
}

export default Practica4