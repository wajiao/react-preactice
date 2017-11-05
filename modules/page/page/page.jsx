// 引入模块
var Util = require('../../mixins/util.jsx');
var Banner = require('../../component/banner/banner.jsx')
var Content = require('../../component/content/content.jsx')


module.exports = React.createClass({
	mixins: [Util],
	getInitialState: function() {
		return {
			data: []
		}
	},
	render: function() {
		return (
			<section style={this.props.style} className="section">
				<Banner title={this.props.title} intro={this.props.intro}></Banner>
				<Content data={this.state.data}></Content>
			</section>
		)
	},
	componentDidMount: function() {
		this.ajax(this.props.url, function(res) {
			this.setState({
				data: res
			})
		}.bind(this))
	}
})
