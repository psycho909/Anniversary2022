export const Message = (msg, url, callback) => {
	var config = {
		addClass: "default",
		hasCloseBtn: true,
		hasActionBtn: true,
		afterClose: function () {
			$.gbox.close();
		},
		actionBtns: [
			{
				text: "text1",
				class: "btn",
				click: function () {
					$.gbox.close();
				}
			},
			{
				text: "text2",
				class: "btn",
				click: function () {
					$.gbox.close();
				}
			}
		]
	};

	var HTML = "";
	$.gbox.open(HTML, config);
};
