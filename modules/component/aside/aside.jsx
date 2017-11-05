// 定义Aside组件
module.exports = React.createClass({
	createList: function() {
		return this.props.data.map(function(obj, index) {
			return (
				<li key={index}>
					<a href={'#' + obj.id}>{obj.title}</a>
				</li>
			)
		})
	},
	render: function() {
		return (
			<div className="aside">
				<ul className="nav">{this.createList()}</ul>
			</div>
		)
	}
})
