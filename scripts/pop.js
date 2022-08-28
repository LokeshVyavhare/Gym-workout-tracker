let blk_scr = () => {
    let blk_scrn = document.createElement('div');
    blk_scrn.id = 'blk_scrn';
    document.querySelector('body').append(blk_scrn);
}
let hide_blk_scr = () => {
    document.getElementById('blk_scrn').remove();
}
let popA = async (text, loc, bool) => {


    let popup = document.createElement('section');
    popup.id = 'pop_up_alert_msg';
    popup.innerText = text;
    if (!bool) {
        popup.classList.add('bord_rd')
    } else {
        popup.classList.add('bord_gr')
    }
    document.querySelector('body').append(popup);

    document.getElementById('pop_up_alert_msg').classList.add('display');
    document.getElementById('pop_up_alert_msg').classList.remove('notdisplay');
    blk_scr();
    setTimeout(() => {
        hide('pop_up_alert_msg', 1);
        // hide_blk_scr();
        if (loc !== undefined) {
            window.location.href = loc;
        }
    }, 3000);


}
let popQ = async (text, T, F) => {


    let popup = document.createElement('section');
    popup.id = 'pop_up_ask_msg'
    popup.innerHTML = `
        <p></p>
        <div>
        <div id='t_value'></div>
        <div id='f_value'></div>
        </div>
        `
    document.querySelector('body').append(popup);
    document.getElementById('t_value').innerText = T;
    document.getElementById('f_value').innerText = F;
    document.querySelector('#pop_up_ask_msg p').innerText = text;
    document.getElementById('t_value').addEventListener('click', () => {
        localStorage.setItem('pop_up_ask_ans', JSON.stringify(true));
        hide('pop_up_ask_msg', 200);
    });
    document.getElementById('f_value').addEventListener('click', () => {
        localStorage.setItem('pop_up_ask_ans', JSON.stringify(false));
        hide('pop_up_ask_msg', 200);

    });

    document.getElementById('pop_up_ask_msg').classList.add('display');
    document.getElementById('pop_up_ask_msg').classList.remove('notdisplay');
    blk_scr();


}
let hide = async (id, t) => {
    setTimeout(() => {
        document.getElementById(id).remove();
        hide_blk_scr();
    }, t);

}

export { popA, popQ };






