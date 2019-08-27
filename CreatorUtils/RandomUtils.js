/**------------es6 环境------------ */
/** 参考http://taobaofed.org/blog/2015/12/07/some-thing-about-random/ **/

/**
 * 案例
 * let obj = ['登山包', '旅行箱', '移动电源', '不中奖'];
   ratio=[0.01,0.03,0.06,0.9]
 */
function updateRandom() {
    let p = Math.random(), n = Math.random() / 4;
    if (p < 0.01) {
        return 0 + n;
    }
    if (p < 0.04) {
        return 0.25 + n;
    }
    if (p < 0.1) {
        return 0.5 + n;
    }
    if (p < 1) {
        return 0.75 + n;
    }
}

/**
 * 
 * @param {*} weights 
 */
function randomInProbability(weights) {
    if (arguments.length > 1) {
        weights = [].slice.call(arguments);
    }

    let total, current = 0, parts = [], i = 0, l = weights.length;
    total = weights.reduce ? weights.reduce((a, b) => a + b) : eval(weights.join('+'));

    for (; i < l; i++) {
        current += weights[i];
        parts.push('if(p<', current / total, ') return ', i / l, ' + n;');
    }

    return Function('var p=Math.random(),n=Math.random()/' + l + ';' + parts.join(''));
}


function testRandom(times, random, obj) {
    let result = new Array(obj.length);
    result.fill(0);
    let statisticTimes = times;
    for (let i = 0; i < statisticTimes; i++) {
        randomIdx = Math.floor(obj.length * random());
        result[randomIdx]++;
    }

    let statistics = result.map((value) => {
        return value / statisticTimes;
    });
    let count = result.reduce((accumulateor, currentValue) => accumulateor + currentValue);

    console.log('count', count, 'statistics=', statistics);
}

/**-------------------------------------------------------- */

var model = [];

for (var i = 0; i < 100; i++) {
    model.push(2 + Math.sin(Math.PI * 2 * i / 50));
}
console.log('model', model);

let obj = ['登山包', '旅行箱', '移动电源', '不中奖', '登山包1', '旅行箱1', '移动电源1', '不中奖1'];

// testRandom(100000, updateRandom, obj);

testRandom(100, randomInProbability([0.27, 0, 0.12, 0.1, 0.05, 0.15, 0.13, 0.08]), obj);

// testRandom(100000, randomInProbability(model), model);

// [0.17,0.08,0.12,0.1,0.05,0.15,0.1,0.13]




