// export default Vue.component("nav-bar", {
// 	props: [],
// 	data() {
// 		return {};
// 	},
// 	template: `
//         <div class="navBar"></div>
//     `
// });

const navbar = {
	template: `
        <div class="navbar">
            <a href="javascript:;" class="navbar-home"></a>
            <div class="navbar-list">
                <a href="javascript:;" class="navbar-nav">遊戲清單</a>
                <a href="javascript:;" class="navbar-nav">數據情報館</a>
                <a href="javascript:;" class="navbar-nav">個人機密庫</a>
                <a href="javascript:;" class="navbar-nav">抽獎整備室</a>
                <a href="javascript:;" class="navbar-nav">小喵機密X檔案</a>
            </div>
            <div class="navbar-search">
                <a href="javascript:;" class="navbar-searchBtn"></a>
            </div>
        </div>
    `
};

export default navbar;
