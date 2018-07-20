const rand = (min, max, precision = 2) => {
    return (Math.random() * (max - min) + min).toFixed(precision);
}


const randInt = (min, max) => {
    return Math.round(rand(min, max));
}

const price = () => {
    return rand(1, 40, 1);
}

const title = (brand, series) => {
    let years = new Date().getFullYear(); //当前年年份
    let int = randInt(5, 10); //几成新
    let year = randInt(2014, years);

    let list = [
        '风尚型', '奢华型', '运动型', '经济型', '商务型'
    ];

    let type = list[randInt(0, list.length - 1)]; //车类型

    return `${brand || ''} ${series} ${int}成新 ${year} ${type}`
}

const reason = () => {
    let list = [
        '要去旅游', '宴请亲朋', '换新车', '车库放不下'
    ];

    return list[randInt(0, list.length - 1)];
}

const consumed = () => {
    return randInt(1, 50);
}

const randBoll = () => {
    return Math.random() >= 0.5;
}

export default {
    title,
    randInt,
    price,
    reason,
    consumed,
    randBoll
}