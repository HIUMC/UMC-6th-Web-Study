const username = document.querySelector("#id");
const idsuccess = document.querySelector(".idsuccess");
const idfail = document.querySelector(".idfail");
const idfail2 = document.querySelector(".idfail2");

//아이디 정보 가져오기, 성공 실패 문구 포함

const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const pwsuccess = document.querySelector('.pwsuccess');
const pwfail = document.querySelector('.pwfail');
const mismatch = document.querySelector('.mismatch-message');
const match = document.querySelector('.match');

//비밀번호 정보 가져오기

const age = document.querySelector('#age');
const agesucess = document.querySelector('.agesuccess');
const agefail1 = document.querySelector('.agefail1');
const agefail2 = document.querySelector('.agefail2');
const agefail3 = document.querySelector('.agefail3');
const agefail4 = document.querySelector('.agefail4');
const mustinput = document.querySelector('.mustinput');

//나이 정보 가져오기

const email = document.querySelector('#email');
const emsuccess = document.querySelector('.emsuccess');
const emfail = document.querySelector('.emfail');

//이메일 정보 가져오기

const button = document.querySelector('#button');

const pattern = /^[가-힣a-zA-Z]+$/;

const onlystr = (str) =>{
    return pattern.test(str);
}//문자열 포함되었으면 true... ㅜㅜ

username.onkeyup = () => {
    if(username.value.length !== 0){
        if(onlystr(username.value)===false)
        {
            idsuccess.classList.add('hide');
            idfail.classList.remove('hide');
        }
        else{
            idsuccess.classList.remove('hide');
            idfail.classList.add('hide');
        }
    }
    else {
        idsuccess.classList.add('hide');
        idfail.classList.add('hide');
    }
}

const strongPassword = (str) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&](?=.{3,11}$)/.test(str);
}// 4글자 이상, 12글자 이하. 영어, 숫자, 특수문자 포함될 경우 true

password1.onkeyup =() => {
    if(password1.value.length !== 0)
    {
        if(strongPassword(password1.value)){
            pwfail.classList.add('hide');
            pwsuccess.classList.remove('hide');
        }
        else{
            pwfail.classList.remove('hide');
            pwsuccess.classList.add('hide');
        }
    }
    else{
        pwfail.classList.add('hide');
        pwsuccess.classList.add('hide');
    }
}

const isMatch = (password1, password2) => {
    return password1 === password2;
}//비밀번호와 비밀번호 확인 일치

password2.onkeyup = () => {
    if(password2.value.length !==0) {
        if(isMatch(password1.value,password2.value))
        {
            mismatch.classList.add('hide');
            match.classList.remove('hide');
        }
        else{
            mismatch.classList.remove('hide');
            match.classList.add('hide');
        }
    }
    else{
        mismatch.classList.add('hide');
        match.classList.add('hide');
    }
}

const isemail = (str) => {
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(str);
}

email.onkeyup = () => {
    if(email.value.length !==0)
    {
        if(isemail(email.value))
        {
            emsuccess.classList.remove('hide');
            emfail.classList.add('hide');
        }
        else{
            emsuccess.classList.add('hide');
            emfail.classList.remove('hide');
        }
    }
    else{
        emsuccess.classList.add('hide');
        emfail.classList.add('hide');
    }
}

validateAge = (age) => {
    if (isNaN(age) || age <= 0) {
        return false; // 숫자가 아니거나 음수일 경우
    }
    if (age % 1 !== 0) {
        return false; // 소수일 경우
    }
    if (age < 19) {
        return false; // 19 미만일 경우
    }
    return true; // 모든 조건을 만족할 경우
}

age.onkeyup = () => {
    if (age.value.length !== 0) {
        if(isNaN(age.value)){
            agesucess.classList.add('hide');
            agefail1.classList.remove('hide');
            agefail2.classList.add('hide');
            agefail3.classList.add('hide');
            agefail4.classList.add('hide');
        }
        else if(age.value < 0){
            agesucess.classList.add('hide');
            agefail1.classList.add('hide');
            agefail2.classList.remove('hide');
            agefail3.classList.add('hide');
            agefail4.classList.add('hide');
        }
        else if(age.value %1 !== 0){
            agesucess.classList.add('hide');
            agefail1.classList.add('hide');
            agefail2.classList.add('hide');
            agefail3.classList.remove('hide');
            agefail4.classList.add('hide');
        }
        else if(age.value < 19){
            agesucess.classList.add('hide');
            agefail1.classList.add('hide');
            agefail2.classList.add('hide');
            agefail3.classList.add('hide');
            agefail4.classList.remove('hide');
        }
        else{
            agesucess.classList.remove('hide');
            agefail1.classList.add('hide');
            agefail2.classList.add('hide');
            agefail3.classList.add('hide');
            agefail4.classList.add('hide');
        }
    }
    else{
        agesucess.classList.add('hide');
        agefail1.classList.add('hide');
        agefail2.classList.add('hide');
        agefail3.classList.add('hide');
        agefail4.classList.add('hide');
    }
};

button.onclick = () =>{
    if(username.value.length ===0 || password1.value.length ===0 || password2.value.length ===0 || age.value.length === 0 || email.value.length === 0){
        idfail2.classList.remove('hide');
        emfail.classList.remove('hide');
        mustinput.classList.remove('hide');
        pwfail.classList.remove('hide');
        mismatch.classList.remove('hide');
    }
    setTimeout(() => {
        idfail2.classList.add('hide');
        emfail.classList.add('hide');
        mustinput.classList.add('hide');
        pwfail.classList.add('hide');
        mismatch.classList.add('hide');
    }, 30000); // 3분 (30000 밀리초)
};

