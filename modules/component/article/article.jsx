// 定义Article组件
module.exports = React.createClass({
	createList: function() {
		return this.props.data.map(function(obj, index) {
			return (
				<li id={obj.id} key={index}>
					<h2>{obj.title}</h2>
					<p>{obj.content}</p>
				</li>
			)
		})
	},
	render: function() {
		return (
			<div className="article">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
})
