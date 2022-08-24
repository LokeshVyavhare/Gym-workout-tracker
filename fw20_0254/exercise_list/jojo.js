import gym from './data.js'

document.getElementById('add').addEventListener('click', async () => {
    let data = {
        title: document.getElementById('title').value,
        img1: document.getElementById('img1').value,
        img2: document.getElementById('img2').value,
        desc: document.getElementById('desc').value,
        cate: 'Biceps',
        steps: document.getElementById('steps').value,
        tips: document.getElementById('tips').value,
    };
    try {
        let req = await fetch('http://localhost:3000/gym', {
            method: 'POST',

            body: JSON.stringify(data),

            headers: {
                'Content-Type': 'application/json',
            }
        })
        let data2 = await req.json();
    } catch (rej) {

    }
})

let data2 = JSON.parse(JSON.stringify(gym));
