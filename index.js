//
console.log("hello");

const pokemonNames = ["フシギダネ", "フシギソウ", "フシギバナ", "ヒトカゲ", "リザード", "リザードン", "ゼニガメ", "カメール", "カメックス"];
const ohtaniA = ["大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平", "大谷翔平"];
const digMenber = ["あびるまん", "たまろーさん", "えりこさん", "こたろーさん", "kikiさん", "みずきさん", "ありささん", "つばささん", "ゆーすけさん", "みくさん", "かけるさん", "りこさん"];

const extraObj = {
    大谷翔平: { img: "images/ohtani.jpeg", name: "大谷翔平", type: "野球最強ポケモン", height: "1.93", weight: "102", explain: "打っては　ホームラン３４本　ホームランランキング４位\n投げては　勝利数１５勝　勝利数ランキング３位\n年俸４３億の　おおばけもの\nモンスターボール投げても　ホームラン　されるだけ\n捕まえるには　４３億以上　積む必要がある" },
    あびるまん: { img: "images/abiru.png", name: "あびるまん", type: "デジ変戦士ポケモン", height: "？？", weight: "？？", explain: "お忙しい中でも、みんなの様子を気にかけようとしてくれる。\n楽しくBTC受けれているのはあびるさんのおかけです。\n「みんなでご飯食べに行こう。ご馳走するよ」。←嬉しい。\n今度、牛丼一緒に食べながら語ってください。\nお酒投げると捕まえられる。" },
    たまろーさん: { img: "images/tamaroh.png", name: "たまろーさん", type: "基礎プロ教育ポケモン", height: "？？", weight: "？？", explain: "基礎でたまろーさんのお世話になりすぎ頭が上がらない。\nわからなく立ち止まる人も奮い立たせてくれる。\n元気にBTC楽しんでいます。これからも頑張ります。\n間違えて基礎のZOOMを開けたらタマローさん見れた\nドラム叩かれるらしい。お魚屋さんも経験。みんなの事を思いやりすぎて、たまに助言口調が冷静になる。" },
    えりこさん: { img: "images/eriko.png", name: "えりこさん", type: "鬼スタバポケモン", height: "？？", weight: "？？", explain: "持技：グランデチョコレートチップエクストラコーヒーノンファットミルクキャラメルフラペチーノウィズチョコレートソース\n鬼と言われている　今後どうなるか。。。\nスタバにいつもいる（背景）\n真の技は「ぷろみすはぷろみすを返す」。必殺すぎ「松島や ああ松島や 松島や」に聞こえる。混乱に陥り日本語ヒアリング能力も落ち、その後の説明も頭に入って来ない最終奥義。今ノ日本語ダッタカナ？すみません、綺麗な笑顔で、もう一度説明してください。ぷろみすって何ですか？同期がわからなすぎて動悸が。美点：えりこさんの元気スマイルで、エネルギーチャージできる。いつもあたたかい励ましありがとうございます。" },
    こたろーさん: { img: "images/kotaro.png", name: "こたろーさん", type: "髪色七色変化ポケモン", height: "？？", weight: "？？", explain: "必殺技：カラーチェンジ。綺麗な髪色に、次回進化時が楽しみ。ハロウィンの猫耳メイクも凝ってて可愛かったあ。美点：わからないに寄り添ってくれ、プラスアルファの助言もくれる。基礎時からお世話になり、特に個別対応時の優しさが身に沁みる。わからない点に本人より早く到達できる、頭の良さと気遣いが素晴らしい。面白ろ楽しい人生送られていそうで、いつか少しでもお話聞いてみたい。なんとまだ20歳くらいとお聞きし驚き。脳みそ分けて欲しい。" },
    kikiさん: { img: "images/kiki.png", name: "kikiさん", type: "ナマケモノポケモン", height: "？？", weight: "？？", explain: "特徴：寒くなると、赤いマフラーを巻く。手作りで可愛い。好きな物：ナマケモノぬいぐるみ。可愛い。只今、名前募集中。何故ナマケモノがお好きなのか、まだ聞けていない。いつか聞いてみたーい。美点：困っている時の導き方が上手。いつも助けてくださりありがとうございます。優しい口調で助言くださり癒しまでくれる、一度で二度美味しいキャラメルタイプ。" },
    みずきさん: { img: "images/mizuki.png", name: "みづきさん", type: "爽やかイケメンポケモン", height: "？？", weight: "？？", explain: "必殺技：国宝顔面アタック。顔が良すぎて、余所見して疑問検索もできない、なんてことだ。うっかりモニターの大画面で見ると、石になる。目が釘付けの被害者多数。特徴：カメラ映りが良いのかな？と思いきや、研修センターで半径３０㎝で見ても美丈夫だった。実在した。国宝級の顔の良さで、女性のみならず男性にもイケメンと呼ばれる。しかも性格も良い。ギターも弾く。いつか歌って欲しい。弱点はどこですか？誰かその黄金比の顔パーツ、計測してください。講習生と離れる時寂しがる可愛い面も持つ。" },
    ありささん: { img: "images/arisa.png", name: "ありささん", type: "髪の毛ロングポケモン", height: "？？", weight: "？？", explain: "日進研修センターの時からめちゃくちゃ質問に答えてくれてすごく助かっています。困りごと相談たくさん聞いてくれてすごく優しい講師の一人。たくさん質問したい" },
    つばささん: { img: "images/tsubasa.png", name: "つばささん", type: "ホップ☆ステップ☆ジャンプポケモン", height: "？？", weight: "？？", explain: "必殺技：ローラーチェアー。研修センターの椅子を見事に乗りこなし、軽快に動く。特徴：コミュニケーションに興味が深く、自己紹介もメモし覚えてくれる。良い名前ですね、本名ですか？高く飛べそうですね。いつか、自由に空も飛べるはず。これからの進化が楽しみな、伸び代がたくさんありそうな飛び系。進化途中で、みんなに翼を授けるポケモンになり、最終形態では宇宙の風に乗る。" },
    ゆーすけさん: { img: "images/yusuke.png", name: "ゆーすけさん", type: "タイピングポケモン", height: "？？", weight: "？？", explain: "必殺技：必殺パチパチハイパーソニック。音速世界で生きているため、操作説明も音速。いつの間に画面変わった？「すみません、今の操作、テキストに載っていマスカ？」「うーんと・・・ないですね（笑顔）。他に質問ある方いますか？」メモを取ろうものなら置き去りになる。ヘルプミー。（←大丈夫、求めれば助けてくれると思う）美点：優しい人柄と軽快なタイプ音にFanが多い。今度は、カタツムリスピードで操作説明をお願いしてみたい。たぶん気を遣って、時速７００㎞に緩めてくれる。" },
    みくさん: { img: "images/miku.png", name: "みくさん", type: "ハートウォーミングポケモン“", height: "？？", weight: "？？", explain: "特徴：なんとフランス在住。色々お話聞きたすぎる。フランスいいなあ。相方を何気にパートナーと呼ぶ所にグローバルさを感じる。美点：みんなのわからないに寄り添い工夫してくれる。AMAで大変お世話になりました。BTCに参加できない方の事も考えてくれる等、思いやりの深さはマリアナ海溝。いただけるお返事の言葉選びに優しさが溢れる。いつも感謝しております。みくさんのAMAまた参加したい。　　　" },
    かけるさん: { img: "images/kakeru.png", name: "かけるさん", type: "ハロウィン逃げるなポケモン", height: "？？", weight: "？？", explain: "ハロウィン前日にさよならしてハロウィン不参加できると思いきやえりこさんパワーで参加することになったポケモン。既にえりこさんに捕まっている。\n研修中もヘルプするとすぐに駆けつけてくれて問題聞いてくれる心強い講師の一人。担当はずれると聞いて非常に残念。また質問させてください。" },
    りこさん: { img: "images/riko.png", name: "りこさん", type: "信頼と実績ポケモン", height: "？？", weight: "？？", explain: "特徴：適切な助言を、簡潔な言葉でくれる頭の良さ。すごい。返事は３秒で返ってくる。速い。質問に対する答えを考えている時、平静な表情しながら頭の中は答えを高速で探し出す様子が窺える。美点：そばにいてくれると安心できる、どの会社も採用したくなる人材。説明がめちゃめちゃ上手い。複雑な構造の説明程、良さが輝きそう。基礎で大変お世話になりました。今度ご趣味教えてください。りこさんがはっちゃける所知れたらレア。 " },
}

function pokeSelectAp() {
    const pokeListEl = document.getElementById("pokeSelect");
    while (pokeListEl.lastChild) {
        pokeListEl.removeChild(pokeListEl.lastChild)
    }
    pokemonNames.forEach(element => {
        let opttionEl = document.createElement("option");
        opttionEl.value = element;
        opttionEl.textContent = element;
        pokeListEl.appendChild(opttionEl);
    });
}

function ohtani() {
    const pokeListEl = document.getElementById("pokeSelect");
    while (pokeListEl.lastChild) {
        pokeListEl.removeChild(pokeListEl.lastChild)
    }
    ohtaniA.forEach(element => {
        let opttionEl = document.createElement("option");
        opttionEl.value = element;
        opttionEl.textContent = element;
        pokeListEl.appendChild(opttionEl);
    });
}

function dig() {
    const pokeListEl = document.getElementById("pokeSelect");
    while (pokeListEl.lastChild) {
        pokeListEl.removeChild(pokeListEl.lastChild)
    }
    digMenber.forEach(element => {
        let opttionEl = document.createElement("option");
        opttionEl.value = element;
        opttionEl.textContent = element;
        pokeListEl.appendChild(opttionEl);
    });
}

window.addEventListener("load", () => {
    pokeSelectAp()
    // console.log("event");
});

async function display() {
    const pokeEL = document.getElementById("pokeSelect");
    const pokeName = pokeEL.value;
    let pokeType;
    let pokeHight;
    let pokeWeight;
    let pokeExp;
    let pokePic;
    let pokeSpeUrl;
    console.log(digMenber.indexOf(pokeName) !== -1, "aaaa", pokeName === "大谷翔平");
    console.log(extraObj[pokeName]);
    if (digMenber.indexOf(pokeName) !== -1 || pokeName === "大谷翔平") {
        pokePic = extraObj[pokeName].img;
        pokeType = extraObj[pokeName].type;
        pokeHight = extraObj[pokeName].height;
        pokeWeight = extraObj[pokeName].weight;
        pokeExp = extraObj[pokeName].explain;
    } else {
        const pokeNo = pokemonNames.indexOf(pokeName) + 1;

        await fetch(`https://pokeapi.co/api/v2/pokemon/` + pokeNo).then(res => res.json())
            .then(json => {
                pokeWeight = json.weight;
                pokeHight = json.height
                pokePic = json.sprites.other["official-artwork"]["front_default"];
                pokeSpeUrl = json.species.url;
            })
        console.log("promise", pokeHight, pokeWeight, pokePic);

        await fetch(pokeSpeUrl).then(res => res.json())
            .then(json => {
                pokeType = json.genera.find(lag => lag.language.name === "ja").genus;
                pokeExp = json.flavor_text_entries.filter(obj => obj.language.name === "ja" && obj.version.name === "x")[0].flavor_text
            })
    }
    console.log(pokeExp[0]);
    // const imageEl = document.getElementById("pokePic");
    // const imageEl = document.createElement("img");
    // imageEl.id = "pokeImg"
    // imageEl.src = pokePic;
    // imageEl.width = 300
    // document.getElementById("pokePic").append(imageEl);

    document.getElementById("pokeImg").src = pokePic;
    document.getElementById("pokeImg").width = 300;
    document.getElementById("pokeImg2").src = pokePic;
    document.getElementById("pokeType").innerText = pokeType;
    document.getElementById("pokeExp").innerText = pokeExp;
    document.getElementById("pokeName").innerText = pokeName;
    document.getElementById("pokeHight").innerText = pokeHight + " m";
    document.getElementById("pokeWeight").innerText = pokeWeight + " Kg";

    const ballEL = document.getElementById("ballId");
    ballEL.classList.remove("move");
}

// function findUnderWeight(weight) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`).then(res => res.json())
//         .then(json => json.results.map(obj => fetch(obj.url).then(res => res.json())))
//         .then(arr => Promise.all(arr).then(res => res.filter(elm => Number(elm.weight) < weight)));
// }

 // ballBtn ***********************************************
{
//    const getBtn = document.getElementById("ballBtnId");
// getBtn.addEventListener("click", ()=>{
//     getBtn.classList.add("move");
// });
console.log(document.getElementById("ballBtnId"));//★確認できない
console.log(document.querySelectorAll(".ball")[0]);
}

function getpoke() {
    const ballEL = document.getElementById("ballId");
    console.log(ballEL);
    // ballEL.classList.remove("ball");
    ballEL.classList.add("move");

    setTimeout(() => {
        document.getElementById("pokeImg2").src = "";
    }, 3500);

}

 // ballBtn 以上 ***********************************************

module.exports = {display, getpoke, dig}


