const gamedata = {
	props: ["content"],
	data() {
		return {
			swiper: null,
			progress: 0,
			selected: -1
		};
	},
	mounted() {
		var _this = this;
		$(".gamedata-selectControl").niceSelect();
		Vue.nextTick(() => {
			$("body").on("click", ".nice-select .list li", function () {
				_this.selected = $(this).attr("data-value");
			});
		});

		this.swiper = new Swiper(".gamedata-swiper", {
			slidesPerView: 1,
			loop: true,
			effect: "fade",
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}
		});
		var _this = this;
	},
	template: `
		<div class="gamedata">
			<loading type="kv" :progress="progress"></loading>
			<div class="gamedata-head">
				<div class="gamedata-container">
					<div class="gamedata-headAnim1">
						<span></span>
					</div>
					<div class="gamedata-headAnim2">
						<span></span>
					</div>
					<div class="gamedata-headAnim3">
						<span></span>
					</div>
				</div>
			</div>
			<div class="gamedata-container">
				<div class="gamedata-selectGroup">
					<div class="gamedata-selectGame" :data-game="selected"></div>
					<select class="gamedata-selectControl">
						<option value="-1">請選擇</option>
						<option value="LM">天堂M</option>
						<option value="Maple">新楓之谷</option>
					</select>
				</div>
				<div class="gamedata-dataTypeGroup">
					<a href="javascript:;" class="gamedata-dataType1">總部情報</a>
					<a href="javascript:;" class="gamedata-dataType2">探員指定</a>
				</div>
				<div class="gamedata-swiperGroup">
					<div class="swiper-box">
						<div class="swiper gamedata-swiper">
							<div class="swiper-wrapper">
								<div class="swiper-slide">
									<span class="main-1"></span>
									<span class="main-2"></span>
									<picture>
										<source media="(max-width:768px)" srcset="./assets/css/img/gamedata/m-1.png" />
										<img srcset="./assets/css/img/gamedata/1.png" src="./assets/css/img/gamedata/1.png" alt="" />
									</picture>
								</div>
								<div class="swiper-slide">
									<span class="user-1"></span>
									<picture>
										<source media="(max-width:768px)" srcset="./assets/css/img/gamedata/m-2.png" />
										<img srcset="./assets/css/img/gamedata/1.png" src="./assets/css/img/gamedata/2.png" alt="" />
									</picture>
								</div>
							</div>
						</div>
						<div class="swiper-button-next"></div>
      						<div class="swiper-button-prev"></div>
					</div>
				</div>
				<div class="gamedata-btnGroup">
					<a href="javascript:;" class="gamedata-btnShare">分享</a>
					<a href="javascript:;" class="gamedata-btnDownload">下載</a>
					<a href="javascript:;" class="gamedata-btnCheckIn">立即簽到</a>
				</div>
				<a href="javascript:;" class="gamedata-ruleBtn">規則說明</a>
			</div>
		</div>
	`
};

export default gamedata;
