// 定义混合对象
module.exports = {
	/**
	 * 异步请求方法
	 * @url 	请求的地址
	 * @fn 		回调函数
	 ***/
	ajax: function(url, fn) {

		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {

				if (xhr.status === 200) {

					fn(JSON.parse(xhr.responseText))
				}
			}
		}
		xhr.open('GET', url, true);
		xhr.send(null)
	}
}
