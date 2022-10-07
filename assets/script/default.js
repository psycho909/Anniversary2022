import top from "./top.js";
import footerbar from "./footerbar.js";
import front from "./front.js";
import login from "./login.js";
import navbar from "./navbar.js";
import gamedata from "./gamedata.js";
import lottery from "./lottery.js";
import { Message } from "./lightbox.js";

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
	mutations: {}
});

// Message();

const vm = new Vue({
	el: "#app",
	store: indexStore,
	components: {
		navbar,
		front,
		lottery,
		gamedata,
		top,
		footerbar
	},
	data: {},
	computed: {},
	methods: {},
	mounted() {},
	updated() {}
});
