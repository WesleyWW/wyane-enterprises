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

    // const cocinaAma = document.querySelector('#cocina-ama');
    // cocinaAma.addEventListener('mouseover', () => {
    //     document.body.classList.add('bg-cocina-ama');
    // });
    // cocinaAma.addEventListener('mouseleave', () => {
    //     document.body.classList.remove('bg-cocina-ama');
    // });

    const sortagram = document.querySelector('#sortagram');
    sortagram.addEventListener('mouseover', () => {
        document.body.classList.add('bg-sortagram');
    });
    sortagram.addEventListener('mouseleave', () => {
        document.body.classList.remove('bg-sortagram');
    });
});




