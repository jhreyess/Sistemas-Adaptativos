(this.webpackJsonpghpages=this.webpackJsonpghpages||[]).push([[0],{263:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(19),c=s.n(n),r=s(8),o=s(2),h=(s(31),s(26)),d=(s(32),s(0));var l=function(){var e=Object(i.useState)(window.matchMedia("(min-width: 750px)").matches),t=Object(h.a)(e,2),s=t[0],a=t[1];Object(i.useEffect)((function(){window.matchMedia("(min-width: 750px)").addListener((function(e){return a(e.matches)}))}),[]);var n=s?null:Object(d.jsx)(i.Fragment,{children:Object(d.jsx)("div",{className:"navbarBanner",children:Object(d.jsxs)("div",{className:"burgerIcon",onClick:function(e){e.target.classList.toggle("active");var t=document.getElementById("navbarLinks");t.classList.toggle("open"),t.classList.toggle("close")},children:[Object(d.jsx)("div",{className:"burgerLine"}),Object(d.jsx)("div",{className:"burgerLine"}),Object(d.jsx)("div",{className:"burgerLine"})]})})});return Object(d.jsxs)("nav",{className:"navbar",children:[n,Object(d.jsxs)("div",{className:"navbarLinks close",id:"navbarLinks",children:[Object(d.jsx)(r.b,{to:"/practica1",activeClassName:"active",children:"Practica 1"}),Object(d.jsx)(r.b,{to:"/practica2",activeClassName:"active",children:"Practica 2"}),Object(d.jsx)(r.b,{to:"/practica3",activeClassName:"active",children:"Practica 3"}),Object(d.jsx)(r.b,{to:"/practica4",activeClassName:"active",children:"Practica 4"}),Object(d.jsx)(r.b,{to:"/pia",activeClassName:"active",children:"PIA"})]})]})},j=s(267),b=s(266);s(39);var m=function(e){return Object(d.jsx)("div",{className:"sidebarWrapper",children:Object(d.jsx)("nav",{className:"sidebar",children:e.children})})};s(40);var f=function(e){return Object(d.jsx)("article",{className:"section",children:e.children})};s(41);var u=function(e){return Object(d.jsx)("div",{className:"imgWrapper",children:e.children})};s(42);var p=function(e){return Object(d.jsx)("div",{className:"table",children:Object(d.jsx)("table",{children:e.children})})};s(43);var x=function(e){return Object(d.jsx)("div",{className:"legend",children:Object(d.jsx)("span",{children:e.children})})},g=s.p+"static/media/roads.4c91e9c8.jpg",O=s.p+"static/media/cases.67fb771b.jpg",v=s.p+"static/media/graph.69f3fb79.jpg",w=s.p+"static/media/equation1.7375545f.jpg",y=s.p+"static/media/queue.322f7b35.jpg";var T=function(){return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)(m,{children:[Object(d.jsx)("a",{href:"#practica1/description",children:"Description"}),Object(d.jsx)("a",{href:"#practica1/objectives",children:"Objectives"}),Object(d.jsx)("a",{href:"#practica1/introduction",children:"Introduction"}),Object(d.jsx)("a",{href:"#practica1/design",children:"Design"}),Object(d.jsx)("a",{href:"#practica1/code",children:"Code"}),Object(d.jsx)("a",{href:"#practica1/video",children:"Performance"}),Object(d.jsx)("a",{href:"#practica1/conclusions",children:"Conclusions"}),Object(d.jsx)("a",{href:"#practica1/references",children:"References"})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h1",{children:"Adaptive Algorithm"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{id:"practica1/description",children:"Description"}),Object(d.jsx)("p",{children:"In this activity it will be implemented a system that simulates congested streets and it adjust automatically the duration of the green traffic lights on the streets."}),Object(d.jsx)("h3",{id:"practica1/objectives",children:"Objectives"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Implement Traffic light control in an environment of intersections and avenues of various senses"}),Object(d.jsx)("li",{children:"Make a report where you can describe your work and the results you got"})]}),Object(d.jsx)("h3",{id:"practica1/introduction",children:"Introduction"}),Object(d.jsx)("p",{children:"The problem was solved using Python and different modules such as Pygame for the simulation displaying and threading for the execution of the algorithm. The first task done was to creade the environment of intersectios and congested streets, after that, it was necesary to consider the different ways how adjustment could be solved, in this case, the analysis of the street lanes senses allows us to determine the quantity of queues and servers that the system have. Later in this document, it will be possible to observe the development of a MVC architecture implementing queues and threads."}),Object(d.jsx)("h3",{id:"practica1/design",children:"Cross Street Design"}),Object(d.jsxs)("p",{children:["In the diagram below, the different directions of the street lanes are shown, in which it is possible to see the straight direction and the turn direction.",Object(d.jsx)("br",{}),"A symbology is attached to each lane to allow understanding of the problem."]}),Object(d.jsx)(u,{children:Object(d.jsx)("img",{src:g,alt:"Roads"})}),Object(d.jsx)("h3",{children:"Graphic Scheme"}),Object(d.jsx)(u,{children:Object(d.jsx)("img",{src:O,alt:"Graph"})}),Object(d.jsx)("h3",{children:"Conflict matrix"}),Object(d.jsxs)(p,{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("th",{children:"A1"}),Object(d.jsx)("th",{children:"A2"}),Object(d.jsx)("th",{children:"B1"}),Object(d.jsx)("th",{children:"B2"}),Object(d.jsx)("th",{children:"C1"}),Object(d.jsx)("th",{children:"C2"}),Object(d.jsx)("th",{children:"D1"}),Object(d.jsx)("th",{children:"D2"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Case 1"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Case 2"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Case 3"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Case 4"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"0"}),Object(d.jsx)("td",{children:"1"})]})]})]}),Object(d.jsx)("h3",{children:"Solution Design"}),Object(d.jsx)("p",{children:"The first thing done was the separation of cases graphicly, in the image below it's possible to see the four cases and the street lanes that they integrate."}),Object(d.jsx)(u,{children:Object(d.jsx)("img",{src:v,alt:"Road cases"})}),Object(d.jsx)("p",{children:"Subsequently it was necessary a mecanism to determine how many servers and queues the system would have and the service mechanism to be implemented. The next image represents the queue system that will be implemented. The input source has infinite size, this is because the cars will arrive randomly, and their arrival times are probabilistic. In this case the queue capacity is considered finite. The service discipline is a FIFO structure where the cars of one queue are catered while the other one is waiting. The time of service will be given by the traffic light considering the number of cars in each street lane at its service and given by the following equation."}),Object(d.jsx)(u,{children:Object(d.jsx)("img",{src:w,alt:"Equation (1)"})}),Object(d.jsx)(x,{children:"Where 'n' is the number of cars in the queue, 't' stands for the pedestrian crossing time and 'm' is the maximum number of cars that can be in the queue."}),Object(d.jsx)("p",{children:"In the straight lanes, base time never goes under t, this allows to pedestrians to have a reference of the minimum time to cross the street, in this case 't' seconds. The green light assignation is a variable between the straight roads and the turn roads, because while the cars of the turn roads are moving, the pedestrian can\xb4t cross, so in the X2 and Y2 roads the time is given by an arithmetic operation and in the X1 and Y1 roads the value of the operation is added to 5."}),Object(d.jsx)("p",{children:"The served clients are those cars that have already left behind the traffic light."}),Object(d.jsx)(u,{children:Object(d.jsx)("img",{src:y,alt:"Queues"})}),Object(d.jsx)("h3",{id:"practica1/code",children:"Code"}),Object(d.jsx)("p",{children:"In the programming stage the problem was to find a correct way to make the system, implementing tools such as threads. The solution was obtained through the analysis of each member of the team. The general idea is raised grouping the street lanes by pairs, each pair was named by its position, (vertical = Y, horizontal = X), and by its direction (straight = 1, turn = 2), getting four groups described in the next list: "}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"roadsX1 : A1 C1"}),Object(d.jsx)("li",{children:"roadsX2 : A2 C2"}),Object(d.jsx)("li",{children:"roadsY1 : B1 D1"}),Object(d.jsx)("li",{children:"roadsY2 : B2 D2"})]}),Object(d.jsxs)("p",{children:["The first time of the green light was defined by the number of cars in the street lanes having a self adjustment that allows a better vehicular flow.",Object(d.jsx)("br",{}),"The movement of the cars was done by the following function."]}),Object(d.jsx)("div",{className:"coding",children:Object(d.jsx)(j.a,{language:"python",style:b.a,wrapLongLines:!0,children:"\n    def move(self, isGreen):\n        self.canMove = self.calculateDistance(self.stopPlace)\n        self.isRoadClear = self.calculateCarDistance()\n        if((self.isRoadClear and self.canMove) or isGreen):\n            if self.isVertical:\n                self.posY -= self.sign*self.carSpeed\n            else:\n                self.posX -= self.sign*self.carSpeed\n            if((self.posX < -400) or (self.posX > 1040) or (self.posY > 1040) or (self.posY < -400)):\n                self.newCoords()\n    "})}),Object(d.jsx)("p",{children:"The different states of each traffic light are given by the next code:"}),Object(d.jsx)("div",{className:"coding",children:Object(d.jsx)(j.a,{language:"python",style:b.a,wrapLongLines:!0,children:"\n    def init(self):\n        while True:\n            if(self.state==1):\n                self.roadsX1.setState(True) # Turn Green\n                time = self.roadsX1.getTime()*(self.cross_time/self.maxCars) + self.cross_time\n                sleep(time)\n                self.roadsX1.setState(False) # Turn Red\n\n            elif(self.state==2):\n                self.roadsX2.setState(True) # Turn Green\n                time = self.roadsX2.getTime()*(self.cross_time/self.maxCars)\n                sleep(time)\n                self.roadsX2.setState(False) # Turn Red\n\n            elif(self.state==3):\n                self.roadsY1.setState(True) # Turn Green\n                time = self.roadsY1.getTime()*(self.cross_time/self.maxCars) + self.cross_time\n                sleep(time)\n                self.roadsY1.setState(False) # Turn Red\n\n            elif(self.state==4):\n                self.roadsY2.setState(True) # Turn Green\n                time = self.roadsY2.getTime()*(self.cross_time/self.maxCars)\n                sleep(time)\n                self.roadsY2.setState(False) # Turn Red\n                self.state = 0\n            \n            self.state += 1\n            if self.stop_threads:\n                self.roadsX1.stop()\n                self.roadsX2.stop()\n                self.roadsY1.stop()\n                self.roadsY1.stop()\n    "})}),Object(d.jsx)("p",{children:"And the final time is obtained by the comparation between street lanes of each group of road, this because there are 2 servers, one for each axis (X and Y) and the time in which the cars advance is the opposite. (X1,Y1) and (X2,Y2)"}),Object(d.jsx)("div",{className:"coding",children:Object(d.jsx)(j.a,{language:"python",style:b.a,wrapLongLines:!0,children:"\n    def getTime(self):\n        time1 = self.trafficLight1.getCrossTime()\n        time2 = self.trafficLight2.getCrossTime()\n        return time1 if time1 > time2 else time2\n    "})}),Object(d.jsx)("p",{children:"The code in the main view file is the following:"}),Object(d.jsx)("div",{className:"coding",children:Object(d.jsx)(j.a,{language:"python",style:b.a,wrapLongLines:!0,children:"\n    import sys, pygame\n    import threading\n    from controller.roads import Roads\n\n    pygame.init()\n\n    # Screen settings\n    scale = {'width': 640, 'height': 640}\n    screen = pygame.display.set_mode((scale['width'], scale['height']))\n    pygame.display.set_caption(\"Traffic Lights\")\n    clock = pygame.time.Clock()\n\n    roads = Roads(screen)\n    roads_thread = threading.Thread(target=roads.init, name=\"Roads thread\").start()\n\n    while True:\n        for event in pygame.event.get():\n            if event.type == pygame.QUIT:\n                roads.stop_threads = True\n                pygame.quit()\n                sys.exit()\n        \n        roads.show()\n        roads.update()\n\n        clock.tick(60)\n    "})}),Object(d.jsx)("h3",{id:"practica1/video",children:"Performance"}),Object(d.jsx)("iframe",{style:{width:"100%",height:"25vw"},src:"https://www.youtube.com/embed/epZEQi-c4bI",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(d.jsx)("h3",{id:"practica1/conclusions",children:"Conclusion"}),Object(d.jsx)("p",{children:"This activity was a total challenge for the teamwork, before reading the theory that involves an auto adjust system the ideas that each member had were too different to the final product. The correct analysis of the problem considering all the factors that can influence the output was very important, in this case it was necessary to see some videos about the topic and read some web pages about how an auto adjust system works, including theory about queues, threads, modular programming and the MVC architecture. Working with Python was simple because the implementation of its module named Pygame allows a better manipulation of the graphic interface and his components than other programming languages. The main problem was to create some threads that allow the execution of the different parts of the system such as queues (of cars) and servers (traffic lights), but it was solved with the structure mentioned before, the other problem was to implement the auto adjust, this considering the number of cars of the road that will advance and the time for the people that will cross the streets, this also was solved with the support of all the teamwork making a process based on an arithmetic operation. The problems made each member to think about a solution and give the idea to all the other members so with this the construction of this auto adjust system the team could reach the objectives and have a great solution of the traffic light control. To finalize, some improves that would be implemented are the substitution of the figures that make up the car for an image that represent better the concept, the same for the traffic lights, the last thing that would change is the duration of the green light for a more realistic, in this case the velocity of the cars must change."}),Object(d.jsx)("h3",{id:"practica1/references",children:"References"}),Object(d.jsxs)("ol",{children:[Object(d.jsxs)("li",{children:["3.9.7 Documentation. (n.d.). Python. Retrieved September 20, 2021, from ",Object(d.jsx)("a",{href:"https://docs.python.org/3/",children:"python.org"})]}),Object(d.jsxs)("li",{children:["Pygame Front Page - pygame v2.0.1. documentation. (n.d.). Retrieved September 20, 2021, from ",Object(d.jsx)("a",{href:"https://www.pygame.org/docs",children:"pygame.org"})]}),Object(d.jsxs)("li",{children:["Python threading tutorial: Run Code Concurrently Using the Threading Module. (2019) ",Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=IEEhzQoKtQU",children:"Youtube"})]}),Object(d.jsxs)("li",{children:["Svirca, Z. (2020, May 30). Everything you need to know about MVC architecture - Towards Data Science. Medium ",Object(d.jsx)("a",{href:"https://towardsdatascience.com/everything-you-need-to-know-about-mvc-architecture-3c827930b4c1#:%7E:text=%2DMVC%20is%20an%20architectural%20pattern,is%20invented%20",children:"Towards Data Science"})]}),Object(d.jsxs)("li",{children:["Teor\xeda de Colas Conceptos b\xe1sicos. (2012, March, 23). ",Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=jb3_zvj0w_c",children:"Youtube"})]})]})]})]})};var C=function(){return Object(d.jsx)(f,{children:"Work in progress..."})};var k=function(){return Object(d.jsx)(f,{children:"Work in progress..."})};var N=function(){return Object(d.jsx)(f,{children:"Work in progress..."})};var S=function(){return Object(d.jsx)(f,{children:"Work in progress..."})},L=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/practica1",component:T}),Object(d.jsx)(o.a,{exact:!0,path:"/practica2",component:C}),Object(d.jsx)(o.a,{exact:!0,path:"/practica3",component:k}),Object(d.jsx)(o.a,{exact:!0,path:"/practica4",component:N}),Object(d.jsx)(o.a,{exact:!0,path:"/pia",component:S}),Object(d.jsx)(o.a,{path:"/",component:T})]})]})})};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))},31:function(e,t,s){},32:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){}},[[263,1,2]]]);
//# sourceMappingURL=main.8038e50d.chunk.js.map