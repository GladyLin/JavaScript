//五星評點
document.addEventListener("DOMContentLoaded", function () {
    let pic = document.images;
    let piclen = pic.length;
    for (let i = 0; i < piclen; i++) {
        pic[i].addEventListener("click", Click);
        pic[i].addEventListener("dblclick", clean);
    }
});

function Click() {
    let pic = document.images;
    for (let i = 0; i < this.id.substr(5); i++) {
        pic[i].src = "imgs/homework_14.png";
        document.getElementById("score").innerHTML = `你給${i + 1}顆星`;
    }
    let piclen = pic.length;
    for (let i = 0; i < piclen; i++) {
        pic[i].removeEventListener("click", Click);
    }
}

function clean() {
    let pic = document.images;
    let piclen = pic.length;
    document.getElementById("score").innerHTML = "單擊點評，雙擊清除";
    for (let i = 0; i < piclen; i++) {
        pic[i].src = "imgs/homework_14_gray.png";
        pic[i].addEventListener("click", Click);
    }
}

//溫度轉換
function toFah() {
    const Celsius = Number(document.getElementById("Celsius").value);
    let Fahrenheit_Result = document.getElementById("Fahrenheit_Result");
    Fahrenheit_Result.value = parseInt((Celsius + 40) * 1.8 - 40) + "℉";
}

function toCet() {
    const Fahrenheit = Number(document.getElementById("Fahrenheit").value);
    let Celsius_Result = document.getElementById("Celsius_Result");
    Celsius_Result.value = parseInt((Fahrenheit + 40) / 1.8 - 40) + "°C";
}

// 個人資料檢查
function checkNam() {
    const theNam = document.getElementById("Nam").value;
    let NamVal = Nam.value;
    let NamValLen = NamVal.length;
    let NamResult = document.getElementById("NamResult");

    //至少2個字以上，必須全為中文字
    let re = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;

    if (re.test(theNam))
        NamResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

    else if (NamVal == "")
        NamResult.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入姓名</i>`;

    else if (NamValLen < 2)
        NamResult.innerHTML = `<i class="fa-solid fa-circle-xmark"> 至少兩個字</i>`;

    else
        NamResult.innerHTML = `<i class="fa-solid fa-circle-xmark"> 必須全為中文字</i>`;
}

function checkPwd() {
    const thePwd1 = document.getElementById("Pwd1").value;
    let Pwd1_Val = Pwd1.value;
    let Pwd1_Val_Len = Pwd1_Val.length;
    let Pwd1_Result = document.getElementById("Pwd1_Result");

    //8位數以上
    //至少包含一個大寫字母、小寫字母、數字、符號
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/;

    if (re.test(thePwd1))
        Pwd1_Result.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

    else if (Pwd1_Val == "")
        Pwd1_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入密碼</i>`;

    else if (Pwd1_Val_Len < 8)
        Pwd1_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 必須是8-15位數</i>`;

    else
        Pwd1_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 至少包含一個大寫字母、小寫字母、數字、符號</i>`;

}

function checkDate() {
    const theDate = document.getElementById("Birthday").value;
    let DateVal = Birthday.value;
    let DateResult = document.getElementById("DateResult");

    let re = /^([12]\d{3}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))$/;

    if (re.test(theDate))
        DateResult.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

    else if (DateVal == "")
        DateResult.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入日期</i>`;

    else
        DateResult.innerHTML = `<i class="fa-solid fa-circle-xmark"> 格式錯誤</i>`;
}

//種樹機器人
function drawTree() {
    const Tree_Height_Val = document.getElementById("Tree_Height").value;
    let Tree_Result = document.getElementById("Tree_Result");

    if (Tree_Height_Val < 3) { Tree_Result.innerHTML = '<i class="fa-solid fa-circle-xmark"> 數字太小樹苗還沒長大</i>' }

    else if (Tree_Height_Val >= 3 && Tree_Height_Val <= 16) {
        let tree = '';
        let bole = '^<br>^';

        for (let t = 1; t <= Tree_Height_Val; t++) {
            tree += ' '.repeat(Tree_Height_Val - t) + '^'.repeat(t * 2 - 1) + '<br>';
            Tree_Result.innerHTML = tree + bole;
        }
    }

    else { Tree_Result.innerHTML = '<i class="fa-solid fa-circle-xmark"> 數字太大，農場種不下了</i>' }
}

//生日換算年齡
function getAge() {
    const Birthday = document.getElementById("Calender").value;
    let BirthdayResult = document.getElementById("CalenderResult");

    //出生时间 毫秒
    let BirthDayTime = new Date(Birthday).getTime();

    //当前时间 毫秒
    let nowTime = new Date().getTime();

    //一年毫秒数(365 * 86400000 = 31536000000)
    BirthdayResult.innerHTML = "今年" + parseInt((nowTime - BirthDayTime) / 31536000000) + "歲";
}

//終極密碼
let num = Math.random(); num *= 100;
console.log(num);//檢測：亂數產生

Secret = parseInt(num);
console.log(Secret);//檢測：亂數取整數

function GuessNumber() {
    const theGuess = parseInt(document.getElementById("Guess").value);
    let Guess_Val = Guess.value;
    let Code_Result = document.getElementById("Code_Result");

    if (theGuess == 0) {
        Code_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> ${theGuess}不在1~100範圍</i>`
    }

    else if (Guess_Val == "") {
        Code_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入數字</i>`
    }

    else if (Guess_Val > Secret) {
        Code_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> ${theGuess}太大，請重新輸入</i>`
    }

    else if (Guess_Val < Secret) {
        Code_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> ${theGuess}太小，請重新輸入</i>`
    }
    else {
        Code_Result.innerHTML = `<i class="fa-regular fa-circle-check"> 就是${theGuess}，答對了!</i>`
    }
}

//閏年計算機
function checkYear() {
    const theYear = document.getElementById("Year").value;
    let Year_Val = Year.value;
    let Year_Result = document.getElementById("Year_Result");

    if (Year_Val == "") {
        Year_Result.innerHTML = "請輸入年份"
    }
    else if (Year_Val % 400 == 0) {
        Year_Result.innerHTML = `西元${theYear}年是閏年`
    }
    else if (Year_Val % 4 == 0 && Year_Val % 100 != 0) {
        Year_Result.innerHTML = `西元${theYear}年是閏年`
    }
    else if (Year_Val % 4 != 0) {
        Year_Result.innerHTML = `西元${theYear}年是平年`
    }
    else if (Year_Val % 100 == 0 && Year_Val % 400 != 0) {
        Year_Result.innerHTML = `西元${theYear}年是平年`
    }
}

// BMI計算機
function BMIcheck() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    let BMI = weight / ((height / 100) ** 2);
    let BMIresult = document.querySelector('.BMIresult');

    if (BMI < 18.5) { result = "過輕" }
    else if (18.5 <= BMI && BMI < 24) { result = "正常" }
    else if (24 <= BMI && BMI < 27) { result = "過重" }
    else if (27 <= BMI && BMI < 30) { result = "輕度肥胖" }
    else if (30 <= BMI && BMI < 35) { result = "中度肥胖" }
    else { result = "重度肥胖" }

    BMIresult.innerHTML = result;
}

//密碼檢查
function checkPwd_Loop() {
    //取得Pwd元素
    const thePwd2 = document.getElementById("Pwd2");
    let Pwd2_Result = document.getElementById("Pwd2_Result");

    //取得Pwd元素值
    let Pwd2_Val = Pwd2.value;

    //判斷元素值是否為空白，密碼長度是否大於6
    //如果長度是否大於6，判斷是否包含字母、數字、特殊符號
    let Pwd2_Val_Len = Pwd2_Val.length;
    let Check1 = false, Check2 = false, Check3 = false;

    if (Pwd2_Val == "")
        Pwd2_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入密碼</i>`;

    else if (Pwd2_Val_Len >= 6) {
        for (let i = 0; i < Pwd2_Val_Len; i++) {
            let ch = Pwd2_Val.charAt(i).toUpperCase();
            if (ch >= "A" && ch <= "Z")
                Check1 = true;
            else if (ch >= "0" && ch <= "9")
                Check2 = true;
            if (Check1 && Check2) break;
        }
        if (Check1 && Check2)
            Pwd2_Result.innerHTML = `<i class="fa-regular fa-circle-check"> 密碼正確</i>`;
        else
            Pwd2_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 密碼錯誤</i>`;
    } else {
        Pwd2_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 密碼是6位數</i>`;
    }
}

//密碼檢查 Regex
function checkPwd_Reg() {
    const thePwd3 = document.getElementById("Pwd3").value;
    let Pwd3_Val = Pwd3.value;
    let Pwd3_Val_Len = Pwd3_Val.length;
    let Pwd3_Result = document.getElementById("Pwd3_Result");

    //8位數以上
    //至少包含一個大寫字母、小寫字母、數字、符號
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/;

    if (re.test(thePwd3))
        Pwd3_Result.innerHTML = `<i class="fa-regular fa-circle-check"> 登入成功！</i>`;

    else if (Pwd3_Val == "")
        Pwd3_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入密碼</i>`;

    else if ((Pwd3_Val_Len) < 8)
        Pwd3_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 密碼是8-15位數</i>`;

    else
        Pwd3_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 至少包含一個大寫字母、小寫字母、數字、符號</i>`;
}

//Email檢查
function checkEmail1() {
    const Email1_Val = document.getElementById("Email1").value;
    let Email1_Result = document.getElementById("Email1_Result");

    let a = 0;
    let b = 0;
    for (let c = 0, max = Email1_Val.length; c < max; c++) {
        if (Email1_Val.charCodeAt(c) == 46) {
            a += 1;
        } else if (Email1_Val.charCodeAt(c) == 64) {
            b += 1;
        }
    }

    if (b != 1 || a == 0) {
        Email1_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 格式錯誤</i>`;
    }

    else {
        Email1_Result.innerHTML = `<i class="fa-regular fa-circle-check"> 登入成功</i>`;
    }
};

//Email檢查 Regex
function checkEmail2() {
    const Email2_Val = document.getElementById("Email2").value;
    let Email2_Result = document.getElementById("Email2_Result");

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;

    if (re.test(Email2_Val)) { Email2_Result.innerHTML = `<i class="fa-regular fa-circle-check"> 登入成功</i>` }


    else if (Email2_Val == "") { Email2_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 請輸入Email</i>` }


    else { Email2_Result.innerHTML = `<i class="fa-solid fa-circle-xmark"> 格式錯誤</i>` }
}