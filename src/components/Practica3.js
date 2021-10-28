import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Article from './Blog/Article'
import Sidebar from './Blog/Sidebar'
import Images from './Blog/Image'

import initialState from '../assets/initialState.jpg';
import gaol from '../assets/goal.jpg';
import example1 from '../assets/example1.jpg';
import example2 from '../assets/example2.jpg';
import example3 from '../assets/example3.jpg';

function Practica3(){
    return(
        <div className="content">
            <Sidebar>
                <a href="#practica3/introduction">Introduction</a>
                <a href="#practica3/objective">Objective</a>
                <a href="#practica3/theory">Theoretical Framework</a>
                <a href="#practica3/dev">Development</a>
                <a href="#practica3/code">Coding</a>
                <a href="#practica3/video">Performance</a>
                <a href="#practica3/conclusions">Conclusions</a>
                <a href="#practica3/references">References</a>
            </Sidebar>
            <Article>
                <h1>Greedy Best-First Search</h1><hr />
                <h3 id="practica3/introduction">Introduction</h3>
                <p>Greedy Best-First Search is one of the available topics
                    to use for working on this practice, it is an algorithm 
                    used to find the shortest path to reach a goal, it needs
                    contextual information to work.
                    <br></br><br></br>
                    GBFS is part of search algorithms, this kind of algorithms 
                    is used in many areas like route and cost optimizations, 
                    action planning, knowledge, mining, robotics, autonomous
                    driving cars, computational biology, software, etc...
                </p>
                <h3 id="practica3/objective">Objective</h3>
                <p>It is possible to demonstrate the functionality of this algorithm
                    by a puzzle, which consists in a sets of numbers inside a square,
                    there is a gap that allows to move the numbers in order to achieve
                    the correct ordering. This puzzle can be solved using search algorithms,
                    The goal for this practice is to develop an algorithm that solves many 
                    different combinations of this puzzle.
                </p>
                <h3>Justification</h3>
                <p>Troubleshooting by search, specifically GBFS was chosen because it's one
                    of the best tree search algorithms, yet is easy to implement.
                </p>
                <h3 id="practica3/theory">Theoretical Framework</h3>
                <p>Greedy best-first search algorithm is part of search algorithms, this kind of algorithms are used in areas 
                    like, knowledge mining, robotics, autonomous driving, computational biology, software and hardware 
                    verification, and others. Search algorithms are models of problems where the task is to reach a goal 
                    from the initial state via state transformation rules, so the search space can be described as a graph or 
                    a three where the aim is to reach the goal from the initial state via the shortest path.
                </p>
                <p>Search algorithms can be classified into two categories:
                    <ul>
                        <li>Uniformed or Exhaustive: Where the search is done
                            only with the information given in the problem 
                            statement, in this group are Breadth First Search and 
                            Depth First Search.
                        </li>
                        <li>Informed or Heurisitc: Where search is done by using
                            extra information to determine the next step to reach 
                            the goal, in this group is Greedy Best-First Search.
                        </li>
                    </ul>
                </p>
                <p>The Greedy best-first search is a combination of depth-first search and
                    breadth-first-search, but this algorithm selects the best path by using
                    a Heurisitc function, so you can say that it is better than the others.
                    In a general way, BFS choose the most promising node of a graph in each step,
                    so this algorithm expands the node, whis is closest to the goal node,
                    by using a Heurisitc function, we can determine the closest cost and with this, 
                    select the next node.
                </p>
                <h3>Example</h3>
                <p>It is required to generate at least 4 nodes of the graph that allows the
                    solution of the puzzle by using GBFS. It uses a function that indicates in this
                    case how far are you from the goal. The total distance or the value of the 
                    function is the sum of the Manhattan distance of each block to reach its state on the
                    board.
                </p>
                <p>Function: D(T) = M(0) + M(1) + ... + M(8) </p>
                <Images>
                    <img src={initialState} alt="Example" />
                    <img src={gaol} alt="Example" />
                </Images>
                <h3>Process</h3>
                <p>First, it is necessary to know that by opening
                    the first node there are only four possiblities,
                    (up, down, left and right), the next step is to calculate
                    the total distance of each child node, in this case by breadth-first search
                    it is compared the value and selected the closest node to the final state,
                    in other words, it is selected the lowest value and the node is opened.
                </p>
                <Images>
                    <img src={example1} alt="Example" />
                </Images>
                <p>The next step is to evaluate the child nodes of the node recently
                    opened, in this case there are only two possibilites (up and down)
                    because the movement to the right produces a node that it is already 
                    in the opened nodes list. Again, by breadth-first search it is compared
                    the value and selected the closest node to the final state, in this case
                    the up node of the third level is selected and opened.
                </p>
                <Images>
                    <img src={example2} alt="Example" />
                </Images>
                <p>Finally, for this example, the value of the only child node is calculated
                    and compared. As the new node is the closest node to the goal, it is selected
                    and opened.
                </p>
                <Images>
                    <img src={example3} alt="Example" />
                </Images>
                <p>To keep advancing in the resolution of this example it is just necessary to 
                    follow the same steps until reach the goal, which is a zero value in the heuristic
                    function. If the value of the new node is the same as the others, the first node
                    in the graph with the same value is the best option to open.
                </p>
                <h3 id="practica3/dev">Development</h3>
                <p>All the process after the initial analysis is done thanks because it is necessary to know the parameters, 
                    variations and instances before implement methods and search the goal. In this problem the firs thing 
                    to determine is the size of the impossible game, in this case the size is a 3x3 puzzle, this size was selected 
                    because is the best way to start in the resolution of more complex problems. 
                </p>
                <p>To determine the initial and final state(goal) is so relevant because these are the main parameters to 
                    start searching the final node inside the graph, in this case the final state is defined in the figure number 
                    3. The heuristic function is fundamental because it provides the value that will be compared, this value 
                    determines the best node to choose, in this case the closest node to the goal is the one with the lowest 
                    value.
                </p>
                <p>Before open the node selected, is necessary to know the possible moves based on the position of the 
                    space and avoiding creating an existing node, this to avoid redundancy. The comparison is done 
                    breadth-first search and if the value of the new node is the same as the others, the first node in the 
                    graph with the same value is the best option to open. When the value of the function is zero the goal is 
                    reached and the node is the final state.
                </p>

                <h3 id="practica3/code">Coding</h3>
                <p>To code the solution of the impossible puzzle mentioned using Java the puzzle was divided in simple 
                    structures, this because the objective was to create classes for each part of the puzzle leveraging the 
                    object-oriented programming paradigm. There are three classes in the project created in this practice, 
                    they are Node, Tree and Main. Each class has attributes and methods that allows a better analysis of 
                    the problem and the code.
                </p>
                <h4>Node Class</h4>
                <p>This class was created to make the different nodes of the final
                    tree, in this case, each node is a 3*3 matrix that contains an 
                    array of numbers from 0 to 8.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{`
public class Node{

    ArrayList<Integer> coords;
    int[][] newState = new int[3][3];
    int dt;
    Node parentNode;

    public Node(int[][] oldState, ArrayList<Integer> coords, Node parent){
        this.coords = coords;
        parentNode = parent;
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                newState[i][j] = oldState[i][j];
            }
        }
        generateNewState();
    }
}
`}
                </SyntaxHighlighter>
                <p>The generateNewState method changes the old node, that
                    was recently selected for the new node that is closest to
                    the goal.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{`private void generateNewState(){
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(newState[i][j] == 0){
                newState[i][j] = newState[coords.get(0)][coords.get(1)];
                newState[coords.get(0)][coords.get(1)] = 0;
            }
        }
    }
    dt = calculateDt();
}`}
                </SyntaxHighlighter>
                <p>The calculateDt method calculates the value of the heuristic function
                    by searching the position of each number in the matrix, calculating the
                    distance from its deal position, and doing the sum.<br></br><br></br>
                    The method named searchPosition calculates the distance of each number from its ideal position and 
                    returns the value, this method makes possible to calculate the value of the heuristic function.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{`private int calculateDt(){
    int calc = 0;
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++) {
            calc += searchPosition(newState[i][j], i, j);
        }
    }
    return calc;
}

private int searchPosition(int num, int posX, int posY){
    int wantedRow = num/3;
    int wantedCol = num%3;
    return Math.abs(wantedRow - posX)+Math.abs(wantedCol - posY);
}
`}
                </SyntaxHighlighter>
                <h4>Tree</h4>
                <p>This class contains all the other methods to grow the tree, the selection of every new node, the opening 
                    of each node selected, and the algorithm that allows the efficient apply of the greedy BFS.
                    Its constructor creates the root node and copies into o a class variable, also the node is added to the 
                    r0ute of the selection nodes, in this array are saved the nodes that were selected in its moment because 
                    they were the best node in one step.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true} >
{`public class Tree{

    int[][] toSolve = new int[3][3];
    int Tvalue;
    ArrayList<Integer> previousState;
    ArrayList<Node> openNodes = new ArrayList<>();
    ArrayList<Node> closedNodes = new ArrayList<>();
    Node rootNode;
    ArrayList<Node> path = new ArrayList<>();

    public Tree(int[][] initial){
        // Constructor copies the matrix into a 
        // variable and sets an initial State for previousState
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                toSolve[i][j] = initial[i][j];
                if(toSolve[i][j] == 0){
                    previousState = new ArrayList<>(Arrays.asList(i,j));
                }
            }
        }
        Tvalue = calculateDt(toSolve);
        rootNode = new Node(toSolve, previousState, null);
        closedNodes.add(rootNode); // Root Node is visited
    }
    ...
`}
                </SyntaxHighlighter>
                <p>The calculateNodes method allows to know the possible movements based on the position of the space (in 
                    this case the space is the number zero).</p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true} >
{`private ArrayList<ArrayList<Integer>> calculateNodes(int[][] matrix){
    ArrayList<ArrayList<Integer>> coords = new ArrayList<>();

    //Possible movements
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(matrix[i][j] == 0){
                if(i-1>=0) coords.add(new ArrayList<>(Arrays.asList(i-1,j))); //Left
                if(i+1<3) coords.add(new ArrayList<>(Arrays.asList(i+1,j))); //Right
                if(j-1>=0) coords.add(new ArrayList<>(Arrays.asList(i,j-1))); //Up
                if(j+1<3) coords.add(new ArrayList<>(Arrays.asList(i,j+1))); //Down
                break;
            }
        }
    }

    return coords;
}
`}
                </SyntaxHighlighter>
                <p>The method named move could be one of the most important because generates nodes and its possible 
                    states, selects the next state based on the open nodes, updates the previous state and the matrix to 
                    solve.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true} >
{`private void move(){

    // Generate nodes and possible states
    ArrayList<ArrayList<Integer>> possibleMoves = calculateNodes(toSolve);
    
    //Remove previousState from possibleMoves
    possibleMoves.remove(previousState);
    for (ArrayList<Integer> possibleMove : possibleMoves) {
        Node node = new Node(toSolve, possibleMove, rootNode);
        if(!isVisited(node)) openNodes.add(node);
    }

    // Get next State based on open nodes
    Node currentNode = openNodes.get(0);
    int min = currentNode.getTvalue();
    int[][] nextState = currentNode.getNodeState();
    for(Node node: openNodes){
        if(node.getTvalue() < min){
            currentNode = node;
            min = currentNode.getTvalue();
            nextState = currentNode.getNodeState();
        }
    }

    //Update Previous State
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            if(toSolve[i][j]==0) previousState = new ArrayList<>(Arrays.asList(i,j));
        }
    }

    //Update matrix to solve
    toSolve = nextState;
    Tvalue = min;
    closedNodes.add(currentNode);
    openNodes.remove(currentNode);
    rootNode = currentNode;
}`}
                </SyntaxHighlighter>
                <p>The solve method starts the resolution of the matrix and creates 
                    a bucle that ends only when the value of 
                    the heuristic function is zero.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true} >
{
`public void solve(){
    while(Tvalue > 0){ // While distance from currentState to finalState > 0
        move(); // Execute a movement and updates Tvalue
    }
    while(rootNode.getParentNode() != null){
        path.add(0, rootNode);
        rootNode = rootNode.parentNode;
    }
    for(Node node: path){ node.printNewState(); }
    System.out.println("Number of moves: "+path.size());
    System.out.print("Finished!");
}`
}
                </SyntaxHighlighter>
                <h4>Main Class</h4>
                <p>This class allows the run of all the code, the instance of the 
                    Tree class is created and as parameter is 
                    given a 3*3 matrix that could be changed in every moment.
                </p>
                <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true} >
{
`public static void main(String[] args){
    int[][] toSolve = { {4, 6, 2},
                        {3, 0, 5},
                        {7, 8, 1} };

    Tree puzzle = new Tree(toSolve);
    System.out.println("Matriz de prueba: ");
    puzzle.print();
    System.out.println("T value is: "+puzzle.getTValue());
    System.out.println("-------------------");
    puzzle.solve();
}`
}
                </SyntaxHighlighter>
                <h3 id="practica3/video">Performance</h3>
                <iframe src="https://www.youtube.com/embed/SSJU7dyeEcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3 id="practica3/conclusions">Conclusions</h3>
                <p>This practice left a lot of knowledge for each member of the team, this topic centered in the searching 
                    of the shortest path to achieve a goal, in this case by using trees allows the best comprehension of 
                    adaptative systems like troubleshooting by search. The way of the structure of this problem was so 
                    simple thanks to the work in team, the process to create a code that could solve a puzzle that is so 
                    difficult for a person made us work harder because it is a great achievement for each member to watch 
                    the resolution of a problem that by hand seems so bored or complex. For next upgrades it would be a 
                    good idea create a graphic interface user that allows the visualization of the movements history and 
                    gives to the user more control about the initial and the final state.
                </p>
                <h3 id="practica3/references">References</h3>
                <ol>
                    <li>Great Learning Team. (2021, August 17). Best First Search Algorithm in AI | Concept, Implementation, 
                        Advantages, Disadvantages<a href="https://www.mygreatlearning.com/blog/best-first-search-bfs/">www.mygreatlearning.com</a>
                    </li>
                    <li>Informed Search Algorithms in AI - Javatpoint. (n.d.). 
                        <a href="https://www.javatpoint.com/ai-informed-search-algorithms">www.javatpoint.com</a>
                    </li>
                </ol>
            </Article>
        </div>
            
    )
}

export default Practica3