import grid_append from './cate_exer_grid.js';
import { append_all_list, append_cate_list } from './exercises_appending.js';
import navbar2 from './Export_navbarB.js';
import exer_tabs from './export_comm_exer_tabs.js';
import { navbar, footer } from './Export_navbar&footerA.js'

document.querySelector('header').innerHTML = navbar2();
document.getElementById('comm_exr_tabs').innerHTML = exer_tabs();
grid_append('exer_9cate_grid');
document.querySelector('footer .footerv').innerHTML = footer();

let exer_cate = JSON.parse(localStorage.getItem('cate_exer'));


append_cate_list('exer_list', exer_cate);;


document.getElementById('all_exer_page').addEventListener('click', (event) => {
    window.location.href = './exercise-list.html';
})