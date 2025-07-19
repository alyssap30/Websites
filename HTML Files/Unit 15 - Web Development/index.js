// Navigation Bar
document.getElementById("home-button").onclick = function() {
    window.location.href = "home.html"};

document.getElementById("dev-button").onclick = function() {
    window.location.href = "developers.html"};

document.getElementById("job-button").onclick = function() {
    window.location.href = "apply-job.html"};

document.getElementById("courses-button").onclick= function() {
    window.location.href = "courses.html"};

// Remove Background Image

document.getElementById("remove-btn").onclick = function() {
    document.getElementById("removebackgroundbox").style.display = "block"};

document.getElementById("colour1").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "red"};

document.getElementById("colour2").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "salmon"};

document.getElementById("colour3").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "yellow"};

document.getElementById("colour4").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "yellowgreen"};

document.getElementById("colour5").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "green"};

document.getElementById("colour6").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "lightgreen"};

document.getElementById("colour7").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "lightblue"};

document.getElementById("colour8").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "skyblue"};

document.getElementById("colour9").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "blue"};  

document.getElementById("colour10").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "blueviolet"};

document.getElementById("colour11").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "violet"};

document.getElementById("colour12").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "purple"};

document.getElementById("colour13").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "lightgray"};

document.getElementById("colour14").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "white"};

document.getElementById("colour15").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "grey"};

document.getElementById("colour16").onclick = function() {
    document.getElementById("Background").style.display = "none";
    document.body.style.backgroundColor = "black"};

document.getElementById("closecolour").onclick = function() {
    document.getElementById("removebackgroundbox").style.display = "none"}

//Apply for a course
const CourseApplicationForm = document.getElementById("applicationboxcourses");
const CourseName = document.getElementById("courseselected");

document.getElementById("applycourse1").onclick = function() {
    CourseApplicationForm.style.display = "block"; 
    CourseName.textContent = "Front-end Developer"};

document.getElementById("applycourse2").onclick = function() {
    CourseApplicationForm.style.display = "block"; 
    CourseName.textContent = "Back-end Developer"};

document.getElementById("applycourse3").onclick = function() {
    CourseApplicationForm.style.display = "block"; 
    CourseName.textContent = "Full-Stack Developer"};

document.getElementById("applycourse4").onclick = function() {
    CourseApplicationForm.style.display = "block"; 
    CourseName.textContent = "CSS Full Course"};

document.getElementById("applycourse5").onclick = function() {
    CourseApplicationForm.style.display = "block"; 
    CourseName.textContent = "HTML Full Course"};

document.getElementById("applycourse6").onclick = function() {
    CourseApplicationForm.style.display = "block"; 
    CourseName.textContent = "JavaScript Full Course"};

document.getElementById("cancelcourse").onclick = function() {
    CourseApplicationForm.style.display = "none"};

document.getElementById("applycourse").onclick = function() {
    CourseApplicationForm.style.display = "none";
    document.getElementById("completecourseapplication").style.display = "block"};

document.getElementById("close").onclick = function() {
    document.getElementById("completecourseapplication").style.display = "none";
};

//Apply for a job

document.getElementById("home-button").onclick = function() {
    window.location.href = "home.html"};

    document.getElementById("dev-button").onclick = function() {
        window.location.href = "developers.html"};

    document.getElementById("job-button").onclick = function() {
        window.location.href = "apply-job.html"};

    document.getElementById("courses-button").onclick= function() {
        window.location.href = "courses.html"};
        

    const JobApplicationForm = document.getElementById("applicationboxjobs");
    const JobName = document.getElementById("jobselected");

    document.getElementById("applyjob1").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Front-end Developer"};

    document.getElementById("applyjob2").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Back-end Developer"};

    document.getElementById("applyjob3").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Full-Stack Developer"};

    document.getElementById("applyjob4").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Software Tester"};

    document.getElementById("applyjob5").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "UI Designer"};

    document.getElementById("applyjob6").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "SEO Specialist"};

    document.getElementById("applyjob7").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Database Administrator"};

    document.getElementById("applyjob8").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Project Manager"};

    document.getElementById("applyjob9").onclick = function() {
        JobApplicationForm.style.display = "block";
        JobName.textContent = "Cyber Specialist"};
        
    document.getElementById("canceljob").onclick = function() {
        JobApplicationForm.style.display = "none"};

    document.getElementById("applyjob").onclick = function() {
        JobApplicationForm.style.display = "none";
        document.getElementById("completejobapplication").style.display = "block"};

    document.getElementById("close2").onclick = function() {
        document.getElementById("completejobapplication").style.display = "none"};