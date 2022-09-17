var terminalWindow = document.getElementById("terminal-window");
var temp;
let innerList = "";
let listEvent = document.querySelector('.listEvent');
let textLabel = '<label><span class="cSlash">C:\\visitor@marcuschau</span> <span class="symbol">: ~ $</span></label>'

let help = [
    '<br>',
    '<pre><li>  <span class="glow">whois</span>      Who is Marcus Chau?</li></pre>',
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

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        temp = terminalWindow.value;
        innerList += textLabel + "  " + temp ;
        listEvent.innerHTML = innerList;
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
            break;
        case 'about me':
            console.log("about me");
            innerList += "<div>" + about.join('') + "</div>";
            listEvent.innerHTML = innerList;
            break;
        default:
            innerList += "<div>Command not found. For list of commands, type 'help'.</div>";
            listEvent.innerHTML = innerList;
    }
}
