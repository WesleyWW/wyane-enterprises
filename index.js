import './styles/style.scss';

document.addEventListener("DOMContentLoaded", function() { 
    const projects = document.querySelectorAll('.project');
    projects.forEach(
        function(currentValue, CurrentIndex, listObj) {

            const project = projects[CurrentIndex];

            const expandBtn = project.querySelector('.project-expand');

            expandBtn.addEventListener('click', () => {
                const info = project.querySelector('.project-info');
                info.classList.toggle('show');
            })
        }
    );

    const wyaneRealty = document.querySelector('#wyane-realty');
    wyaneRealty.addEventListener('mouseover', () => {
        document.body.classList.add('bg-wyane-realty');
    });
    wyaneRealty.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-wyane-realty');
    });

    const larosa = document.querySelector('#larosa');
    larosa.addEventListener('mouseover', () => {
        document.body.classList.add('bg-larosa');
    });
    larosa.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-larosa');
    });

    const titanCBD = document.querySelector('#titanCBD');
    titanCBD.addEventListener('mouseover', () => {
        document.body.classList.add('bg-titanCBD');
    });
    titanCBD.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-titanCBD');
    });

    const becky = document.querySelector('#becky-stylist');
    becky.addEventListener('mouseover', () => {
        document.body.classList.add('bg-becky-stylist');
    });
    becky.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-becky-stylist');
    });

    const mtBlog = document.querySelector('#mt-blog');
    mtBlog.addEventListener('mouseover', () => {
        document.body.classList.add('bg-mt-blog');
    });
    mtBlog.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-mt-blog');
    });

    

    const sortagram = document.querySelector('#sortagram');
    sortagram.addEventListener('mouseover', () => {
        document.body.classList.add('bg-sortagram');
    });
    sortagram.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-sortagram');
    });
});




