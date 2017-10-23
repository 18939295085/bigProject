/**
 * Created by Administrator on 2017/10/11.
 */
var arr = [
    '昨晚自卑死了— —<br>我把它埋在了山岗上。',
    '我从来不会因为网购剁手— —<br>如果感到幸福我就跺跺脚',
    '喜欢大胸妹纸的男生— —<br>都是些随波逐流的货',
    '我奉劝你不要把钱看得太重— —<br>不好好按着会被风吹跑的',
    '你想泡我吗？我一边脱衣服一边问— —<br>浴缸',
    '我有个特异功能，一笑牙齿就变色— —<br>笑blue齿',
    '那个美女仰头喝可乐的姿势好性感，我忍不住上前问— —<br>这空瓶你还要吗？',
    '我们爱睡懒觉的人其实很厉害的— —<br>都是后起之秀',
    '我昨晚床上的表现特别棒！— —<br>一口气睡了16个小时',
    '昨晚跟Siri聊天的时候总觉得— —<br>她外面还有其他男人'
];
var arr2 = [
    {
        a: "万年面瘫",
        b: '笑点高到朋友们都以为是故意来砸场子的。',
        img: "image/zilian.png"
    },
    {
        a: "千年冰山",
        b: '你这种高冷型的选手，在夏天一定很受欢迎吧！',
        img: "image/lanlian.png"
    },
    {
        a: "傲娇少年/少女",
        b: '擅长死扛。只对亲近的人表现出孩子气的一面。',
        img: "image/lvlian.png"
    },
    {
        a: "性情中人",
        b: '你是一个很有原则的人。你的原则只有三个字，看心情',
        img: "image/huanglian.png"
    },
    {
        a: "捧场王",
        b: '人见人爱花见花开，只要有你在，现场就是一片哈哈哈哈哈哈哈',
        img: "image/julian.png"
    },
    {
        a: "正宗傻白甜",
        b: '每天听到最多的问题就是，你到底在笑什么？以及这tm有什么好笑的？',
        img: "image/honglian.png"
    }
];

//  获取 sum参数
function getSum() {
    return window.location.search.substring(window.location.search.lastIndexOf("=") + 1);
}
var num = 0;
var sum = 0;
//答题页面
function next(a) {
    if (num === 10) {
        window.location.href = "report.html?sum=" + sum;
    } else {
        num++;
        sum = sum + a;
    }
    // console.log(sum);
    $('.ans-bg h2').eq(0).html(arr[num]);
}

//生成 页面
function fruit() {
    window.location.href = "fruit.html?sum=" + getSum();
}
//页面 加载完 获取 sum
window.onload = function () {
    var url_Sum = getSum();
    // url_Sum = parseInt(url_Sum);
    // console.log(url_Sum);
    if (url_Sum != "") {
        ifAaa(url_Sum);
    }
};
function ifAaa(url_Sum) {
    url_Sum = parseInt(url_Sum);
    var mas_content = $(".mas-cont");
    var imglian = $(".imgbiao")[0];

    // console.log(imglian)
    if (url_Sum % 2 == 0) {
        var numA = url_Sum / 2;
        $(mas_content).eq(0).html(arr2[numA].a);
        $(mas_content).eq(1).html(arr2[numA].b);
        $(imglian).attr("src", arr2[numA].img);
    } else {
        var numB = (url_Sum + 1) / 2;
        $(mas_content).eq(0).html(arr2[numB].a);
        $(mas_content).eq(1).html(arr2[numB].b);
        $(imglian).attr("src", arr2[numB].img);
    }
}


$('.rig-click').on('click',function () {
    $('.body-bg').show();
});






