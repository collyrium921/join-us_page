document.addEventListener('DOMContentLoaded', function() {
    var i = 0,
        element_image = document.getElementsByClassName('image'),
        element_heading = document.getElementsByClassName('heading');
    document.getElementById('content').classList.add('opacity_one');

    function slide() {
        element_image[i].classList.add('image-' + i);
        element_image[i].classList.add('opacity_one');
        element_image[(i + 9) % 10].classList.remove('opacity_one');
        element_heading[i].classList.add('opacity_one');
        setTimeout(function() {
            element_heading[(i + 9) % 10].classList.remove('opacity_one');
        }, 1300)
        i++;
        if (i == 10) i = 0;
        setTimeout(slide, 3000);
    }
    setTimeout(slide, 2000);
});


// window.onresize = function() {
//     var image_size = document.getElementById('images').offsetHeight,
//         content_size = document.getElementById('content').offsetHeight,
//         window_height = document.documentElement.clientHeight;
//     remaining_height = window_height - image_size;
//     if (content_size < remaining_height) {
//         document.getElementById('content').style.marginTop = remaining_height - content_size + 'px';
//     }
// }