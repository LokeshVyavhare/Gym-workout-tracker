import grid_append from '../grid_category/cate_exer_grid.js';
import { append_all_list } from '../exercise_list/exercises_appending.js';
import navbar2 from '../../Umer_Ahmad_fw20_0026/JS/nav.js';
document.querySelector('header').innerHTML = navbar2();
import { navbar, footer } from '../../components/navbar&footer.js'

grid_append('exer_9cate_grid');

document.querySelector('footer').innerHTML = footer();

append_all_list('exer_list');

