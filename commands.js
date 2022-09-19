var terminalWindow = document.getElementById("terminal-window");
var temp;
let innerList = "";
let listEvent = document.querySelector('.listEvent');
let textLabel = '<label><span class="cSlash">C:\\visitor@marcuschau</span> <span class="symbol">: ~ $</span></label>'

var github = "https://github.com/MarcusChau";
var linkedIn = "https://www.linkedin.com/in/marcus-chau-b88878221/";
var resumeFile = "/img/College Resume - Marcus Chau.pdf";
var instagram = "https://www.instagram.com/marcusrchau/";
var youtube = "https://www.youtube.com/channel/UCVr_FBbu-EICLoV8tuaU63A";
var gmail = "mailto:marcuschau8786@gmail.com?Subject=Ticket%20Inquiry";


let help = [
    '<br>',
    '<pre><li>  <span class="glow">about</span>      Who is Marcus Chau?</li></pre>',
    '<pre><li>  <span class="glow">projects</span>   View coding projects</li></pre>',
    '<pre><li>  <span class="glow">social</span>     Display social networks</li></pre>',
    '<pre><li>  <span class="glow">resume</span>     View my resume</li></pre>',
    '<pre><li>  <span class="glow">help</span>       Help??</li></pre>',
    '<pre><li>  <span class="glow">clear</span>      Clear Terminal</li></pre>',
    '<br>'
]

let about = [
    '<br>',
    '<li><span>About Me</span></li>',
    '<li><span>Marcus Chau</span></li>',
    '<li>I am a second-year undergraduate at NYU studying Computer Science with a double minor in Business Studies and Mathematics. I am currently a Software Developer for Invictus Property Advisors. Beyond work, school and side projects, I love to read, listen to music, workout, and play basketball with friends.</li>',
    '<br>'
]

let social = [
    '<br>',
    '<pre><li>  <a href="' + github + '" target="_blank"><span class="glow">github</span></a></li></pre>',
    '<pre><li>  <a href="' + linkedIn + '" target="_blank"><span class="glow">linkedIn</span></a></li></pre>',
    '<pre><li>  <a href="' + instagram + '" target="_blank"><span class="glow">instagram</span></a></li></pre>',
    '<pre><li>  <a href="' + youtube + '" target="_blank"><span class="glow">youtube</span></a></li></pre>',
    '<pre><li>  <a href="' + gmail + '"><span class="glow">gmail</span></a></li></pre>',
    '<br>'
]

let resume = [
    '<br>',
    '<pre><li>  <a href="' + resumeFile + '" target="_blank"><span class="glow">resume</span></a></li></pre>',
    '<br>'
]

let intro = [
    '<li>Hello my name is Marcus Chau</li>',
    '<li>Welcome to my interactive web terminal.</li>',
    '<li>For a list of available commands, type <span class="glow">\'help\'</span>.</li>'
]

innerList += "<div>" + intro.join('') + "</div>";
listEvent.innerHTML = innerList;

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        temp = terminalWindow.value;
        innerList += textLabel + "  " + temp ;
        listEvent.innerHTML = innerList;
        scrollDown();
        Command();
        terminalWindow.value = '';
        event.preventDefault();
    }
})


function Command() {
    switch(temp.toLowerCase()) {
        case 'help':
            console.log("help");
            innerList += "<div>" + help.join('') + "</div>";
            listEvent.innerHTML = innerList;
            scrollDown();
            break;
        case 'about':
            console.log("about");
            innerList += "<div>" + about.join('') + "</div>";
            listEvent.innerHTML = innerList;
            scrollDown();
            break;
        case 'social':
            console.log("social");
            innerList += "<div>" + social.join('') + "</div>";
            listEvent.innerHTML = innerList;
            scrollDown();
            break;
        case 'resume':
            console.log("resume");
            window.open(resumeFile);
            innerList += "<div>" + resume.join('') + "</div>";
            listEvent.innerHTML = innerList;
            scrollDown();
            break;
        case 'clear':
            console.log('clear');
            innerList = "";
            listEvent.innerHTML = "";
            scrollDown();
            break;
        default:
            innerList += "<div>Command not found. For list of commands, type <span class='glow'>'help'</span>.</div>";
            listEvent.innerHTML = innerList;
            break;
    }
}

function scrollDown() {
    window.scrollBy(0,3000);
}
