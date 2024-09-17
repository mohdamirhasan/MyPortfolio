const author = "Amir Hasan"
//open and close button for nav bar for media: max-width()
const hamBtnOpen = document.querySelector('.ham-open');
const hamBtnClose = document.querySelector('.ham-close');
const hamBox = document.querySelector('.ham-icon-box');
const FormSubmitBtn = document.querySelector('.submit-button');
const project1Btn = document.querySelector('.project-1');
const mainSection = document.querySelector('.main')
const project = document.querySelector('.project-netflix')
const project2Btn = document.querySelector('.project-2');
const project3Btn = document.querySelector('.project-3');
const backBtn = document.getElementById('back-btn');

hamBtnOpen.addEventListener('click', () =>{
    if (hamBox.classList.contains('d-none')){
        hamBox.classList.remove('d-none')
        hamBtnOpen.classList.add('d-none')
        hamBtnClose.classList.remove('d-none')
    }
})
hamBtnClose.addEventListener('click', ()=>{
    if (hamBox.classList.contains('.d-none') != true){
        hamBox.classList.add('d-none')
        hamBtnClose.classList.add('d-none')
        hamBtnOpen.classList.remove('d-none')
    }
})

FormSubmitBtn.addEventListener('click', () =>{
    var clientName = document.getElementById('m-name').value;
    var clientEmail = document.getElementById('email').value;
    var clientMessage = document.getElementById('message').value;
})

// Project-page Netflix line: 36-57
const pr1heading = "Netflix-Clone";
const pr1link = "https://mohdamirhasan.github.io/Netflix-Clone/";
const pr1img = "assets/netflix-clone.png";
const pr1para1 = "I was attracted by the user interface of Netflix's official website and decided to use it to demonstrate my front-end development skills. The project proved to be a valuable experience for me.";
const pr1para2 = "To recreate the user interface, I employed simple front-end development tools, ensuring it is responsive on all devices.";
const pr1tool1 = "HTML";
const pr1tool2 = "CSS";


project1Btn.addEventListener('click', () =>{
    document.getElementById('project-heading').innerHTML = pr1heading;
    document.getElementById('project-link').href = pr1link;
    document.getElementById('project-img').src = pr1img;
    document.getElementById('project-para-1').innerHTML = pr1para1;
    document.getElementById('project-para-2').innerHTML = pr1para2;
    document.getElementById('tool-1').innerHTML = pr1tool1;
    document.getElementById('tool-2').innerHTML = pr1tool2;
    document.getElementById('tool-1').classList.remove('d-none');
    document.getElementById('tool-2').classList.remove('d-none');
    mainSection.classList.add('d-none');
    project.classList.remove('d-none');
})


// project-page Ultraedit line: 61-82
const pr2heading = "Ultraedit-Clone";
const pr2link = "https://github.com/mohdamirhasan/UltraEdit-Clone";
const pr2img = "assets/ultraedit-clone.png";
const pr2para1 = "A clone of the text editor downloading website. The simple and plain user interface got my attention.";
const pr2para2 = "I saw it as an oportunity to show case my front-end develoment skills for such a static website.";
const pr2tool1 = "HTML";
const pr2tool2 = "CSS";

project2Btn.addEventListener('click', () =>{
    console.log("cliked")
    document.getElementById('project-heading').innerHTML = pr2heading;
    document.getElementById('project-link').href = pr2link;
    document.getElementById('project-img').src = pr2img;
    document.getElementById('project-para-1').innerHTML = pr2para1;
    document.getElementById('project-para-2').innerHTML = pr2para2;
    document.getElementById('tool-1').innerHTML = pr2tool1;
    document.getElementById('tool-2').innerHTML = pr2tool2;
    document.getElementById('tool-1').classList.remove('d-none');
    document.getElementById('tool-2').classList.remove('d-none');
    mainSection.classList.add('d-none');
    project.classList.remove('d-none');
})


// projectp-page Vector-Calculator line: 86-110
const pr3heading = "Vector-Calculator";
const pr3link = "https://mohdamirhasan.github.io/Vector-Calculator/";
const pr3img = "assets/vector-calculator.png";
const pr3para1 = "Welcome to our vector calculator! It'll help you perform and understand a whole bunch of vector operations.Do you have the Cartesian coordinates of two vectors, or just know their vector direction and magnitude? Maybe you need to find the vector between two points?";
const pr3para2 = "This vector calculator can deal with all those situations; it performs: Vector addition; Vector subtraction; Vector multiplication (both cross product and dot product!); Vector projections.";
const pr3tool1 = "HTML";
const pr3tool2 = "CSS";
const pr3tool3 = "JavaScript";

project3Btn.addEventListener('click', () =>{
    console.log("cliked")
    document.getElementById('project-heading').innerHTML = pr3heading;
    document.getElementById('project-link').href = pr3link;
    document.getElementById('project-img').src = pr3img;
    document.getElementById('project-para-1').innerHTML = pr3para1;
    document.getElementById('project-para-2').innerHTML = pr3para2;
    document.getElementById('tool-1').innerHTML = pr3tool1;
    document.getElementById('tool-2').innerHTML = pr3tool2;
    document.getElementById('tool-3').innerHTML = pr3tool3;
    document.getElementById('tool-1').classList.remove('d-none');
    document.getElementById('tool-2').classList.remove('d-none');
    document.getElementById('tool-3').classList.remove('d-none');
    mainSection.classList.add('d-none');
    project.classList.remove('d-none');
})

backBtn.addEventListener('click', () =>{
    console.log("hello");
    mainSection.classList.remove('d-none');
    project.classList.add('d-none');
})


const d = new Date();
let year = d.getFullYear();

document.getElementById('made-by').innerHTML = `©Copyright ${year}. Made by ${author}`
