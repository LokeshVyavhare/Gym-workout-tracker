

let grid_append = (id) => {
    document.getElementById(id).innerHTML = `<div><a href="demo.html">
    <p>Chest</p>
</a></div>
<div><a href="demo.html">
    <p>Biceps</p>
</a></div>
<div><a href="demo.html">
    <p>Triceps</p>
</a></div>
<div><a href="demo.html">
    <p>Back</p>
</a></div>
<div><a href="demo.html">
    <p>Shoulders</p>
</a></div>
<div><a href="demo.html">
    <p>Legs</p>
</a></div>
<div><a href="demo.html">
    <p>Abdomonal</p>
</a></div>
<div><a href="demo.html">
    <p>Combined</p>
</a></div>
<div><a href="demo.html">
    <p>Cardio</p>
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


}

export default grid_append;