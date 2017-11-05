
var Nav = require('../component/nav/nav.jsx')
var Home = require('../page/home/home.jsx')
var Page = require('../page/page/page.jsx')


var App = React.createClass({
	propTypes: {
		page: React.PropTypes.string.isRequired
	},

	getInitialState: function() {
		var page = {
			home: 'none',
			start: 'none',
			css: 'none',
			component: 'none',
			js: 'none',
			marker: 'none'
		}

		page[this.props.page] = 'block';
		return {
			page: page
		}
	},

	getShowPage: function() {
		var page = this.state.page;
		for (var i in page) {
			if (page[i] === 'block') {
				return i;
			}
		}
	},

	togglePage: function(id) {
		var page = this.state.page;
		for (var i in page) {
			page[i] = 'none'
		}
		page[id] = 'block';
		this.setState({
			page: page
		})
	},
	render: function() {
		var page = this.state.page
		return (
			<div>
				<Nav page={this.getShowPage()} togglePage={this.togglePage}></Nav>
				<Home style={{display: page.home}}>首页</Home>
				<Page title="起步" intro="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。" style={{display: page.start}} url="data/start.json"></Page>
				<Page title="全局 CSS 样式" intro="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。" style={{display: page.css}} url="data/css.json"></Page>
				<Page title="组件" intro="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。" style={{display: page.component}} url="data/component.json"></Page>
				<Page title="JavaScript 插件" intro="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。" style={{display: page.js}} url="data/js.json"></Page>
				<Page title="定制并下载 Bootstrap" intro="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。" style={{display: page.marker}} url="data/marker.json"></Page>
			</div>
		)
	}
})

module.exports = App;
