import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Sidebar from './Blog/Sidebar'
import Article from './Blog/Article'
import Images from './Blog/Image'
import Table from './Blog/Table'
import Legend from './Blog/Legend'

import img1 from '../assets/roads.jpg'
import img2 from '../assets/cases.jpg'
import img3 from '../assets/graph.jpg'
import img4 from '../assets/equation1.jpg'
import img5 from '../assets/queue.jpg'

function Practica1(){
    return(
        <div className="content">
            <Sidebar>
                <a href="#practica1/description">Description</a>
                <a href="#practica1/objectives">Objectives</a>
                <a href="#practica1/introduction">Introduction</a>
                <a href="#practica1/design">Design</a>
                <a href="#practica1/code">Code</a>
                <a href="#practica1/video">Performance</a>
                <a href="#practica1/conclusions">Conclusions</a>
                <a href="#practica1/references">References</a>
            </Sidebar>
            <Article>
                <h1>Adaptive Algorithm</h1><hr />
                <h3 id="practica1/description">Description</h3>
                <p>In this activity it will be implemented a system that simulates
                    congested streets and it adjust automatically the duration of the
                    green traffic lights on the streets.
                </p>
                <h3 id="practica1/objectives">Objectives</h3>
                <ul>
                    <li>Implement Traffic light control in an environment of intersections and avenues of various senses</li>
                    <li>Make a report where you can describe your work and the results you got</li>
                </ul>
                <h3 id="practica1/introduction">Introduction</h3>
                <p>The problem was solved using Python and different modules such as Pygame for the simulation 
                    displaying and threading for the execution of the algorithm.
                    The first task done was to creade the environment of intersectios and congested streets, after that,
                    it was necesary to consider the different ways how adjustment could be solved, in this case, the
                    analysis of the street lanes senses allows us to determine the quantity of queues and servers that
                    the system have. Later in this document, it will be possible to observe the development of a MVC 
                    architecture implementing queues and threads.
                </p>
                <h3 id="practica1/design">Cross Street Design</h3>
                <p>In the diagram below, the different directions of the street lanes are shown, 
                    in which it is possible to see the straight direction and
                    the turn direction.
                </p>
                <p>A symbology is attached to each lane to allow understanding of the problem.</p>
                <Images size="large"><img src={img1} alt="Roads" /></Images>
                <h3>Graphic Scheme</h3>
                <Images size="large"><img src={img2} alt="Graph" /></Images>
                <h3>Conflict matrix</h3>
                <Table>
                    <thead>
                        <tr>
                            <th></th><th>A1</th><th>A2</th><th>B1</th><th>B2</th><th>C1</th><th>C2</th><th>D1</th><th>D2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Case 1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Case 2</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Case 3</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Case 4</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Solution Design</h3>
                <p>The first thing done was the separation of cases graphicly, in the image below it's possible
                    to see the four cases and the street lanes that they integrate.
                </p>
                <Images size="large"><img src={img3} alt="Road cases" /></Images>
                <p>Subsequently it was necessary a mecanism to determine how many servers and queues the system would have
                    and the service mechanism to be implemented. The next image represents the queue system that will be implemented.
                    The input source has infinite size, this is because the cars will arrive randomly, and their arrival times are
                    probabilistic. In this case the queue capacity is considered finite. The service discipline is a FIFO structure
                    where the cars of one queue are catered while the other one is waiting. The time of service will be given by the 
                    traffic light considering the number of cars in each street lane at its service and given by the following equation.
                </p>
                <Images size="medium"><img src={img4} alt="Equation (1)" /></Images>
                <Legend>Where 'n' is the number of cars in the queue, 't' stands for the pedestrian crossing time
                    and 'm' is the maximum number of cars that can be in the queue.
                </Legend>
                <p>
                    In the straight lanes, base time never goes under t, this allows to pedestrians to
                    have a reference of the minimum time to cross the street, in this case 't' seconds.

                    The green light assignation is a variable between the straight roads and the turn roads, because 
                    while the cars of the turn roads are moving, the pedestrian can´t cross, so in the X2 and Y2 roads 
                    the time is given by an arithmetic operation and in the X1 and Y1 roads the value of the 
                    operation is added to 5.
                </p>
                <p>The served clients are those cars that have already left behind the traffic light.</p>
                <Images size="large"><img src={img5} alt="Queues" /></Images>
                <h3 id="practica1/code">Code</h3>
                <p>In the programming stage the problem was to find a correct way to make the system, implementing
                    tools such as threads. The solution was obtained through the analysis of each member of the team.
                    The general idea is raised grouping the street lanes by pairs, each pair was named by its position,
                    (vertical = Y, horizontal = X), and by its direction (straight = 1, turn = 2), getting four groups 
                    described in the next list: </p>
                    <ul>
                        <li>roadsX1 : A1 C1</li>
                        <li>roadsX2 : A2 C2</li>
                        <li>roadsY1 : B1 D1</li>
                        <li>roadsY2 : B2 D2</li>
                    </ul>
                <p>The first time of the green light was defined by the number of cars in the street lanes having a 
                    self adjustment that allows a better vehicular flow.
                </p>
                <p>The movement of the cars was done by the following function.</p>
                <div className="coding">
                <SyntaxHighlighter language="python" style={nightOwl} wrapLongLines={true}>
    {`
        def move(self, isGreen):
            self.canMove = self.calculateDistance(self.stopPlace)
            self.isRoadClear = self.calculateCarDistance()
            if((self.isRoadClear and self.canMove) or isGreen):
                if self.isVertical:
                    self.posY -= self.sign*self.carSpeed
                else:
                    self.posX -= self.sign*self.carSpeed
                if((self.posX < -400) or (self.posX > 1040) or (self.posY > 1040) or (self.posY < -400)):
                    self.newCoords()
    `}
                </SyntaxHighlighter>
                </div>
                <p>The different states of each traffic light are given by the next code:</p>
                <div className="coding">
                <SyntaxHighlighter language="python" style={nightOwl} wrapLongLines={true}>
    {`
        def init(self):
            while True:
                if(self.state==1):
                    self.roadsX1.setState(True) # Turn Green
                    time = self.roadsX1.getTime()*(self.cross_time/self.maxCars) + self.cross_time
                    sleep(time)
                    self.roadsX1.setState(False) # Turn Red

                elif(self.state==2):
                    self.roadsX2.setState(True) # Turn Green
                    time = self.roadsX2.getTime()*(self.cross_time/self.maxCars)
                    sleep(time)
                    self.roadsX2.setState(False) # Turn Red

                elif(self.state==3):
                    self.roadsY1.setState(True) # Turn Green
                    time = self.roadsY1.getTime()*(self.cross_time/self.maxCars) + self.cross_time
                    sleep(time)
                    self.roadsY1.setState(False) # Turn Red

                elif(self.state==4):
                    self.roadsY2.setState(True) # Turn Green
                    time = self.roadsY2.getTime()*(self.cross_time/self.maxCars)
                    sleep(time)
                    self.roadsY2.setState(False) # Turn Red
                    self.state = 0
                
                self.state += 1
                if self.stop_threads:
                    self.roadsX1.stop()
                    self.roadsX2.stop()
                    self.roadsY1.stop()
                    self.roadsY1.stop()
    `}
                </SyntaxHighlighter>
                </div>
                <p>And the final time is obtained by the comparation between street lanes
                    of each group of road, this because there are 2 servers, one for each axis (X and Y)
                    and the time in which the cars advance is the opposite. (X1,Y1) and (X2,Y2)
                </p>
                <div className="coding">
                <SyntaxHighlighter language="python" style={nightOwl} wrapLongLines={true}>
    {`
        def getTime(self):
            time1 = self.trafficLight1.getCrossTime()
            time2 = self.trafficLight2.getCrossTime()
            return time1 if time1 > time2 else time2
    `}
                </SyntaxHighlighter>
                </div>
                <p>The code in the main view file is the following:</p>
                <div className="coding">
                <SyntaxHighlighter language="python" style={nightOwl} wrapLongLines={true}>
    {`
        import sys, pygame
        import threading
        from controller.roads import Roads

        pygame.init()

        # Screen settings
        scale = {'width': 640, 'height': 640}
        screen = pygame.display.set_mode((scale['width'], scale['height']))
        pygame.display.set_caption("Traffic Lights")
        clock = pygame.time.Clock()

        roads = Roads(screen)
        roads_thread = threading.Thread(target=roads.init, name="Roads thread").start()

        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    roads.stop_threads = True
                    pygame.quit()
                    sys.exit()
            
            roads.show()
            roads.update()

            clock.tick(60)
    `}
                </SyntaxHighlighter>
                </div>
                <h3 id="practica1/video">Performance</h3>
                <iframe style={{display: "block", margin: "0 auto"}} width="560" height="315" src="https://www.youtube.com/embed/epZEQi-c4bI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h3 id="practica1/conclusions">Conclusion</h3>
                <p>
                    This activity was a total challenge for the teamwork, before reading the theory that involves an 
                    auto adjust system the ideas that each member had were too different to the final product. The 
                    correct analysis of the problem considering all the factors that can influence the output was 
                    very important, in this case it was necessary to see some videos about the topic and read some 
                    web pages about how an auto adjust system works, including theory about queues, threads, 
                    modular programming and the MVC architecture. Working with Python was simple because the 
                    implementation of its module named Pygame allows a better manipulation of the graphic 
                    interface and his components than other programming languages. The main problem was to 
                    create some threads that allow the execution of the different parts of the system such as queues 
                    (of cars) and servers (traffic lights), but it was solved with the structure mentioned before, the 
                    other problem was to implement the auto adjust, this considering the number of cars of the 
                    road that will advance and the time for the people that will cross the streets, this also was solved 
                    with the support of all the teamwork making a process based on an arithmetic operation. The 
                    problems made each member to think about a solution and give the idea to all the other 
                    members so with this the construction of this auto adjust system the team could reach the 
                    objectives and have a great solution of the traffic light control. To finalize, some improves that 
                    would be implemented are the substitution of the figures that make up the car for an image 
                    that represent better the concept, the same for the traffic lights, the last thing that would 
                    change is the duration of the green light for a more realistic, in this case the velocity of the cars 
                    must change. 
                </p>
                <h3 id="practica1/references">References</h3>
                <ol>
                    <li>3.9.7 Documentation. (n.d.). Python. Retrieved September 20, 2021, from <a href="https://docs.python.org/3/">python.org</a></li>
                    <li>Pygame Front Page - pygame v2.0.1. documentation. (n.d.). Retrieved September 20, 2021, from <a href="https://www.pygame.org/docs">pygame.org</a></li>
                    <li>Python threading tutorial: Run Code Concurrently Using the Threading Module. (2019) <a href="https://www.youtube.com/watch?v=IEEhzQoKtQU">Youtube</a></li>
                    <li>Svirca, Z. (2020, May 30). Everything you need to know about MVC architecture - Towards Data Science. Medium <a href="https://towardsdatascience.com/everything-you-need-to-know-about-mvc-architecture-3c827930b4c1#:%7E:text=%2DMVC%20is%20an%20architectural%20pattern,is%20invented%20">Towards Data Science</a></li>
                    <li>Teoría de Colas Conceptos básicos. (2012, March, 23). <a href="https://www.youtube.com/watch?v=jb3_zvj0w_c">Youtube</a></li>
                </ol>
            </Article>
        </div>
    )
}

export default Practica1