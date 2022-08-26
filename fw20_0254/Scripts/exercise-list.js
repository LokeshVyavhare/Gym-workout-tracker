import grid_append from '../grid_category/cate_exer_grid.js';
import { append_all_list, append_cate_list } from '../exercise_list/exercises_appending.js';
import navbar2 from '../../Umer_Ahmad_fw20_0026/JS/nav.js';
import exer_tabs from '../comm_exer_tabs/export.js';
import { navbar, footer } from '../../fw20_1110/components/navbar&footer.js'

document.querySelector('header').innerHTML = navbar2();
document.getElementById('comm_exr_tabs').innerHTML = exer_tabs();

grid_append('exer_9cate_grid');



document.querySelector('footer .footerv').innerHTML = footer();

append_all_list('exer_list');

