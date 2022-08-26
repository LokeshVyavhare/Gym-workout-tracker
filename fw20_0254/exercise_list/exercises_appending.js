import { getData, getCate, getID } from './exercise_list_export.js';

let append_all_list = (id) => {
    document.getElementById(id).innerHTML = '';

    let all = ['Back', 'Biceps', 'Chest', 'Triceps'];
    all.forEach((i) => {
        let h2 = document.createElement('h2');
        h2.innerText = i;
        document.getElementById(id).append(h2);
        let data = getCate(i);
        data.forEach(element => {
            let div = document.createElement('div');
            div.classList.add('exercise_list_ele')

            let div1 = document.createElement('div');

            let div2 = document.createElement('div');

            let image = document.createElement('img');

            let count = false;
            setInterval(() => {
                if (count) {
                    image.src = element.img1;
                } else {
                    image.src = element.img2;
                }
                count = !count
            }, 1000);
            div1.append(image);

            let a = document.createElement('a');
            a.href = './detailed_exer.html';
            a.innerText = element.title;
            a.id = element.id;



            let p = document.createElement('p');
            p.innerText = element.desc;

            div2.append(a, p);

            div.append(div1, div2);
            document.getElementById(id).append(div);
        });
    });

}

let append_cate_list = (id, cate) => {
    document.getElementById(id).innerHTML = '';


    let h2 = document.createElement('h2');
    h2.innerText = cate;
    document.getElementById(id).append(h2);
    let data = getCate(cate);
    data.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('exercise_list_ele')

        let div1 = document.createElement('div');

        let div2 = document.createElement('div');

        let image = document.createElement('img');

        let count = false;
        setInterval(() => {
            if (count) {
                image.src = element.img1;
            } else {
                image.src = element.img2;
            }
            count = !count
        }, 1000);
        div1.append(image);

        let a = document.createElement('a');
        a.href = './detailed_exer.html';
        a.innerText = element.title;
        a.id = element.id;



        let p = document.createElement('p');
        p.innerText = element.desc;

        div2.append(a, p);

        div.append(div1, div2);
        document.getElementById(id).append(div);
    });

}



export { append_all_list, append_cate_list };