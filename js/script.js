function c(eltype, elclass){
    let elmt = document.createElement(eltype)
    elmt.setAttribute('class',elclass)
 return elmt
}

function createDiv(sourceObj,i){

let Articolo = `<div class="singleArticleGroup">
 <div class="minitextarea">
    <img src="${sourceObj.authorImg[i]}" alt="Author photo" class="minilogo">
    <span class="minitext"><a href="">${sourceObj.author[i]}</a></span>
    <span class="in">in</span>
    <span class="fonte"><a href="${sourceObj.linkFonte[i]}">${sourceObj.fonte[i]}</a></span>
    <span class="cnt">.</span>
    <span class="date">${sourceObj.data[i]}</span>
</div>
<div class="singleArticle">
    <div class="textbox">
        <div class="singleArticleTitle">
            <span>${sourceObj.titolo[i]}</span>
        </div>
        <div class="singleArticleDescription">
            <span class="articleDescription">${sourceObj.abstract[i]}</span>
        </div>
    </div>
    <img class="imageBox" src="${sourceObj.img[i]}" alt="">
</div>
<div class="bottomTextArea">
    <div class="first">
        <span class="articleData">${sourceObj.dataPubb[i]} - ${sourceObj.duration[i]}</span>
        <a href=""><span class="topic">${sourceObj.Topic[i]}</span></a>
        <span class="detail">${sourceObj.why[i]}</span>
    </div>
    <div class="last">
        <img src="./img/addbook.png" alt="">
        <img src="./img/threeDotLogo.png" alt="" class="dot">
    </div>
</div>
</div>
<div class="next"></div>`
return Articolo
}


function createArticle(sourceObj,a){
    for(let i = 0; i<data.authorImg.length;i++){
        let dest = document.getElementById('articleDest'+a)
        let node = document.createElement('div')
        node.innerHTML = createDiv(sourceObj,i)
        dest.appendChild(node)
    }
}

createArticle(data,1)
createArticle(data,1)
createArticle(data,1)
createArticle(dataRecc,2)
createArticle(dataRecc,2)
createArticle(dataRecc,2)


function createSaved(sourceObj,i){
    let html = `
            <img src="${sourceObj.authorImg[i]}" alt="">
            <div>
                <span>${sourceObj.author[i]}</span>
                <span>${sourceObj.authorStory[i]}</span>
            </div>
            <span class='follow'>Follow</span>
    `
    return html
}

function createSuggest(sourceObj){
    for(let i = 0; i<sourceObj.authorImg.length;i++){
        let dest = document.getElementById('followDest')
        let node = c('div','singlefollow')
        node.innerHTML = createSaved(sourceObj,i)
        dest.appendChild(node)
    }
}
createSuggest(suvvdata)

function miniArticle(sourceObj,i){
    let html = `<div class="minitextarea">
        <img src="${sourceObj.authorImg[i]}" alt="" class="minilogo">
        <span class="minitext"><a href="">${sourceObj.author[i]}</a></span>
    </div>
    <div class="singleArticle">
        <div class="textbox">
            <div class="singleArticleTitle">
                <span>${sourceObj.titolo[i]}</span>
            </div>
        </div>
    </div>
    <div class="bottomTextArea">
        <div class="first">
            <span class="articleData">${sourceObj.dataPubb[i]} - ${sourceObj.duration[i]}</span>
            <span class="topic">${sourceObj.Topic[i]}</span>
        </div>
    </div>
`
return html
}
function createMiniArticle(sourceObj){
    for(let i = 0; i<sourceObj.authorImg.length;i++){
        let dest = document.getElementById('saved')
        let node = c('div','singleArticleGroup')
        node.innerHTML = miniArticle(sourceObj,i)
        dest.appendChild(node)
    }
}
createMiniArticle(data)

function activate(e){

    let args = document.getElementsByClassName('arg')
    if(document.getElementsByClassName('col1')[0].style.left == '0%' ){
        document.getElementsByClassName('col1')[0].style.left = '-100%'
    } else {
        document.getElementsByClassName('col1')[0].style.left = '0%'
    }

    for(let i = 0; i<args.length; i++){
        if(document.getElementsByClassName('arg')[i].style.color == 'black'){
            document.getElementsByClassName('arg')[i].style.color = 'grey'
            document.getElementsByClassName('arg')[i].style.borderBottom = '1px solid transparent'
        } else {
            document.getElementsByClassName('arg')[i].style.color = 'black'
            document.getElementsByClassName('arg')[i].style.borderBottom = '1px solid black'
        }
    }
}

function assignArgs(){
    document.getElementsByClassName('col1')[0].style.left = '0%'
    document.getElementsByClassName('arg')[0].style.color = 'black'
    document.getElementsByClassName('arg')[0].style.borderBottom = '1px solid black'
    let args = document.getElementsByClassName('arg')
    for(let i = 0; i<args.length; i++){
        document.getElementsByClassName('arg')[i].addEventListener('click', function(e) {activate(e)})
    }
}
assignArgs()

function Topic(sourceObj,i){
    let html = `<span class="reccomended">${sourceObj.Topic[i]}</span>`
return html
}
function createTopic(sourceObj){
    for(let i = 0; i<sourceObj.Topic.length;i++){
        let dest = document.getElementById('topicDest')
        let node = c('a','articleLink')
        console.log(node)
        node.innerHTML = Topic(sourceObj,i)
        dest.appendChild(node)
    }
}
createTopic(TopicsData)

function following(e){
    if(e.target.innerHTML == 'Following'){
        e.target.style.backgroundColor = ''
        e.target.style.color = 'black'
        e.target.innerHTML = 'Follow'
        e.target.style.border = '1px solid black'
        
    } else {
        e.target.style.backgroundColor = 'rgb(0 119 214 / 100%)'
        e.target.style.color = 'white'
        e.target.innerHTML = 'Following'
        e.target.style.border = '1px solid white'
    }
}


function followChange(){
    let follow = document.getElementsByClassName('follow')
    for(let i = 0; i<follow.length; i++){
        document.getElementsByClassName('follow')[i].addEventListener('click', function(e) {following(e)})
    }
}
followChange()
window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
    let colSidebar = document.getElementsByClassName('contentCol')[0]
    let colheight = colSidebar.offsetHeight
    let topNegative = -1*(colheight-clientHeight)
    document.getElementsByClassName('contentCol')[0].style.top = topNegative+'px'
}, {
    passive: true
});

let openCloseSeeAll = 0

function openSeeAll(){
    let recentsavedlist = document.getElementsByClassName('recentsavedlist')[0]
    if (openCloseSeeAll == 0){
        recentsavedlist.style.height = '530px'
        openCloseSeeAll = 1
    } else {
        recentsavedlist.style.height = '270px'
        openCloseSeeAll = 0
    }
    

}
document.getElementsByClassName('seeall')[0].addEventListener('click', openSeeAll)

