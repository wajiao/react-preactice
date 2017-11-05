// 引入模块
var Aside = require('../aside/aside.jsx')
var Article = require('../article/article.jsx')
// 定义Content组件
module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<Aside data={this.props.data}></Aside>
				<Article data={this.props.data}></Article>
			</div>
		)
	}
})