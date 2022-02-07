const mainSection=document.querySelector("#main");
const mainLoader=document.querySelector("#loader");
const mainVideo=document.querySelector("#main-video");
const mainTitle=document.querySelector("#title");
const mainDetail=document.querySelector("#main-detail");
const mainScroll=document.querySelector("#scroll-down");
const menuBar=document.querySelector("#menu-bar");
const mainMusic=document.querySelector("#main-music");
const musicControl=document.querySelector("#music-control");
const turnOn=document.querySelector("#turn-on");
const turnOff=document.querySelector("#turn-off");
const mainExplore=document.querySelector("#main-explore");
const mainIntro=document.querySelector("#main-intro");
const nextBtn=document.querySelector("#next-button");
const prevBtn=document.querySelector("#prev-button");

const explores=document.querySelectorAll(".explores"); //pages.
const currentState = {
    "pageNum": 0,
}

var posts = [
    { "media-url":"https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/iceland/icelandsky.png",
    "text": `여행을 해본 사람이라면 알 것이다. 여행자의 일상은 아주 잠깐씩 반짝이고 대체로 고단하다는 것을.
    ...

    그러다가도 이런 행복, 여행자이기에 얻는 우연한 행복 앞에선 무장 해제가 되어 버린다.
    
    저울추처럼 행복과 불행 사이를 오가는 일이 삶이라는 것을 긍정하게 된다.
    
    여행이라는 우연의 도미노 놀이는 그래서 즐겁다.
    

    안희연 <흩어지는 마음에게, 안녕> 중에서.`,
    "loaded": false,
    },
    { "media-url":"https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/copenhagen/airplane.mp4",
    "text-1": `Back to 
    2019. 08. 02.`,
    "text-2" : `2019. 08. 02.
    설레는 마음을 싣고 
    코펜하겐에 도착했던 날...`, 
    "loaded": false,

    },
    {"media-url":"https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/copenhagen/plane_sunset.png",
    "text": [
        `오후 9시를 훌쩍 넘어서야 도착할 예정이었기에
        비행기 창문 밖 어둠에 뒤덮인 얼굴로 
        날 맞이할 거라는 예상과는 달리`,
        `코펜하겐은 환하게 내려앉는 노을로
        내게 첫 인사를 해주었다`
    ],
    "loaded":false,
    },
    {"media-url":[
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/copenhagen/kingsgarden.png",
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/copenhagen/nyhavn.png",
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/copenhagen/Dyrehave.mp4",
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/copenhagen/louisiana.png"
    ],
    "text": [`여름의 코펜하겐은 천국 그 자체였다.
    선선한 바람과 파란 하늘, 
    그 아래 푸른 잔디밭 위에 앉아 일광욕 하는 사람들.`,
    `알록달록 뉘하운,`,
    `사슴이 눈 앞에서 뛰놀던 공원,`,
    `위로의 파도소리를 건네주던 루이지애나까지.`,
    `뭐하나 빠뜨릴 수 없이 소중한 장소들이다.`],
    "loaded":false,
    },
    {"media-url":[
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/swiss/swiss1.mp4",
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/italy/italy1.mp4"],
    "text": [`7월 말에 출국을 했으니,
    유럽의 여름을 동경하고 고대하던 내게는 시간이 많지 않았다!`,
    `무조건 여름에 가야만 했던 여행지는 
    "스위스"와 "이탈리아"였다.`,
    `그리고...`,
    `스위스의 풍경은 말로 표현할 수 없을 정도였고,`,
    `이탈리아는 영화 '콜 미 바이 유얼 네임'을 보며 상상해왔던
    유럽 남부의 여름을 눈앞에서 상영해주었다`
    ],
    "loaded":false,
    },
    {"media-url":[
        "https://dhphotoarchive.s3.ap-northeast-2.amazonaws.com/iceland/iceland1.mp4"],
    "text": [`그럼에도 누군가
    '그래서 어디가 제일 좋았냐'고 묻는다면,
    여전히 고민은 되겠지만
    결국은`,
    `Iceland`,
    `라고 대답할 것 같다.`,
    `비록 오로라는 못봤지만.`],
    "loaded":false,
    },
    {"media-url":[],
    "text": [`물론 좋은 순간들만 있었던 것은 아니었다.`,
    `지하철 파업이 진행 중이던 파리에서는 20-30분씩은 기본으로 걸어야했고,
    런던에선 하필 지독한 감기에 걸려서 며칠동안 고생해야 했다.
    아이슬란드의 살을 에는 추위 속에서는 한국의 뜨끈한 방바닥이 그리웠다.`,
    `무엇보다 10개가 넘는 도시를 여행하면서, 
    내게 여행은 점점 일상이 되어갔고
    일상은 늘 권태와의 싸움이듯이
    '그냥 코펜하겐으로 돌아가 쉬고 싶다'라는 생각이 드는 횟수가 잦아졌다.`],
    "loaded":false,
    },
    {"media-url":[],
    "text": [`그럴 때마다 여행은 우연처럼, 선물처럼`,
    `이런 하늘을 보여주기도,`,
    `이런 풍경을 보여주기도 하면서`,
    `일상을 긍정하게 만들었다.`],
    "loaded":false,
    },
    {"media-url":[],
    "text": [`여행이 인생 최고의 행복인 줄 알았던 내게`,
    `여행은 오히려 일상을 사랑하며
    현재를 열심히 살아나가라는 가르침을 주었다`],
    "loaded":false,
    },
    {"media-url":[],
    "text": [`하지만...
    코로나로 2년동안 해외여행을 못 가게 되자
    여행이 일상은 커녕 이젠 신기루 같아져 버려서...`,
    `시간 날때마다, 기억 날때마다 쓴 여행의 조각들을 모은 사이트!
    (프론트엔드 공부할 겸)
    2022 ver.`,
    `교환학생 시절 외에(시간나면)
    틈틈이 다른 나라 여행기도 씁니다.`],
    "loaded":false,
    },
]

function loadComplete(){

    mainLoader.classList.add("loader-hidden");
    
    mainTitle.classList.remove("hidden");
    mainTitle.classList.add("titleAnim");
    
    setTimeout(()=> { 
        mainVideo.classList.remove("hidden");
        mainVideo.classList.add("videoAnim");      
    },2000);

    setTimeout(()=> { 
        [mainDetail,mainScroll,menuBar, musicControl].forEach((el) => 
            {el.classList.remove("hidden");
            el.classList.add("fadeIn"); }
        )
    },5000);

    setTimeout(()=> { 
        
    },8000);

}


window.addEventListener('load', () => {
    loadComplete(); 
    }
)

turnOn.addEventListener('click', ()=> {
    mainMusic.play();
    turnOn.classList.add("loader-hidden");
    turnOff.classList.remove("loader-hidden");
})

turnOff.addEventListener('click', ()=> {
    mainMusic.pause();
    turnOff.classList.add("loader-hidden");
    turnOn.classList.remove("loader-hidden");
})


 
const viewportY = document.documentElement.clientHeight;
const viewportX = document.documentElement.clientWidth;

//function handleScroll (){
 //   var scrollY = window.scrollY;
 //   console.log(scrollY);
 //   if (scrollY > 200) {
        
 //   } 

  //  else if (200<=scrollY<1000) {
 //   }
//}

//function videoOut (){
//    var videoRect = mainVideo.getBoundingClientRect();
//    var videoYtop=videoRect["top"];
//    var videoYbottom=videoRect["bottom"];


//}



//document.addEventListener('scroll', handleScroll);
//document.addEventListener('scroll', videoOut);
mainScroll.addEventListener('click', mainOut);


function loadImage(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.addEventListener('load', resolve(img));
      //img.addEventListener('error', () => {
      //  reject(new Error(`Failed to load image's URL: ${url}`));
      //});
      img.classList.add("basic-img");
    });
}

function loadVideo(url){
    return new Promise((resolve, reject) => {
        let video = document.createElement("video");
        video.src = url;
        video.autoplay="true";
        video.loop="true"; 
        video.addEventListener('load', resolve(video));
        video.muted="true";
      });   
}

function mainOut (){
    mainScroll.style.pointerEvents = "none";
    mainScroll.style.animation="fadeOut 1s normal forwards";
    mainIntro.classList.add("fadeOut");


    setTimeout(()=>{
        console.log(explores);
        mainIntro.classList.add("loader-hidden");
        mainScroll.classList.add("loader-hidden");

        mainLoader.classList.toggle("loader-hidden");
        var targetDiv=explores[0];

        loadImage(posts[0]["media-url"]).then(
            (img) => {
                menuBar.style.filter="invert(100%)";
                targetDiv.appendChild(img);
                targetDiv.style.display="flex";
                mainLoader.classList.add("loader-hidden");

                setTimeout(()=> {
                    let text=document.createElement("div");
                    text.classList.add("first-text");
                    text.innerText=posts[0]["text"];
                    targetDiv.appendChild(text);
                    setTimeout(()=>{
                        nextBtn.classList.remove("loader-hidden");
                        prevBtn.classList.remove("loader-hidden");
                    }, 1000);
                }
                ,2000);
            }
        )

    }, 1000);
}

nextBtn.addEventListener('click', nextClicked);
prevBtn.addEventListener('click', prevClicked);


function prevClicked(){

    var pageNum=currentState.pageNum;
    if (pageNum==0) {
        explores[pageNum].style.display="none";
        mainIntro.classList.remove("loader-hidden");
        nextBtn.classList.add("loader-hidden");
        prevBtn.classList.add("loader-hidden");
        mainScroll.style.animation="bounce 2s ease infinite";
        mainScroll.classList.remove("loader-hidden");
        mainScroll.style.pointerEvents = "";
        menuBar.style.filter="";
        mainIntro.classList.remove("fadeOut");

    }
    else {
        console.log(currentState.pageNum);
        explores[pageNum].style.display="none";
        var targetDiv=explores[pageNum-1];
        targetDiv.classList.remove("fadeOut");
        if (noFlex.includes(currentState.pageNum-1)){  
            targetDiv.style.display="initial";
        }
        else {
            targetDiv.style.display="flex";
        }
        menuBar.style.filter="";
        currentState.pageNum--;
        if (colorInvert.includes(currentState.pageNum+1)){
            menuBar.style.filter="invert(100%)";
            prevBtn.style.color="#F1F0EF";
            nextBtn.style.color="#F1F0EF";
        }
        else {
            menuBar.style.filter="";
            prevBtn.style.color="#433B3B";
            nextBtn.style.color="#433B3B";
        }
        
    }   
}

const colorInvert=[1, 2];
const noFlex=[2,3,4,5];

function nextClicked(){
    currentState.pageNum++;
    console.log(currentState.pageNum);
    var prevDiv=explores[currentState.pageNum-1];
    var targetDiv=explores[currentState.pageNum];

    if (targetDiv["loaded"]) {
        prevDiv.style.display="none";
        if (noFlex.includes(currentState.pageNum)){  
            targetDiv.style.display="initial";
        }
        else {
            targetDiv.style.display="flex";
        }
        if (colorInvert.includes(currentState.pageNum+1)){
            menuBar.style.filter="invert(100%)";
            prevBtn.style.color="#F1F0EF";
            nextBtn.style.color="#F1F0EF";
        }
        else {
            menuBar.style.filter="";
            prevBtn.style.color="#433B3B";
            nextBtn.style.color="#433B3B";
        }
    }

    else {
        prevDiv.classList.add("fadeOut");
        nextBtn.style.animation="fadeOut 1s normal forwards";
        menuBar.style.filter="";
        targetDiv["loaded"]=true;
    
        setTimeout( ()=> {
            mainLoader.classList.toggle("loader-hidden");
            prevDiv.style.display="none";
            prevBtn.classList.add("loader-hidden");
            nextBtn.classList.add("loader-hidden");
    
            animList[currentState.pageNum](targetDiv);
    
        }, 1000);
    }
}

const animList=["", exp2Anim, exp3Anim, exp4Anim, exp5Anim, exp6Anim];

function exp2Anim(targetDiv) { // airplane, pagenum=1
    loadVideo(posts[1]["media-url"]).then(
        (video) => {
            //let text_1=document.createElement("div");
            //text_1.classList.add("text_1");
            //text_1.innerText=posts[currentState.pageNum]["text-1"];
            //document.body.appendChild(text_1);

            setTimeout(()=> {
                mainLoader.classList.add("loader-hidden");
                targetDiv.style.animation="fadeIn 1s normal forwards";
                targetDiv.style.display="flex";
                menuBar.style.filter="invert(100%)"
                targetDiv.appendChild(video);
                targetDiv.classList.add("explores-2");
                video.classList.add("img-2");                
            },3000 )

            setTimeout(()=> {
                let text=document.createElement("div");
                text.classList.add("text-2");
                text.innerText=posts[currentState.pageNum]["text-2"];
                targetDiv.appendChild(text);
                setTimeout(()=>{
                    prevBtn.classList.remove("loader-hidden");
                    nextBtn.style.animation="bounce 2s ease infinite";
                    nextBtn.classList.remove("loader-hidden");
                }, 1000);

            }
            ,5000);
        }
    )
}

function exp3Anim (targetDiv){ // airplane window, pagenum=2
    loadImage(posts[2]["media-url"]).then(
        (img) => {
            setTimeout(()=> {
                mainLoader.classList.add("loader-hidden");
                targetDiv.style.animation="fadeIn 1s normal forwards";
                targetDiv.style.display="initial";

                var text_1=document.createElement("div");
                text_1.innerText=posts[2]["text"][0];
                text_1.classList.add("text-1-exp-3");
                targetDiv.appendChild(text_1);
                img.classList.add("img-exp-3"); 
                img.style.display="none";
                targetDiv.appendChild(img);

                var text_2=document.createElement("div");
                text_2.innerText=posts[2]["text"][1];
                text_2.style.marginTop="-150px";
                text_2.style.color="wheat";
                text_2.style.visibility="hidden";
                targetDiv.appendChild(text_2); 

                setTimeout(()=>{
                    img.style.display="initial";
                },2000)

                setTimeout(()=>{
                    text_2.classList.add("text-1-exp-3");
                    text_2.style.visibility="";
                    setTimeout(()=>{
                        prevBtn.classList.remove("loader-hidden");
                        prevBtn.style.color="#433B3B";
                        nextBtn.style.animation="bounce 2s ease infinite";
                        nextBtn.style.color="#433B3B";
                        nextBtn.classList.remove("loader-hidden");
                    }, 2000);
                },4000)

            },3000 )      
        }
    )
}

function exp4Anim (targetDiv){ //cph detail, pagenum=3
    var img4=posts[3]["media-url"];
    var text4=posts[3]["text"];
    var imgDiv=[];

    const getImgs = async () => {
        return Promise.all(img4.map(
            url => {
            if (url.includes("png")) {
            loadImage(url).then(
                (img)=> {
                    img.classList.add("img-exp-4");
                    img.style.display="none";
                    imgDiv.push(img); 
                }
            )
            }
            else {
            loadVideo(url).then(
                (video)=> {
                    video.classList.add("img-exp-4");
                    video.style.display="none";
                    imgDiv.push(video); 
                }
            )
            }
        }
        )  
        )
    }

    getImgs().then( ()=> {
        mainLoader.classList.add("loader-hidden");
        targetDiv.style.animation="fadeIn 1s normal forwards";
        targetDiv.style.display="initial";

        setTimeout(()=>{
            let textDiv=createText(text4[0]);
            textDiv.style.marginTop="150px";
            targetDiv.appendChild(textDiv);
            setTimeout(()=>{
                imgDiv[0].style.display="initial";
                targetDiv.appendChild(imgDiv[0])
            },2000)
        },1000)

        setTimeout(()=>{
            let textDiv=createText(text4[1]);
            targetDiv.appendChild(textDiv);
            imgDiv[1].style.display="initial";
            targetDiv.appendChild(imgDiv[1]);

            let textDiv2=createText(text4[2]);
            targetDiv.appendChild(textDiv2);
            imgDiv[2].style.display="initial";
            targetDiv.appendChild(imgDiv[2])

            let textDiv3=createText(text4[3]);
            targetDiv.appendChild(textDiv3);
            imgDiv[3].style.display="initial";
            targetDiv.appendChild(imgDiv[3]);

            setTimeout(()=>{
                prevBtn.classList.remove("loader-hidden");
                prevBtn.style.color="#433B3B";
                nextBtn.style.animation="bounce 2s ease infinite";
                nextBtn.style.color="#433B3B";
                nextBtn.classList.remove("loader-hidden");
            }, 4000);
        },5000)
    
    }
    )

}

function createText(text) {
    let textEl=document.createElement("div");
    textEl.classList.add("text-4");
    textEl.innerText=text;
    return textEl;
}

function exp5Anim (targetDiv){ //swiss&italy, pagenum=3

    const media=posts[4]["media-url"]

    // first, create all elements 
    let text_1=document.createElement("div");
    targetDiv.appendChild(text_1);
    let text_2=document.createElement("div");
    targetDiv.appendChild(text_2);
    let text_3=document.createElement("div");
    targetDiv.appendChild(text_3);
    let videoCt_1=document.createElement("div");
    videoCt_1.style.visibility="hidden";
    targetDiv.appendChild(videoCt_1);
    let text_4=document.createElement("div");
    targetDiv.appendChild(text_4);
    let videoCt_2=document.createElement("div");
    videoCt_2.style.visibility="hidden";
    targetDiv.appendChild(videoCt_2);
    let text_5=document.createElement("div");
    targetDiv.appendChild(text_5);

   
    // video animations 

    loadVideo(media[0]).then(
        (video) => {
            mainLoader.classList.add("loader-hidden");
            targetDiv.style.animation="fadeIn 1s normal forwards";
            targetDiv.style.display="initial";
            menuBar.style.filter="";

            // text animations
            setTimeout(()=> {
                text_1.classList.add("text-1-exp-3");
                text_1.style.marginTop="200px";
                text_1.innerText=posts[4]["text"][0];
                setTimeout(()=>{
                    text_2.classList.add("text-1-exp-3");
                    text_2.innerText=posts[4]["text"][1];
                    setTimeout(()=>{
                        text_3.classList.add("text-1-exp-3");
                        text_3.innerText=posts[4]["text"][2];
                    }, 2000);
                }, 2000);
            },1000);

            video.classList.add("img-exp-4");
            videoCt_1.appendChild(video);

            // video1 animations
            setTimeout(()=>{
                videoCt_1.style.animation="fadeIn 1s normal forwards";
                videoCt_1.style.visibility="";
    
                setTimeout(()=>{
                    text_4.classList.add("text-1-exp-3");
                    text_4.style.color="white";
                    text_4.style.marginTop="-200px";
                    text_4.innerText=posts[4]["text"][3];

                    loadVideo(media[1]).then(
                        (video) => {
                            video.classList.add("img-exp-4");
                            videoCt_2.appendChild(video);
            
                            videoCt_2.style.animation="fadeIn 1s normal forwards";
                            videoCt_2.style.marginTop="200px";
                            videoCt_2.style.visibility="";
            
                            setTimeout(()=>{
                                text_5.classList.add("text-1-exp-3");
                                text_5.style.color="wheat";
                                text_5.style.marginTop="-200px";
                                text_5.style.height="300px";
                                text_5.innerText=posts[4]["text"][4];
                    
                                prevBtn.classList.remove("loader-hidden");
                                nextBtn.style.animation="bounce 2s ease infinite";
                                nextBtn.classList.remove("loader-hidden");
                            }, 3000);
                        }
                    )        
                }, 2000);
            }, 8000)
        }
    ) //loadvideo1 end
} //function end

function exp6Anim (targetDiv){ //iceland 

    loadVideo(posts[5]["media-url"]).then(
        (video) => {
            const text6=posts[5]["text"];

            mainLoader.classList.add("loader-hidden");
            targetDiv.style.animation="fadeIn 1s normal forwards";
            targetDiv.style.display="initial";
            menuBar.style.filter="";

            let textDiv_1=createText(text6[0]);
            textDiv_1.style.marginTop="200px";
            targetDiv.appendChild(textDiv_1);
            
            setTimeout(()=>{
                targetDiv.appendChild(video);

                video.classList.add("img-exp-4");
                targetDiv.appendChild(video);
                video.style.animation="fadeIn 1s normal forwards";
                video.style.marginTop="200px";
                video.style.marginBottom="0px";
                video.style.visibility="";

                window.scrollTo({
                    top: 550,
                    left: 0,
                    behavior: 'smooth'
                });
                
                setTimeout(()=>{
                    let textDiv_2=document.createElement("div");
                    textDiv_2.classList.add("text-6");
                    textDiv_2.innerText=text6[1];
                    targetDiv.appendChild(textDiv_2);


                    setTimeout(()=>{
                        let textDiv_3=document.createElement("div");
                        textDiv_3.classList.add("text-6-2");
                        textDiv_3.innerText=text6[2];
                        textDiv_3.style.top="900px";
                        targetDiv.appendChild(textDiv_3);
            
                        setTimeout(()=>{
                            let textDiv_4=document.createElement("div");
                            textDiv_4.classList.add("text-6-2");
                            textDiv_4.innerText=text6[3];
                            textDiv_4.style.top="920px";
                            targetDiv.appendChild(textDiv_4);

                            prevBtn.style.color="#F1F0EF";
                            nextBtn.style.color="#F1F0EF";
                            prevBtn.classList.remove("loader-hidden");
                            nextBtn.style.animation="bounce 2s ease infinite";
                            nextBtn.classList.remove("loader-hidden");
                        },2000);
                    }, 2000);
                }, 2000);

            }, 3000);
        }
    )
}