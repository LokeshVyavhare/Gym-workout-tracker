let checkPass = (input, text, button) => {
    let a;
    document.getElementById(input).addEventListener('input', (event) => {
        let str = event.target.value;
        clearTimeout(a);
        a = setTimeout(() => {
            let validity = true;
            document.getElementById(text).innerHTML = '';
            if (str == '') {
                validity = false;
                let p = document.createElement('p');
                p.innerText = 'Password Can not Be Empty';
                p.classList.add('color_RED')
                document.getElementById(text).append(p);
            }
            if (!smallCheck(str)) {
                validity = false;
                let p = document.createElement('p');
                p.innerText = 'Password must have atleast one small letter';
                p.classList.add('color_RED')
                document.getElementById(text).append(p);
            }
            if (!capCheck(str)) {
                validity = false;
                let p = document.createElement('p');
                p.innerText = 'Password must have atleast one capital letter';
                p.classList.add('color_RED')
                document.getElementById(text).append(p);
            }
            if (!numCheck(str)) {
                validity = false;
                let p = document.createElement('p');
                p.innerText = 'Password must have atleast one number digit';
                p.classList.add('color_RED')
                document.getElementById(text).append(p);
            }
            if (!specCheck(str)) {
                validity = false;
                let p = document.createElement('p');
                p.innerText = 'Password must have atleast special character (!, @, #, $, %, ^, &, *)';
                p.classList.add('color_RED')
                document.getElementById(text).append(p);
            }

            if (validity) {
                document.getElementById(button).disabled = false;
            } else {
                document.getElementById(button).disabled = true;;
            }

        }, 1500)
    })


    function smallCheck(str) {
        let arr = 'abcdefghijklmnopqrstuvwxyz'
        for (let i = 0; i < 26; i++) {
            if (str.includes(arr[i])) {
                return true;
            }
        }
        return false;
    }
    function capCheck(str) {
        let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < 26; i++) {
            if (str.includes(arr[i])) {
                return true;
            }
        }
        return false;
    }
    function numCheck(str) {
        let arr = '0123456789'
        for (let i = 0; i < 10; i++) {
            if (str.includes(arr[i])) {
                return true;
            }
        }
        return false;
    }
    function specCheck(str) {
        let arr = '!@#$%^&*'
        for (let i = 0; i < 8; i++) {
            if (str.includes(arr[i])) {
                return true;
            }
        }
        return false;
    }

}

export default checkPass;
// please link the css file too