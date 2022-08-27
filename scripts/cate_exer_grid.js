let cateMock = (id) => {
    let temp = document.querySelectorAll(`#${id} a`);
    for (let i = 0; i < 9; i++) {
        temp[i].addEventListener('click', (event) => {
            localStorage.setItem('cate_exer', JSON.stringify(event.target.id));
        })
    }
}

let grid_append = (id) => {
    document.getElementById(id).innerHTML = `<div><a id='Chest' href="./exercise_category.html">
    <p id='Chest'>Chest</p>
</a></div>
<div><a id='Biceps' href="./exercise_category.html">
    <p id='Biceps'>Biceps</p>
</a></div>
<div><a id='Triceps' href="./exercise_category.html">
    <p id='Triceps'>Triceps</p>
</a></div>
<div><a id='Back' href="./exercise_category.html">
    <p id='Back'>Back</p>
</a></div>
<div><a id='Shoulder' href="./exercise_category.html">
    <p id='Shoulder'>Shoulders</p>
</a></div>
<div><a  id='Legs' href="./exercise_category.html">
    <p id='Legs'>Legs</p>
</a></div>
<div><a id='Abdominal' href="./exercise_category.html">
    <p id='Abdominal'>Abdominal</p>
</a></div>
<div><a id='Combined' href="./exercise_category.html">
    <p id='Combined'>Combined</p>
</a></div>
<div><a id='Cardio' href="./exercise_category.html">
    <p id='Cardio'>Cardio</p>
</a></div>`;
    let arr = ['https://www.gymwolf.com/images/category_chest.jpg',
        'https://www.gymwolf.com/images/category_biceps.jpg',
        'https://www.gymwolf.com/images/category_triceps.jpg',
        'https://www.gymwolf.com/images/category_back.jpg',
        'https://www.gymwolf.com/images/category_shoulder.jpg',
        'https://www.gymwolf.com/images/category_legs.jpg',
        'https://www.gymwolf.com/images/category_abdominal.jpg',
        'https://www.gymwolf.com/images/category_combined.jpg',
        'https://www.gymwolf.com/images/category_cardio.jpg',
    ]

    for (let i = 0; i < 9; i++) {
        document.querySelector(`#exer_9cate_grid>div:nth-child(${i + 1})`).style.background = `url(${arr[i]})`;
    }

    cateMock(id);


}



export default grid_append;