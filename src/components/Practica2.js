import Article from './Blog/Article'
import Sidebar from './Blog/Sidebar'
import Images from './Blog/Image'

import network from '../assets/network.jpg'
import file from '../assets/file.jpg'
import file2 from '../assets/file2.jpg'
import code1 from '../assets/code1.jpg'
import slide1 from '../assets/diapo1.jpg'
import slide2 from '../assets/diapo2.jpg'
import slide3 from '../assets/diapo3.jpg'
import slide4 from '../assets/diapo4.jpg'
import slide5 from '../assets/diapo5.jpg'
import slide6 from '../assets/diapo6.jpg'
import slide7 from '../assets/diapo7.jpg'
import slide8 from '../assets/diapo8.jpg'
import slide9 from '../assets/diapo9.jpg'
import slide10 from '../assets/diapo10.jpg'
import slide11 from '../assets/diapo11.jpg'
import slide12 from '../assets/diapo12.jpg'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Practica2(){
    return(
        <div className="content">
        <Sidebar>
            <a href="#practica2/networks">Complex Networks</a>
            <a href="#practica2/solution">Coding</a>
            <a href="#practica2/video">Performance</a>
            <a href="#practica2/chaos">Fractal Art</a>
            <a href="#practica2/conclusions">Conclusions</a>
            <a href="#practica2/references">References</a>
        </Sidebar>
        <Article>
            <h1>Complex Systems</h1><hr />
            <h3 id="practica2/networks">Complex Networks</h3>
            <p>Do the following exercises
                <ol>
                    <li>Draw a graph that represents a small part of your network of friends</li>
                    <li>Save the adjacency matrix for this graph to a file. The file must be able to be read by a program</li>
                </ol>
            </p>
            <Images>
                <img src={network} alt="Network" />
            </Images>
            <Images>
                <img src={file} alt="Network" />
            </Images>
            <h3 id="practica2/solution">Solution</h3>
            <p>The code was made in Java. In general, there are three classes
                that made the system work. The Node class is the class made for each Node of the graph,
                it has some attributes such as vertex order and an array that contains its adjacencies.
                <br></br>
                <br></br>
                GraphReader is the class that allows the file to be read, and it also sets the number of nodes,
                edges and the vertex orders, it can aslo print the matrix.
                <br></br>
                <br></br>
                Main class is where the other classes are called in order to run the code and get the desired results
                from reading the matrix.
            </p>
            <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{
` // GraphReader Class
public class GraphReader{

    ArrayList<Node> graph = new ArrayList<>();
    int numberOfEdges = 0;

    public GraphReader(String fileName){
        String filepath = new File("").getAbsolutePath() + "/../resources/"+fileName;
        startReading(filepath);
    }
}
`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{
`public class Main{
    public static void main(String[] args){
        System.out.println("Hello World!");
        String fileName = "matrizAdyacencias.txt";
        GraphReader graph = new GraphReader(fileName);
        graph.print();
        System.out.println("Vertexes: "+graph.getNumberOfNodes());
        System.out.println("Edges: "+graph.getNumberOfEdges());
        System.out.println("Vertex 1 order: "+graph.getVertexOrder(1));
        System.out.println("Vertex 2 order: "+graph.getVertexOrder(2));
        System.out.println("Vertex 3 order: "+graph.getVertexOrder(3));
        System.out.println("Vertex 4 order: "+graph.getVertexOrder(4));
        System.out.println("Vertex 5 order: "+graph.getVertexOrder(5));
    }
}
`}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{`public class Node{
    int vertex_order = 0;
    ArrayList<Integer> adjacency = new ArrayList<>();

    public void add(int number){
        adjacency.add(number);
        vertex_order += number == 1 ? 1 : 0;
    }

    public ArrayList<Integer> getAdjacency(){ return adjacency; }
    public int getVertex_order(){ return vertex_order; }
}`}
            </SyntaxHighlighter>
            <p>Calculate the values of n (number of vertices), m (number of edges) and degree of each of the
                vertices. Consider that your matrix is symmetric.<br></br><br></br>
                The calculation of the number of vertices, and vertex order and the number of edges is also done
                by the startReading method from the GraphReader class.
            </p>
            <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true}>
{
`public void startReading(String filepath){
    try{
        Scanner file_scan = new Scanner(new File(filepath));
        while(file_scan.hasNextLine()){
            Scanner nextLine = new Scanner(file_scan.nextLine());
            Node node = new Node();
            while(nextLine.hasNextInt()){
                node.add(nextLine.nextInt());
            }
            graph.add(node);
        }
        for(Node node: graph){
            numberOfEdges += node.getVertex_order();
        }
        numberOfEdges /= 2;
    }catch(FileNotFoundException e){
        e.printStackTrace();
    }
}
`
}
            </SyntaxHighlighter>
            <p>The vertex order sample is done by the getVertexOrder method from GraphReader class and called in the Main Class.</p>
            <SyntaxHighlighter language="java" style={atelierHeathLight} wrapLongLines={true} >
{
`public int getVertexOrder(int vertex){
    boolean inBounds = (vertex > 0) && (vertex <= graph.size());
    if(inBounds){
        return graph.get(vertex-1).getVertex_order();
    }else{
        System.out.println("Undefined vertex");
        return 0;
    }
}`}
            </SyntaxHighlighter>
            <p>By introducing as input the file shown below, the following results were obtained</p>
            <Images>
                <img src={file2} alt="File" />
                <img src={code1} alt="Code Results" />
            </Images>
            <h3 id="practica2/video">Performance</h3>
            <iframe src="https://www.youtube.com/embed/MaiD8eFvmnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 id="practica2/chaos">Chaos: Fractal Art - Part One</h3>
            <Images>
                <img src={slide1} alt="Slide 1" />
                <img src={slide2} alt="Slide 2" />
            </Images>
            <Images>
                <img src={slide3} alt="Slide 3" />
                <img src={slide4} alt="Slide 4" />
            </Images>
            <Images>
                <img src={slide5} alt="Slide 5" />
            </Images>
            <h3 id="practica2/chaos-2">Chaos: Fractal Art - Part Two</h3>
            <Images>
                <img src={slide7} alt="Slide 7" />
                <img src={slide8} alt="Slide 8" />
            </Images>
            <Images>
                <img src={slide9} alt="Slide 9" />
                <img src={slide10} alt="Slide 10" />
            </Images>
            <Images>
                <img src={slide11} alt="Slide 11" />
            </Images>
            <h3 id="practica2/conclusions">Conclusion</h3>
            <p>While doing this activity the information about graph characteristics was useful because some 
                members of the teams didn't knew what an edge nor node was, it was
                necessary to read something about graphs to be able to move on to the next part, the code, 
                it was decided to use Java as the programming language, its paradigm allow us to work with 
                three different classes and with this obtain the results. The structure was simple, a class for the 
                reader, the node and a main class that could execute the code, the calculation of the edges, 
                vertices, and the vertex degree was simple thanks to the teamwork and the information read. 
                The second part that talks about fractal art was so interesting because no one of us knew about 
                this and doing the research was incredible. We were able to know a little more about what 
                fractal art is and how we could code it.
            </p>
            <h3 id="practica2/references">References</h3>
            <Images>
                <img src={slide6} alt="slide6" />
                <img src={slide12} alt="slide12" />
            </Images>
        </Article>
        </div>
    )
}

export default Practica2