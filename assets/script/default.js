// loadingProgress控制
function loadingHide() {
    $("#loadingProgress").hide();
}

function loadingShow() {
    $("#loadingProgress").show();
}
//建立 store
const indexStore = new Vuex.Store({
    actions: {},
    state: {},
    mutations: {},
});

//時尚投票專區
Vue.component("album-tab", {
    data() {
        return {};
    },
    computed: {},
    watch: {},
    props: [""],
    template: `
    <div class="tabOuter">
        <div class="tabBtnContent">
            <span class="tabBtn vote" :class="this.$store.state.tabIndex == 'vote' ? 'active' : ''" @click="changeTab('vote')">時尚投票專區</span>
            <span class="tabBtn album" :class="this.$store.state.tabIndex == 'album' ? 'active' : ''" @click="changeTab('album')">時尚相簿</span>
            <span class="tabBtn popular" :class="this.$store.state.tabIndex == 'popular' ? 'active' : ''" @click="changeTab('popular')">人氣喵感設計師</span>
        </div>
        <div class="tabContent" >
            <div class="tabArea" data-index="vote" v-if="this.$store.state.tabIndex == 'vote'">
                <div class="notOpen" v-if="this.$store.state.currentOpen == 0">計算票數中，請期待下次的作品!</div>
                <div class="navBar vote" v-if="this.$store.state.currentOpen == 1">
                    <div class="tabAreaTitle">推薦作品區</div>
                    <div class="searchBar vote">
                        <div class="tabAreaSelect purple" v-if="this.$store.state.artWork">
                            <select name="selectVote" id="selectVote">
                                <option value="0">選擇搜尋類型</option>
                                <option value="1">標籤名稱</option>
                                <option value="2">設計師名稱</option>
                                <option value="3">作品名稱</option>
                            </select>
                        </div>
                        <label class="search blue">
                            <span class="searchBtn"  @click="searchVote($event)"></span>
                            <input type="text" name="nameSearchVote" id="nameSearchVote" autocomplete="off" />
                        </label>
                    </div>
                </div>
                <div class="cardContent vote" v-if="this.$store.state.currentOpen == 1"> 
                    <div class="cardContentSlider">
                    <div class="cardBox"  v-for="(item,index) in this.$store.state.artWork.slice(0,30)">
                        <div class="cardName">{{item.Name}}</div>
                        <div class="cardPhoto" :data-seq="item.Seq" @click="goArtWorkPage($event,'designer','voting')">
                            <span class="picContent">
                                <span class="pic"></span>
                                <span>{{item.picCount}}</span>
                            </span>
                            <img :src="'https://tw.hicdn.beanfun.com/beanfun/WebImage/' + item.CoverImageName" />
                            <div class="zoom" @click="zoom($event,item.Name,item.CoverImageName)"></div>
                        </div>
                        <div class="iconBar">
                            <span class="icon ticket" v-if="item.CurrentSchedule === 1" ></span>
                            <span class="icon ticket" v-else></span>
                            <span class="count" v-if="item.VoteLogCNT < 999">{{item.VoteLogCNT}}</span>
                            <span class="count" v-else>{{Math.round((item.VoteLogCNT /1000) * 100) / 100}}K</span>
                            <span class="icon watch"></span>
                            <span class="count" v-if="item.ViewLogCNT < 999">{{item.ViewLogCNT}}</span>
                            <span class="count"v-else>{{Math.round((item.ViewLogCNT /1000) * 100) / 100}}K</span>
                            <span class="icon like" ></span>
                            <span class="count" v-if="item.LikeLogCNT < 999">{{item.LikeLogCNT}}</span>
                            <span class="count" v-else>{{Math.round((item.LikeLogCNT /1000) * 100) / 100}}K</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="tabArea" v-if="this.$store.state.tabIndex == 'album'">
                <div class="notOpen" v-if="this.$store.state.currentOpen == 0">計算票數中，請期待下次的作品!</div>
                <div class="navBar album" v-if="this.$store.state.currentOpen == 1">
                    <div class="tabAreaSelect sort">
                        <select name="selectSort" id="selectSort" >
                            <option value="1">最新順序</option>
                            <option value="2">最多喵票</option>
                            <option value="3">最多觀看</option>
                            <option value="4">最多喵讚</option>
                        </select>
                    </div>

                    <div class="searchBar">
                        <label for="nameSearchAlbum" class="search blue">
                            <span class="searchBtn"  @click="searchAlbum($event)"></span>
                            <input type="text" name="" id="nameSearchAlbum" autocomplete="off" />
                        </label>
                    </div>
                    <div class="tabAreaSelect web purple">
                        <select name="selectAlbum" id="selectAlbum">
                            <option value="0">選擇搜尋類型</option>
                            <option value="1">標籤名稱</option>
                            <option value="2">設計師名稱</option>
                            <option value="3">作品名稱</option>
                        </select>
                    </div>
                </div>
                <div class="cardContent" v-if="this.$store.state.currentOpen == 1">
                    <div class="cardContentSlider">
                    <div class="cardBox album" v-for="(item,index) in this.$store.state.artWork.slice(0,30)" >
                        <div class="cardName">{{item.Name}}</div>
                        <div class="cardPhoto" :data-seq="item.Seq" @click="goArtWorkPage($event,'designer','posts')">
                            <span class="picContent">
                                <span class="pic"></span>
                                <span>{{item.picCount}}</span>
                            </span>
                            <img :src="'https://tw.hicdn.beanfun.com/beanfun/WebImage/' + item.CoverImageName" />
                            <div class="zoom" @click="zoom($event,item.Name,item.CoverImageName)"></div>
                        </div>
                        <div class="iconBar">
                            <span class="icon ticket" v-if="item.CurrentSchedule === 1" ></span>
                            <span class="icon ticket" v-else></span>
                            <span class="count" v-if="item.VoteLogCNT < 999">{{item.VoteLogCNT}}</span>
                            <span class="count" v-else>{{Math.round((item.VoteLogCNT /1000) * 100) / 100}}K</span>
                            <span class="icon watch"></span>
                            <span class="count" v-if="item.ViewLogCNT < 999">{{item.ViewLogCNT}}</span>
                            <span class="count"v-else>{{Math.round((item.ViewLogCNT /1000) * 100) / 100}}K</span>
                            <span class="icon like" ></span>
                            <span class="count" v-if="item.LikeLogCNT < 999">{{item.LikeLogCNT}}</span>
                            <span class="count" v-else>{{Math.round((item.LikeLogCNT /1000) * 100) / 100}}K</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="tabArea"  v-if="this.$store.state.tabIndex == 'popular'">
                <div class="notOpen" v-if="this.$store.state.currentOpen == 0">計算票數中，請期待下次的作品!</div>
                <div class="navBar" v-if="this.$store.state.currentOpen == 1">
                    <div class="searchBar designer">
                        <label for="designerSearch" class="search blue">
                            <span class="searchBtn"  @click="searchDesigner($event)"></span>
                            <input type="text" name="" id="designerSearch" placeholder="設計師搜尋" autocomplete="off"/>
                        </label>
                    </div>
                </div>
                <div class="cardContent popular" v-if="this.$store.state.currentOpen == 1">
                <div class="cardContentSlider">
                    <div class="collectionContent" v-for="(item,index) in this.$store.state.artWork.slice(0,100)">
                        <span class="topNum" :class=" parseInt(item.Ranking)  == 1 ? '_01' :  parseInt(item.Ranking)  == 2 ? '_02' :  parseInt(item.Ranking)  == 3 ? '_03' : ''">{{ parseInt(item.Ranking) }}</span>
                        <div class="profile">
                            <div class="pic" :class=" parseInt(item.Ranking)  == 1 ? '_01' :  parseInt(item.Ranking)  == 2 ? '_02' :  parseInt(item.Ranking)  == 3 ? '_03' :  parseInt(item.Ranking)  <= 100 ? '_10' :  '_100'"></div>
                            <div class="name">{{item.CharacterName}}</div>
                            <div class="iconBar">
                                <span class="icon photo"></span>
                                <span class="count" v-if="item.TotalPicCount < 999">{{item.TotalPicCount}}</span>
                                <span class="count" v-else>{{Math.round((item.TotalPicCount /1000) * 100) / 100}}K</span>
                                <span class="icon ticket" v-if="item.CurrentSchedule === 1" ></span>
                                <span class="icon ticket" v-else></span>
                                <span class="count" v-if="item.VoteLogCNT < 999">{{item.VoteLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.VoteLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon watch"></span>
                                <span class="count" v-if="item.ViewLogCNT < 999">{{item.ViewLogCNT}}</span>
                                <span class="count"v-else>{{Math.round((item.ViewLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon like" ></span>
                                <span class="count" v-if="item.LikeLogCNT < 999">{{item.LikeLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.LikeLogCNT /1000) * 100) / 100}}K</span>
                            </div>
                            <div class="collectionBtn"  :data-seq="item.CharacterName" @click="goCollection($event)">前往作品集</div>
                        </div>
                        <div class="cardBox popular" v-if="item.ImageName1 != null">
                            <div class="cardPhoto" :data-seq="item.Seq" @click="goArtWorkPage($event,'designer','designers')">
                                <span class="picContent">
                                    <span class="pic"></span>
                                    <span>{{item.picCount}}</span>
                                </span>
                                <img :src="'https://tw.hicdn.beanfun.com/beanfun/WebImage/' + item.ImageName1" />
                                <div class="zoom" @click="zoom($event,item.Name,item.ImageName1)"></div>
                            </div>
                            <div class="iconBar">
                                <span class="icon ticket" v-if="item.CurrentSchedule === 1" ></span>
                                <span class="icon ticket" v-else></span>
                                <span class="count" v-if="item.VoteLogCNT < 999">{{item.VoteLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.VoteLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon watch"></span>
                                <span class="count" v-if="item.ViewLogCNT < 999">{{item.ViewLogCNT}}</span>
                                <span class="count"v-else>{{Math.round((item.ViewLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon like" ></span>
                                <span class="count" v-if="item.LikeLogCNT < 999">{{item.LikeLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.LikeLogCNT /1000) * 100) / 100}}K</span>
                            </div>
                        </div>
                        <div class="cardBox popular" v-if="item.ImageName2 != null">
                            <div class="cardPhoto" :data-seq="item.Seq" @click="goArtWorkPage($event,'designer','designers')">
                                <span class="picContent">
                                    <span class="pic"></span>
                                    <span>{{item.picCount}}</span>
                                </span>
                                <img :src="'https://tw.hicdn.beanfun.com/beanfun/WebImage/' + item.ImageName2" />
                                <div class="zoom" @click="zoom($event,item.Name,item.ImageName2)"></div>
                            </div>
                            <div class="iconBar">
                                <span class="icon ticket" v-if="item.CurrentSchedule === 1" ></span>
                                <span class="icon ticket" v-else></span>
                                <span class="count" v-if="item.VoteLogCNT < 999">{{item.VoteLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.VoteLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon watch"></span>
                                <span class="count" v-if="item.ViewLogCNT < 999">{{item.ViewLogCNT}}</span>
                                <span class="count"v-else>{{Math.round((item.ViewLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon like" ></span>
                                <span class="count" v-if="item.LikeLogCNT < 999">{{item.LikeLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.LikeLogCNT /1000) * 100) / 100}}K</span>
                            </div>
                        </div>
                        <div class="cardBox popular" v-if="item.ImageName3 != null">
                            <div class="cardPhoto" :data-seq="item.Seq" @click="goArtWorkPage($event,'designer','designers')">
                                <span class="picContent">
                                    <span class="pic"></span>
                                    <span>{{item.picCount}}</span>
                                </span>
                                <img :src="'https://tw.hicdn.beanfun.com/beanfun/WebImage/' + item.ImageName3" />
                                <div class="zoom" @click="zoom($event,item.Name,item.ImageName3)"></div>
                            </div>
                            <div class="iconBar">
                                <span class="icon ticket" v-if="item.CurrentSchedule === 1" ></span>
                                <span class="icon ticket" v-else></span>
                                <span class="count" v-if="item.VoteLogCNT < 999">{{item.VoteLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.VoteLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon watch"></span>
                                <span class="count" v-if="item.ViewLogCNT < 999">{{item.ViewLogCNT}}</span>
                                <span class="count"v-else>{{Math.round((item.ViewLogCNT /1000) * 100) / 100}}K</span>
                                <span class="icon like" ></span>
                                <span class="count" v-if="item.LikeLogCNT < 999">{{item.LikeLogCNT}}</span>
                                <span class="count" v-else>{{Math.round((item.LikeLogCNT /1000) * 100) / 100}}K</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        //換頁籤
        changeTab(page) {
            this.$store.state.tabIndex = page;
            if (page == "popular") {
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, OrderByType: 4 });
                senderClickEvent("4101", "gtw_events_item_click", { page: "mabi_irusan_202210" }, { type: "tab", name: "voting" });
            } else if (page == "album") {
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0 });
                senderClickEvent("4101", "gtw_events_item_click", { page: "mabi_irusan_202210" }, { type: "tab", name: "posts" });
            } else {
                senderClickEvent("4101", "gtw_events_item_click", { page: "mabi_irusan_202210" }, { type: "tab", name: "designers" });
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0 });
            }
        },
        //進入作品頁
        goArtWorkPage(event, page, fromPage) {
            this.$store.dispatch("AddAllUserDataLogApi", { CipherText: token, Type: 3, Seq: $(event.currentTarget).attr("data-seq") });
            this.$store.dispatch("initApi", { CipherText: token, Seq: $(event.currentTarget).attr("data-seq"), Type: 1, ArtWorkSchedule: 1, OrderByType: 1 });
            this.$store.commit("changePage", page);
            var thisArt = this.$store.state.artWork.filter(function (value) {
                return value.Seq == $(event.currentTarget).attr("data-seq");
            });

            senderClickEvent("4101", "gtw_events_item_click", { page: "mabi_irusan_202210", source: fromPage }, { type: "btn (個別作品圖)", amount: { votes: thisArt[0].VoteLogCNT, like: thisArt[0].LikeLogCNT, view: thisArt[0].ViewLogCNT }, name: "goto_works" });
        },
        //搜尋
        searchVote: function (event) {
            event.stopPropagation();
            if ($(".navBar.vote .option.selected").attr("data-value") == 1) {
                this.$store.state.tabIndex = "album";
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, RaceOrTag: $("#nameSearchVote").val() });
            } else if ($(".navBar.vote .option.selected").attr("data-value") == 2) {
                this.$store.state.tabIndex = "popular";
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, CharacterName: $("#nameSearchVote").val(), OrderByType: 4 });
            } else if ($(".navBar.vote .option.selected").attr("data-value") == 3) {
                this.$store.state.tabIndex = "album";
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, Name: $("#nameSearchVote").val() });
            } else {
                defaultBox2("請選擇搜尋類型");
            }
        },
        searchAlbum: function (event) {
            event.stopPropagation();
            if ($(".navBar.album .tabAreaSelect.web .option.selected").attr("data-value") == 1) {
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, RaceOrTag: $("#nameSearchAlbum").val(), OrderByType: $(".navBar.album .tabAreaSelect.sort .option.selected").attr("data-value") });
                this.$store.state.tabIndex = "album";
            } else if ($(".navBar.album .tabAreaSelect.web .option.selected").attr("data-value") == 2) {
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, CharacterName: $("#nameSearchAlbum").val(), OrderByType: $(".navBar.album .tabAreaSelect.sort .option.selected").attr("data-value") });
                this.$store.state.tabIndex = "popular";
            } else if ($(".navBar.album .tabAreaSelect.web .option.selected").attr("data-value") == 3) {
                this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, Name: $("#nameSearchAlbum").val(), OrderByType: $(".navBar.album .tabAreaSelect.sort .option.selected").attr("data-value") });
                this.$store.state.tabIndex = "album";
            } else {
                defaultBox2("請選擇搜尋類型");
            }
        },
        searchDesigner: function (event) {
            event.stopPropagation();
            this.$store.dispatch("initApi", { CipherText: token, Type: 1, ArtWorkSchedule: 0, CharacterName: $("#designerSearch").val(), OrderByType: 4 });
        },
        //進入作品集
        goCollection(event) {
            this.$store.dispatch("initApi", { CipherText: token, CharacterName: $(event.currentTarget).attr("data-seq"), ArtWorkSchedule: 1, Type: 1 });
            this.$store.commit("changePage", "collection");
            this.$store.state.tabIndex = "vote";

            var thisArt = this.$store.state.artWork.filter(function (value) {
                return value.CharacterName == $(event.currentTarget).attr("data-seq");
            });

            senderClickEvent("4101", "gtw_events_item_click", { page: "mabi_irusan_202210", source: "designers" }, { sec: "recommend_designer", type: "btn", amount: { votes: thisArt[0].VoteLogCNT, like: thisArt[0].LikeLogCNT, view: thisArt[0].ViewLogCNT }, name: "goto_portfolio" });
        },

        zoom: function (event, name, url) {
            event.stopPropagation();
            photoBox(name, url);
        },

        //投票
        ticketVote: function () {
            QRBox();
        },
        //讚
        likeGive: function () {
            QRBox();
        },
    },
    computed: {
        sortedArray() {
            return this.$store.state.artWork.sort((a, b) => a.Ranking - b.Ranking);
        },
    },
    mounted() {
        $("#selectVote").niceSelect();

        //select
        $("body").on("click", ".tabAreaSelect.sort li.option", function () {
            vm.$store.dispatch("initApi", { CipherText: token, Type: 1, OrderByType: $(this).attr("data-value") });
        });
    },
    updated() {
        //nice-select
        if (this.$store.state.tabIndex == "album") {
            $("#selectSort").niceSelect();
            $("#selectAlbum").niceSelect();
        } else if (this.$store.state.tabIndex == "vote") {
            $("#selectVote").niceSelect();
        }
        $(".cardContent").mCustomScrollbar({
            scrollbarPosition: "outside",
            autoDraggerLength: false,
        });
    },
});

const vm = new Vue({
    el: "#app",
    store: indexStore,
    data: {},
    computed: {},
    methods: {},
    mounted() {},
    updated() {},
});
