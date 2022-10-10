const loading = {
	props: ["type", "progress"],
	mounted() {
		if (!this.progress) {
			this.show = false;
			return;
		}
		this.show = true;
		var canvas = this.$refs.canvasRef;
		this.ctx = canvas.getContext("2d");
		canvas.width = 995;
		canvas.height = 24;
		this.currentProgress = this.progress;
		var temp = this.currentProgress;
		this.Draw();
		this.DrawProgress(this.currentProgress);
		$("body").addClass("ov-hidden");
		this.timer = setInterval(() => {
			++temp;
			if (temp == 99) {
				this.currentProgress = temp;
				clearInterval(this.timer);
				this.DrawProgress(this.currentProgress);
				return;
			}
			this.currentProgress = temp;
			this.DrawProgress(this.currentProgress);
		}, 300);
	},
	watch: {
		progress(newVal, oldVal) {
			clearInterval(this.timer);
			this.currentProgress = newVal;
			this.DrawProgress(this.currentProgress);
			setTimeout(() => {
				if (newVal == 100) {
					this.show = false;
					this.currentProgress = 0;
					$("body").removeClass("ov-hidden");
				}
			}, 600);
		}
	},
	data() {
		return {
			ctx: null,
			timer: null,
			currentProgress: 0,
			show: false
		};
	},
	methods: {
		Draw() {
			var x = 0;
			for (var i = 0; i < 20; i++) {
				x = i * 44 + 6 * i;
				this.ctx.beginPath();
				this.ctx.fillStyle = "#D8D3BF";
				this.ctx.lineWidth = "1";
				this.ctx.strokeStyle = "#4B453E";
				this.ctx.fillRect(x, 0, 44, 23);
				this.ctx.strokeRect(x, 0, 44, 23);
				this.ctx.save();
			}
		},
		DrawProgress(p) {
			var _p = Math.floor(p / 5) * 5;
			var len = (_p * 2) / 10;
			var x = 0;
			for (var i = 0; i < len; i++) {
				x = i * 44 + 6 * i;
				this.ctx.beginPath();
				this.ctx.fillStyle = "#4B453E";
				this.ctx.lineWidth = "1";
				this.ctx.strokeStyle = "#4B453E";
				this.ctx.fillRect(x, 0, 44, 23);
				this.ctx.strokeRect(x, 0, 44, 23);
				this.ctx.save();
			}
		}
	},
	template: `
        <div class="loading" v-if="show">
            <div class="loading-img" :data-type="type"></div>
            <div class="loading-text">
                <span v-if="type == 'personal'">個人機密數據 查閱中...</span>
                <span v-if="type == 'kv'">小喵產生中...</span>
                <span>{{currentProgress}}%</span>
            </div>
            <canvas id="canvas" ref="canvasRef"></canvas>
        </div>
    `
};

export default loading;
