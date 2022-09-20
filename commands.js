var terminalWindow = document.getElementById("terminal-window");
var temp;
let innerList = "";
let listEvent = document.querySelector('.listEvent');
let textLabel = '<label><span class="cSlash">C:visitor@marcuschau</span> <span class="symbol">: ~ $</span></label>'

var github = "https://github.com/MarcusChau";
var linkedIn = "https://www.linkedin.com/in/marcus-chau-b88878221/";
var resumeFile = "/img/College Resume - Marcus Chau.pdf";
var instagram = "https://www.instagram.com/marcusrchau/";
var youtube = "https://www.youtube.com/channel/UCVr_FBbu-EICLoV8tuaU63A";
var gmail = "mailto:marcuschau8786@gmail.com";

let history = [

]

let help = [
    '<br>',
    '<pre><li>  <span class="glow">about</span>         <span class="term">Who is Marcus Chau?</span></li></pre>',
    '<pre><li>  <span class="glow">whatis</span>        <span class="term">What is life?</span></li></pre>',
    '<pre><li>  <span class="glow">quotes</span>        <span class="term">Who said what?</span></li></pre>',
    '<pre><li>  <span class="glow">projects</span>      <span class="term">View coding projects</span></li></pre>',
    '<pre><li>  <span class="glow">social</span>        <span class="term">Display social networks</span></li></pre>',
    '<pre><li>  <span class="glow">resume</span>        <span class="term">View my resume</span></li></pre>',
    '<pre><li>  <span class="glow">email</span>         <span class="term">Please don\'t spam!</span></li></pre>',
    '<pre><li>  <span class="glow">history</span>       <span class="term">What happend before?</span></li></pre>',
    '<pre><li>  <span class="glow">help</span>          <span class="term">Help??</span></li></pre>',
    '<pre><li>  <span class="glow">clear</span>         <span class="term">Clear Terminal</span></li></pre>',
    '<pre><li>  <span class="glow">banner</span>        <span class="term">Header?</span></li></pre>',
    '<br>'
]

let about = [
    '<br>',
    '<li><span class="term">Hey, I am Marcus Chau!👋</span></li>',
    '<br>',
    '<li><span class="term">I am a second-year undergraduate at NYU studying Computer Science with a double minor in Business Studies and Mathematics. I am currently a Software Developer for Invictus Property Advisors. Beyond work, school and side projects, I love to read, listen to music, workout, and play basketball with friends. I also love teaching my peers computer science.</span></li>',
    '<br>'
]

let social = [
    '<br>',
    '<pre><li>  <span class="term">github</span>         <a href="' + github + '" target="_blank"><span class="links">github/marcuschau</span></a></li></pre>',
    '<pre><li>  <span class="term">linkedin</span>       <a href="' + linkedIn + '" target="_blank"><span class="links">linkedin/marcuschau</span></a></li></pre>',
    '<pre><li>  <span class="term">instagram</span>      <a href="' + instagram + '" target="_blank"><span class="links">instagram/marcus</span></a></li></pre>',
    '<pre><li>  <span class="term">youtube</span>        <a href="' + youtube + '" target="_blank"><span class="links">youtube/marcus</span></a></li></pre>',
    '<br>'
]

let resume = [
    '<br>',
    '<pre><li>  <a href="' + resumeFile + '" target="_blank"><span class="glow">resume</span></a></li></pre>',
    '<br>'
]

let email = [
    '<pre><li><span class="term">Opening mailto:</span><a href="' + gmail + '"> <span class="links">marcuschau8786@gmail.com</span></a><span class="term">...</span></li></pre>'
]

let banner = [
    '<li><span class="term">Hello my name is Marcus Chau</span></li>',
    '<li><span class="term">Welcome to my interactive web terminal.</span></li>',
    '<li><span class="term">For a list of available commands, type</span> <span class="glow">\'help\'</span><span class="term">.</span></li>'
]

let whatis = [
    '<br>',
    '<pre><li>  <span class="term">The paradox of "What is life?" is: we never know, but it\'s up to you to discover it.</span></li></pre>',
    '<br>'
]

let quotes = [

]


innerList += "<div>" + banner.join('') + "</div>";
listEvent.innerHTML = innerList;

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        temp = terminalWindow.value;
        history.push("<li>" + temp + "</li>");
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
        case 'whatis':
            console.log("whois");
            innerList += "<div>" + whatis.join('') + "</div>";
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
            innerList += "<div>" + resume.join('') + "</div>";
            listEvent.innerHTML = innerList;
            window.open(resumeFile);
            scrollDown();
            break;
        case 'email':
            console.log("email");
            innerList += "<div>" + email.join('') + "</div>";
            listEvent.innerHTML = innerList;
            window.open(gmail);
            scrollDown();
            break;
        case 'clear':
            console.log('clear');
            innerList = "";
            listEvent.innerHTML = "";
            scrollDown();
            break;
        case 'history':
            console.log('history');
            innerList += "<div>" + history.join('') + "</div>";
            listEvent.innerHTML = innerList;
            scrollDown();
            break;
        case 'banner':
            console.log('banner');
            innerList += "<div>" + banner.join('') + "</div>";
            listEvent.innerHTML = innerList;
            scrollDown();
            break;
        default:
            innerList += "<div><span class='default'>Command not found. For list of commands, type </span><span class='glow'>'help'</span><span class='default'>.</span></div>";
            listEvent.innerHTML = innerList;
            break;
    }
}

function scrollDown() {
    window.scrollBy(0,3000);
}
