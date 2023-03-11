
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'TiuFamily_PLAYER'

const cd = $('.cd');
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
const playlist = $('.playlist')
const btnSearch = $('.btn-search i')
const btnSearchInput = $('.btn-search input')

// const btnUpload = $('.upload-music')

const app = {
    currentIndex: 0,
    currentCode: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    nameSong: '',
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    listSongSearch: undefined, 
    songs: [
        {
          name: "See You Again",
          singer: "just for mine",
          path: "./assets/music/see you again.mp3",
          image:
            "./assets/img/01_See_You_Again__spanish_vers.jpg"
        }
        ,
        {
          name: "Monsters",
          singer: "Katie Sky",
          path: "./assets/music/Monsters - Katie Sky (Lyrics + Vietsub) ♫.mp3",
          image:
            "./assets/img/monsterCry.jpg"
        }
        ,
        {
          name: "At My Worst",
          singer: "Pink Sweat$",
          path: "./assets/music/Pink Sweat$ - At My Worst (Lyrics).mp3",
          image:
            "./assets/img/atmyWorst.jpg"
        }
        ,
        {
          name: "Everytime we touch",
          singer: "Cascada, TiuuBui",
          path: "./assets/music/Everytime we touch - Cascada.mp3",
          image:
            "./assets/img/everytimeWithTouch.jpg"
        }
        ,
        {
          name: "Forever",
          singer: "Leo Messi",
          path: "./assets/music/Forever.mp3",
          image:
            "./assets/img/forever.jpg"
        }
        ,
        {
          name: "Proud Of You",
          singer: "TiuBui, ThangNguyen",
          path: "./assets/music/Proud Of You.mp3",
          image: "./assets/img/chbi.jpg"
        }
        ,
        {
          name: "I NEED YOUR LOVE",
          singer: "busquest",
          path: "./assets/music/I NEED YOUR LOVE.mp3",
          image:
            "./assets/img/ineedYourLove.jpg"
        }
        ,
        {
          name: "Love Paradise",
          singer: "Kelly Chen",
          path: "./assets/music/Love Paradise - Kelly Chen [Lyrics].mp3",
          image:
            "./assets/img/loveParadise.jpg"
        }
        ,
        {
          name: "My KingDom Come",
          singer: "Bui Thi Minh Anh",
          path: "./assets/music/This is my kingdom come.mp3",
          image:
            "./assets/img/kingdom.jpg"
        },
        {

          name: "Faded Remix",
          singer: "Alan Walker",
          path: "./assets/music/Alan Walker - Faded (Kygo Remix) - Bài Hát Được Yêu Thích Nhất Tik Tok.mp3",
          image: "./assets/img/faded.jpg"
        },
        {
          name: "Hero Feat",
          singer: "Cash Cash",
          path: "./assets/music/Cash Cash - Hero feat. Christina Perri [Official Audio].mp3",
          image: "./assets/img/hero-feat.jpg"
        },
        {
          name: "Love Is Gone",
          singer: "Slander",
          path:
            "./assets/music/SLANDER - Love Is Gone.mp3",
          image: "./assets/img/slander.jpg"
        },
        {
          name: "Two Steps From Hell",
          singer: "Messi x Win",
          path: "./assets/music/Two Steps From Hell - Victory.mp3",
          image:
            "./assets/img/victory-messi.jpg"
        },
        {
          name: "Unstoppable Remix",
          singer: "Sia",
          path: "./assets/music/Unstoppable ( Remix ) - Sia.mp3",
          image:
            "./assets/img/unstoppable.jpg"
        },
        {
          name: "Nevada",
          singer: "Cozi Zuehlsdorff",
          path:
            "./assets/music/Vicetone - Nevada (ft. Cozi Zuehlsdorff).mp3",
          image:
            "./assets/img/nevada.jpg"
        },
        {
          name: "Lily",
          singer: "Alan Walker, K-391 & Emelie Hollow",
          path: "./assets/music/Alan Walker, K-391 & Emelie Hollow - Lily (Lyrics).mp3",
          image:
            "./assets/img/lili.jpg"
        }
        ,
        {
          name: "Sign",
          singer: "DEAMN",
          path: "./assets/music/DEAMN - Sign (Lyrics).mp3",
          image:
            "./assets/img/sign.jpg"
        }
        ,
        {
          name: "Summertime",
          singer: "K-391",
          path: "./assets/music/K-391 - Summertime [Sunshine].mp3",
          image:
            "./assets/img/k39Smer.jpg"
        }
        ,
        {
          name: "Despacito Mix",
          singer: "Luis Fonsi, Daddy Girl Yankee",
          path: "./assets/music/Luis Fonsi, Daddy Yankee - Despacito (Remix - India Dance Video) ft. Justin Bieber.mp3",
          image:
            "./assets/img/despacito.png"
        }
        ,
        {
          name: "Reality",
          singer: "Lost Frequencies",
          path: "./assets/music/Reality - Lost Frequencies - Lyrics + Vietsub..mp3",
          image:
            "./assets/img/reality.jpg"
        }
        ,
        {
          name: "Señorita",
          singer: "Camila Cabello",
          path: "./assets/music/Shawn Mendes, Camila Cabello - Señorita (Lyrics).mp3",
          image:
            "./assets/img/Camila Cabello.jpg"
        }
        ,
        {
          name: "Fly Away feat",
          singer: "TheFatRat",
          path: "./assets/music/TheFatRat - Fly Away feat. Anjulie.mp3",
          image:
            "./assets/img/flyAway.png"
        }
        ,
        {
          name: "Leemon Tree Mix",
          singer: "BeTiuu, winn",
          path: "./assets/music/_Lemon tree tiktok . Ronaldinho ảo thuật gia bóng đá.mp3",
          image:
            "./assets/img/leemon.jpg"
        }
        ,
        {
          name: "Nonstop Bay Lac 2021",
          singer: "ThangNguyen Mix",
          path: "./assets/music/nhacQuayHavana.mp3",
          image:
            "./assets/img/khabanh.jpg"
        }
        ,
        {
          name: "Phonics Song",
          singer: "ThangNguyen Mix",
          path: "./assets/music/Phonics Song - Gracie_ s Corner.mp3",
          image:
            "./assets/img/phonics.jpeg"
        }
        ,
        {
          name: "EDM Nhac Tre 9x Remix 2012-2022",
          singer: "Girl 9X",
          path: "./assets/music/Top20NhacTre.mp3",
          image:
            "./assets/img/tiu.jpeg"
        }
        ,
        {
          name: "Làm Gì Phải Hốt",
          singer: "Thuỳ Linh if Đen Vâu",
          path: "./assets/music/Lam-gi-phai-hot.mp3",
          image:
            "./assets/img/hoang-thuy-linh3-xwly-6235-1608459306.jpeg"
        }
        ,
        {
          name: "Để Mị Nói Cho Mà Nghe",
          singer: "Hoàng Thuỳ Linh",
          path: "./assets/music/de-mi-noi-cho-ma-nghe.mp3",
          image:
            "./assets/img/vi-sao-de-mi-noi-cho-ma-nghe-thanh-cong-chiem-linh-thi-truong-85a76441.jpeg"
        }
        ,
        {
          name: "Ánh Nắng Của Anh",
          singer: "Phúc Hô",
          path: "./assets/music/Ánh Nắng Của Anh (Chờ Em Đến Ngày Mai OST).mp3",
          image:
            "./assets/img/kingdom.jpg"
        }
        ,
        {
          name: "Quẩy tung nóc cùng Admin WIN",
          singer: "Thắng Đẹp Trai",
          path: "./assets/music/nonstop-2022-win.mp3",
          image:
            "./assets/img/win.jpeg"
        }
        ,
        {
          name: "Quẩy tung nóc cùng Admin WIN",
          singer: "Thắng Đẹp Trai",
          path: "./assets/music/nonstop-lanhleo.mp3",
          image:
            "./assets/img/win.jpeg"
        }
        ,
        {
          name: "Quẩy tung nóc cùng Admin WIN",
          singer: "Thắng Đẹp Trai",
          path: "./assets/music/nonstop-lanhgia.mp3",
          image:
            "./assets/img/win.jpeg"
        }
    ],
    // handleSearch: () => {
    //   btnSearchInput.onchange = (e) => {
    //     nameSong = e.target.value;
    //   }
    //   btnSearch.onclick = () => {
    //     if(btnSearchInput.style.width == 0) {
    //       btnSearchInput.style.border = '1px solid #333';
    //       btnSearchInput.style.width = '40%';
    //     } else {
    //       btnSearchInput.value = '';
    //       fetch(`https://music-services-1997.herokuapp.com/music/search?name=${this.nameSong}`)
    //         .then((res) => {
    //           return res.json();
    //         })
    //         .then((data) => {
    //           const result = data.results;
    //           if(result) {
    //             listSongSearch = result;
    //             app.renderSearch(result);
    //           }
    //         })
    //     }
    //   }
    // },  
    setConfig: function (key, value){
      this.config[key] = value;
      localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function() {
        var htmls = this.songs.map(function(song, index) {
            return `
            <div class="song song-list ${ index === app.currentIndex ? 'active' : '' }" data-index="${index}">
              <div class="thumb" style="background-image: url('${song.image}')">
              </div>
              <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
              </div>
              <div class="option">
              <i class="fas fa-ellipsis-h"></i>
              </div>
        </div>
            `
        })
       playlist.innerHTML = htmls.join('');   
      },
    renderSearch: (datas) => {
      var htmls = datas.map(function(data, index) {
        return `
        <div class="song-pro song-list ${ data.encodeId === app.currentCode ? 'active' : '' }" data-index="${data.encodeId}">
          <div class="thumb" style="background-image: url('${data.thumbnail}')">
          </div>
          <div class="body">
          <h3 class="title">${data.title}</h3>
          <p class="author">${data.artistsNames}</p>
          </div>
          <div class="option">
          <i class="fas fa-ellipsis-h"></i>
          </div>
    </div>
        `
      })
   playlist.innerHTML = htmls.join('');   
    },  
      defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
      },
      handleEvents: function() {
        const cdWidth = cd.offsetWidth;
        const _this = this;

        //Xử lý quay / dừng đĩa CD 
        const cdThumbAnimate = cdThumb.animate([
           { transform: 'rotate(360deg)'}
        ], {
          duration: 10000,
          iterations:Infinity
        })
        cdThumbAnimate.pause()


        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function() {
            const srollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - srollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        // Xử lý khi click play button
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }else {
                audio.play();
            }
          }
        // Lắng nghe sự kiện song được play
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing')
            cdThumbAnimate.play()

        }
        // Lắng nghe sự kiện song bị pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing')
            cdThumbAnimate.pause()

        }
        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration) {
                const propressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = propressPercent
            }
        }
        // Xử lý khi tua song 
        progress.oninput = function(e){
            audio.pause()
            const seekTime = audio.duration * e.target.value / 100
            audio.currentTime = seekTime
            setTimeout(() => {
              audio.play();
            }, 400);
        }
        // Xử lý khi next song 
        nextBtn.onclick = function() {
          if(_this.isRandom){
            _this.randomSong()
          }else{
            _this.nextSong()
          }
          audio.play()
          _this.render()
          _this.srollToActiveSong()
        }
        // Xử lý khi prev song 
        prevBtn.onclick = function() {
          if(_this.isRandom){
            _this.randomSong()
          }else{
            _this.prevSong()
          }
          audio.play()
          _this.render()
          _this.srollToActiveSong()
        }
        //Xử lý khi bật / tắt random song 
        btnRandom.onclick = function() {
          //cách 1: dùng loggic toggle(chuyển đổi)
          _this.isRandom = !_this.isRandom
          btnRandom.classList.toggle('active', _this.isRandom)
          //cách 2: dùng loggic thường
          // if(_this.isRandom){
          //   btnRandom.classList.remove('active')
          //   _this.isRandom = false
          // }else{
          //   btnRandom.classList.add('active')
          //   _this.isRandom = true
          // }
          _this.setConfig('isRandom', _this.isRandom)
        }
        
        // Xử lý bật / tắt repeat
        btnRepeat.onclick = function() {
          _this.isRepeat = !_this.isRepeat
          btnRepeat.classList.toggle('active', _this.isRepeat)
          _this.setConfig('isRepeat', _this.isRepeat)
        }
        // Xử lý khi song ended
          audio.onended = function() {
            if(_this.isRepeat){
              audio.play();
            }else{
              nextBtn.click();
            }
          }
        // Lắng nghe hành vi khi click vào playlist
        playlist.onclick = function(e) {
          const songNode = e.target.closest('.song:not(.active)');
          const songNodePro = e.target.closest('.song-pro:not(.active)');
          const songProElement = $('.song-pro.active')
          const optionNode = e.target.closest('.option');
          if(songNode || optionNode) {
             //Xử lý khi click vào song
              if(songNode){
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong()
                _this.render()
                audio.play()
                document.documentElement.scrollTop = 0
              }
          }
          if(songNodePro) {
            _this.currentCode = songNodePro.dataset.index;
            playlist.classList.contains('active')
            songProElement ? songProElement.classList.remove('active') : ''
            songNodePro.classList.add('active')
            _this.loadCurrentSongPro()
          }
        }  
      },
      srollToActiveSong: function() {
        setTimeout(function() {
          $('.song.active').scrollIntoView(
            { 
              behavior: 'smooth',
              block: 'center'
             }
          );
        }, 300);
      },
      loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
      },
      loadCurrentSongPro: function() {
        fetch(`https://music-services-1997.herokuapp.com/music/get-song?id=${this.currentCode}`)
          .then(res => {
            return res.json()
          })
          .then(data => {
            if(data.data.err == 0) {
              const result = data.data.data['128']
              const song = listSongSearch.filter((data) => {
                return data.encodeId == this.currentCode;
              })
              heading.textContent = song[0].title;
              cdThumb.style.backgroundImage = `url('${song[0].thumbnailM}')`
              audio.src = result;
              audio.play()
              document.documentElement.scrollTop = 0
            }
            else {
              alert('Ban k the nghe bai nay..')
            }
          })
      },
      loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
      },
      nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length){
          this.currentIndex = 0;
        }
        this.loadCurrentSong()
      },
      prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0){
          this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong()
      },
      randomSong: function() {
        let newIndex;
        do{
          newIndex = Math.floor(Math.random() * this.songs.length)
        }
        while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong()
      },
      start: function() {

        // Gán cấu hình vào ứng dụng
        this.loadConfig();
        // Định nghĩa các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe / Xử lý các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI(userInterface) khi chạy ứng dụng
        this.loadCurrentSong(); 

        // Lang nghe Dom Search
        // this.handleSearch();

        //  Render playlist
        this.render();
        // Hiển thị trạng thái ban đầu của button repeat & random
        btnRepeat.classList.toggle('active', this.isRepeat)
        btnRandom.classList.toggle('active', this.isRandom)
      }
}


    app.start();