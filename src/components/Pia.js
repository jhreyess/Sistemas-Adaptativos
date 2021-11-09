import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Article from './Blog/Article'
import Sidebar from './Blog/Sidebar'
import Images from './Blog/Image'
import Legend from './Blog/Legend'
import Table from './Blog/Table';

import gameOfLife from '../assets/gameOfLife.jpg'
import rules from '../assets/rules.jpg'
import patterns from '../assets/patterns.jpg'
import dies from '../assets/dies.jpg'
import lives from '../assets/lives.jpg'
import results1 from '../assets/results1.jpg'
import results2 from '../assets/results2.jpg'
import results3 from '../assets/results3.jpg'
import results4 from '../assets/results4.jpg'

function Pia(){
    return(
        <div className="content">
            <Sidebar>
                <a href="#pia/introduction">Introduction</a>
                <a href="#pia/objective">Objective</a>
                <a href="#pia/justification">Justification</a>
                <a href="#pia/theory">Theoretical Framework</a>
                <a href="#pia/dev">Development</a>
                <a href="#pia/code">Coding</a>
                <a href="#pia/results">Results</a>
                <a href="#pia/video">Performance</a>
                <a href="#pia/conclusions">Conclusions</a>
                <a href="#pia/references">References</a>
            </Sidebar>
            <Article>
                <h1>Cellular Automaton</h1><hr />
                <h3 id="pia/introduction">Introduction</h3>
                <p>This activity will be focused on Cellular Automata (CA), they are discrete, abstract 
                    computational systems that have proved useful both as general models of complexity and as 
                    more specific representations of non-linear dynamics in a variety of scientific fields. Being 
                    specific, it will be more detailed in Cellular Automaton, this is a model of a system of “cell” 
                    objects that are useful in many areas. To know more about them, it will be explained their basis 
                    and their characteristics that make them an interesting computational system, also it will be 
                    developed a type of Cellular Automaton by using the programming language Python and its 
                    module Pygame.
                </p>
                <h3 id="pia/objective">Objective</h3>
                <p>Knowing that Cellular Automata are useful as general models of complexity the goal in this 
                    practice is to explain what they are and with this, create a Cellular Automaton called “Game 
                    of life”, this is a zero-player game, meaning that its evolution is determined by its initial state, 
                    needing no input from human players. One interacts with the Game of Life by creating an initial 
                    configuration and observing how it evolves. A variant exists where two players compete, but 
                    this is not a topic to aboard. Just to introduce this game one could say that the universe of the 
                    Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in 
                    one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are 
                    the cells that are directly horizontally, vertically, or diagonally adjacent.
                </p>
                <Images>
                    <img src={gameOfLife} alt="Game of life!" />
                </Images>
                <h3 id="pia/justification">Justification</h3>
                <p>This topic was selected because it was boarded in class recently, and every member of the 
                    team coincided that work with Automata Cellular, specifically with Game of Life could be an 
                    amazing opportunity to learn a little bit more about how they work and how a resolution could 
                    be reached. In this case by implementing first an algorithm and then move it to a programming 
                    language like Python. In class the basic topics were explained, and some examples helped to 
                    understand a little better the process of working with this type of Automata Cellular and other 
                    variants, so it was decided that it is a good idea to go further and solve this activity. 
                </p>
                <h3 id="pia/theory">Theoretical Framework</h3>
                <p>As said before Cellular Automata are discrete, abstract computational systems that have 
                    proved useful both as general models of complexity and as more specific representations of 
                    non-linear dynamics in a variety of scientific fields. So, their characteristics are described below
                </p>
                <p>
                    <ul>
                        <li>Discrete: They are composed of a finite or denumerable set of homogenous, simple units, 
                            the atoms or cells. At each time unit, the cells instantiate one of a finite set of states. They 
                            evolve in parallel at discrete time steps, following state update functions or dynamical 
                            transition rules: the update of a cell state obtains by taking into account the states of 
                            cells in its local neighborhood (there are, therefore, no actions at a distance).
                        </li>
                        <li>Abstract: they can be specified in purely mathematical terms and physical structures can 
                            implement them
                        </li>
                        <li>Computational systems: they can compute functions and solve algorithmic problems.</li>
                    </ul>
                </p>
                <p>The father of CA is John von Neumann (von Neumann 1951). Working on self-replication and 
                    attempting to provide a reductionist theory of biological development, von Neumann was 
                    trying to conceive a system capable of producing exact copies of itself. Now biology prima 
                    facie appears to be the realm of fluidity and continuous dynamics. But following a suggestion 
                    of his colleague Stanislaw Ulam, von Neumann decided to focus on a discrete, two-dimensional 
                    system. Instead of just black-or-white cells, von Neumann’s automaton used 29 different states 
                    and rather complicated dynamics and was capable of self-reproduction. Von Neumann’s CA 
                    was also the first discrete parallel computational model in history formally shown to be a 
                    universal computer, i.e., capable of emulating a universal Turing machine and computing all 
                    recursive functions.
                </p>
                <p>The simplest Cellular Automata is a Cellular Automaton is a model of a system of “cell” objects 
                    with the following characteristics
                </p>
                <p>
                    <ul>
                        <li>The cells live on a grid. (We’ll see examples in both one and two dimensions in this 
                            chapter, though a cellular automaton can exist in any finite number of dimensions.)
                        </li>
                        <li>Each cell has a state. The number of state possibilities is typically finite. The simplest 
                            example has the two possibilities of 1 and 0 (otherwise referred to as “on” and “off” or 
                            “alive” and “dead”).
                        </li>
                        <li>Each cell has a neighborhood. This can be defined in any number of ways, but it is 
                            typically a list of adjacent cells.
                        </li>
                    </ul>
                </p>
                <p>Cellular automata come in a variety of shapes and varieties. One of the most fundamental 
                    properties of a cellular automaton is the type of grid on which it is computed. The simplest such 
                    "grid" is a one-dimensional line. In two dimensions, square, triangular, and hexagonal grids may 
                    be considered. Cellular automata may also be constructed on Cartesian grids in arbitrary 
                    numbers of dimensions, with the d-dimensional integer lattice Z^d being the most common 
                    choice. The number of colors (or distinct states) k a cellular automaton may assume must also 
                    be specified. This number is typically an integer, with k=2 (binary) being the simplest choice. For 
                    a binary automaton, color 0 is commonly called "white," and color 1 is commonly called "black". 
                </p>
                <p>The example of the elementary cellular automata is showed below.</p>
                <p>1) Grid. The simplest grid would be one-dimensional: a line of cells.</p>
                <Table border={true}>
                    <thead>
                        <tr className="table-row-header">
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                            <td><br></br></td>
                        </tr>
                    </thead>
                </Table>
                <p>2) States. The simplest set of states (beyond having only one state) would be two states: 0 or 1.</p>
                <Table border={true}>
                    <thead>
                        <tr className="table-row-header">
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                    </thead>
                </Table>               
                <p>3) Neighborhood. The simplest neighborhood in one dimension for any given cell would be the 
                    cell itself and its two adjacent neighbors: one to the left and one to the right.
                </p>
                <Table border={true}>
                    <thead>
                        <tr className="table-row-header">
                            <td className="right">1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td className="left">1</td>
                            <td className="middle">1</td>
                            <td className="right">1</td>
                            <td>0</td>
                            <td className="left">0</td>
                            <td className="middle">1</td>
                        </tr>
                    </thead>
                </Table>                    
                <p>The way to calculate the next generation of a line of cells is by using a formula. The formula for 
                    calculating CELL’s state at any given time t is as follows
                </p>
                <Legend>f(t) = g(t-1)<br></br>
                        Where f(t) stands for the Cell state at time 't' and g(t-1) stands for the sum of the cell neighborhood states at time 't-1'
                </Legend>
                <p>In other words, a cell’s new state is a function of all the states in the cell’s neighborhood at the 
                    previous moment in time (or during the previous generation). We calculate a new state value 
                    by looking at all the previous neighbor states
                </p>
                <p>There are three cells, each with a state of 0 or 1. How many possible ways it could be configure 
                    the states? So, three cells define a 3-bit number, and with three 3 bits you can high to 8. 
                    <br></br>
                    <br></br>
                    Once defined all the possible neighborhoods, is necessary to define an outcome (new state value: 0 
                    or 1) for each neighborhood configuration. Once defined the rule, the next step is to apply it 
                    and get the result. 
                </p>
                <Images>
                    <img src={rules} alt="Rules" />
                </Images>
                <p>This could be done more times and the result by switching the number by its color is amazing.
                    <br></br>
                    Different rules make different patterns, so in the next image some rules and their results are showed.
                </p>
                <Images>
                    <img src={patterns} alt="Patterns" />
                </Images>
                <h3>Game of life</h3>
                <p>The Game of Life is a cellular automaton devised by the british mathematician John Horton 
                    Conway in 1970. It was popularised by Martin Gardner in his October 1970 column of 
                    "Mathematical Games" in the "Scientific American" magazine. The article garnered more 
                    response than any other of his previous articles in the magazine, including Gardners famous 
                    article on Hexaflexagons.
                </p>
                <p>In the Game of Life each grid cell can have either one of two states: dead or alive. The Game 
                    of Life is controlled by four simple rules which are applied to each grid cell in the simulation 
                    domain:
                </p>
                <p>
                    <ul>
                        <li>Any live cell with fewer than two live neighbors dies, as if by loneliness.</li>
                        <li>Any live cell with more than three live neighbors dies, as if by overcrowding.</li>
                        <li>Any live cell with two or three live neighbors lives, unchanged, to the next generation.</li>
                        <li>Any dead cell with exactly three live neighbors comes to life.</li>
                    </ul>
                </p>
                <p>Considering that a live cell is black, and a dead cell is white, the next tables illustrate some 
                    examples about how Game of life works. Also, a red dot means that the cell will die in the next 
                    step and a green dot means that the cell will live the next step.
                </p>
                <Images>
                    <img src={dies} alt="Dies" />
                    <img src={lives} alt="Lives" />
                </Images>
                <p>The initial pattern constitutes the seed of the system. The next generation is created by applying 
                    the above rules simultaneously to every cell in the seed - births and deaths happen 
                    simultaneously, and the discrete moment at which this happens is sometimes called a tick. (In 
                    other words, each generation is a pure function of the one before.) The rules continue to be 
                    applied repeatedly to create further generations.
                </p>
                <p>Cellular automata often use a toroidal topology of the simulation domain. This means that 
                    opposing edges of the grid are connected. The rightmost column is the neighbor of the leftmost 
                    column and the topmost row is the neighbor of the bottommost row and vice versa. This allows 
                    the unrestricted transfer of state information across the boundaries.
                </p>
                <p>Another type of boundary condition treats nonexisting cells as if they all had the same state. In 
                    the Game of Life this would mean that nonexisting cells are treated as if they were dead (as 
                    opposed to the second state "alive"). The advantage of this boundary condition in the Game 
                    of Life is that it prevents gliders from wrapping around the edges of the simulation domain. This 
                    will prevent the destruction of a glider gun by the gliders it produces (see text below below for 
                    details about what gliders are)
                </p>
                <h3 id="pia/dev">Development</h3>
                <p>To resolve this activity and make the Game of Life by using Python and its module Pygame it 
                    was necessary firstly to abstract the game and its components and rules, every member of the 
                    team apported ideas for the construction of the algorithm and the steps. The total grid was 
                    considered a Matrix that contains cells whose values change between 0 and 1, where in each 
                    new step the aforementioned rules are applied to have a new grid. The program runs until the 
                    user gives another instruction.
                </p>
                <p>The code once initialized:</p>
                <p>
                    <ul>
                        <li>Shows a random grid with some black cells and other white cells.</li>
                        <li>To toggle between starting and stoping the simulation, it is necessary to press the Q key</li>
                        <li>In case to clear the grid press the R key.</li>
                        <li>To draw in the grid just press the left button of the mouse and the cells changes its 
                            color from white to black.
                        </li>
                        <li>To start the simulation again, it is just necessary to press the Q key.</li>
                        <li>To exit from the simulation just click the cross in the top of the window.</li>
                    </ul>
                </p>
                <h3 id="pia/code">Coding</h3>
                <p>make2DArray method allows to create a matrix based on the given parameters of the number 
                    of columns and rows.</p>
                <SyntaxHighlighter language="python" style={atelierHeathLight} wrapLongLines={true}>
{`
def make2DArray(rows, cols):
    arr = []
    for i in range(cols):
        row = []
        for j in range(rows):
            row.append(Cell(floor(randrange(2)), i, j, resolution))
        arr.append(row)
    return arr

# Create a new array with random values
grid = make2DArray(rows,cols)
`}
                </SyntaxHighlighter>
                <p>This part of code, allows to calculate the state of each cell by counting its
                    active neighbors on the method 'count' and allows the 'update' of all the values.
                </p>
                <SyntaxHighlighter language="python" style={atelierHeathLight} wrapLongLines={true}>
{`
# Draws all the cells
for row in grid:
        for cell in row:
            cell.draw()
if not stop:
    # Count the number of active neighbors cells
    for row in grid:
        for cell in row:
            cell.count(grid)
    
    # Updates all the values
    for row in grid:
        for cell in row:
            cell.update()
`}
                </SyntaxHighlighter>
                <p>In order to code the algorithm, we coded each cell as an object that has different methods, each one 
                    focused on a different objective.<br></br><br></br>
                    In this method, the neighbors of the cell are counted and depending on the number and 
                    according to the rules, the state of the cell could change or could be the same.
                </p>
                <SyntaxHighlighter language="python" style={atelierHeathLight} wrapLongLines={true}>
{`    
def count(self, grid):
    neighbors = 0
    for i in range(-1, 2):
        for j in range(-1,2): 
            col = (self.x + i + cols) % cols
            row = (self.y + j + rows) % rows
            neighbors += grid[col][row].isAlive
    neighbors -= self.isAlive

    # Determines whether the cell lives or dies
    if(self.isAlive and (neighbors < 2 or neighbors > 3)):
        self.needsToUpdate = 0
    elif(not self.isAlive and neighbors == 3):
        self.needsToUpdate = 1
    else:
    self.needsToUpdate = self.isAlive
`}
                </SyntaxHighlighter>
                <h3 id="pia/results">Results</h3>
                <Images>
                    <img src={results1} alt="Result1" />
                    <img src={results2} alt="Result2" />
                    <img src={results3} alt="Result3" />
                </Images>
                <Legend>The images shown above shows us the initial grid with random states, a clear grid and 
                    a user-defined grid by using the drawing method.
                </Legend>
                <Images>
                    <img src={results4} alt="Results4" />
                </Images>
                <Legend>The final result after running the simulation.</Legend>
                <h3 id="pia/video">Performance</h3>
                    <iframe src="https://www.youtube.com/embed/3gVc78llQ_Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h3 id="pia/conclusions">Conclusions</h3>
                <p>This activity was an interesting challenge for all the members of the team because when the 
                    Game of Life was seen for each of us for first time it seemed to us very complex but at the same 
                    time a great problem to be solved by applying our skills and knowledge. Every member of the 
                    team learned a lot in this practice because although the topic was seen in class, apply it in an 
                    algorithm and programming it using Python was something new, to know how to abstract the 
                    general problem was the first step in this activity because it is known that the game already 
                    exists but to programming it by us based on some examples has its difficult, so we defined to 
                    solve this problem using a matrix. The solution was excellent for us because we hoped to make 
                    it as the final product, the next step applied in the future could be to have some options to show 
                    already known patterns and that when simulating them they show their respective result that is 
                    commonly striking
                </p>
                <h3 id="pia/references">References</h3>
                <ol>
                    <li>Cellular Automata (Stanford Encyclopedia of Philosophy). (2017, August 22). Stanford 
                        Encyclopedia of Philosophy. Retrieved November 5, 2021, from: <br></br>
                        <a href="https://plato.stanford.edu/entries/cellular-automata/#BrieHist">https://plato.stanford.edu/entries/cellular-automata/#BrieHist</a>
                    </li>
                    <li>Cellular Automaton -- from Wolfram MathWorld. (n.d.). WolfarmMathWorld. Retrieved 
                        November 5, 2021, from: <br></br>
                        <a href="https://mathworld.wolfram.com/CellularAutomaton.html">https://mathworld.wolfram.com/CellularAutomaton.html</a>
                    </li>
                    <li>John Conway’ s Game of Life. (n.d.). Game of Life Simulation. Retrieved November 5, 
                        2021, from: <br></br> <a href="https://www.compadre.org/osp/EJSS/3577/12.htm">https://www.compadre.org/osp/EJSS/3577/12.htm</a>
                    </li>
                    <li>John Conway’s Game of Life - An Introduction to celluar Automata. (n.d.). The Game 
                        of Life. Retrieved November 5, 2021, from: <br></br>
                        <a href="https://beltoforion.de/en/game_of_life/">https://beltoforion.de/en/game_of_life/</a>
                    </li>
                    <li>
                    The Nature of Code. (n.d.). THE NATURE OF CODE. Retrieved November 5, 2021, from: <br></br>
                    <a href="https://natureofcode.com/book/chapter-7-cellular-automata">https://natureofcode.com/book/chapter-7-cellular-automata</a>
                    </li>
                </ol>
            </Article>
        </div>
    )
}

export default Pia