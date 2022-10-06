export default Vue.component("lottery", {
	props: [],
	data() {
		return {};
	},
	template: `
        <div class="lottery">
			<div class="lottery-head">
				<div class="lottery-container">
					<div class="lottery-headAnim1"></div>
					<div class="lottery-headAnim2"></div>
					<div class="lottery-headAnim3"></div>
					<div class="lottery-headAnim4"></div>
				</div>
			</div>
			<div class="lottery-content">
				<div class="lottery-container">
					<div class="lottery-info">
						<div class="lottery-infoText"><span>歡迎各位探員蒞臨抽獎整備室，</span></div>
						<div class="lottery-infoText"><span>這裡陳列了各項限量獎品，</span><span>委託任務攸關您的拿獎機會，</span></div>
						<div class="lottery-infoText"><span>您準備好成為一名優秀探員了嗎?</span></div>
						<div class="lottery-infoText"><span>接受委託任務抱走大獎吧!</span></span>
					</div>
					<a href="javascript:;" class="lottery-loginBtn">立即報到</a>
					<div class="lottery-contentBox" style="--w:1067;--mw:625;"></div>
					<div class="lottery-contentBox" style="--w:497;--mw:625;"></div>
					<div class="lottery-contentBox" style="--w:497;--mw:625;"></div>
				</div>
			</div>
		</div>
    `
});
