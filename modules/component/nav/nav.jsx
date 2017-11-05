// 定义导航组件
module.exports = React.createClass({
	getInitialState: function() {
		var cls = {};
		cls[this.props.page] = 'choose';
		return {
			cls: cls
		}
	},
	choosePage: function(id, e) {
		var cls = {};
		cls[id] = 'choose';
		this.setState({
			cls: cls
		})
		this.props.togglePage(id);
	},
	render: function() {
		// 缓存cls
		var cls = this.state.cls;
		return (
			<div className="header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a onClick={this.choosePage.bind(this, 'home')} className="navbar-brand">Bootstrap</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a href="">Bootstrap中文网</a>
						</li>
					</ul>
					<ul className="navbar-nav nav nav-pills">
						<li>
							<a className={cls.start} onClick={this.choosePage.bind(this, 'start')} data-id='start'>起步</a>
						</li>
						<li>
							<a className={cls.css} onClick={this.choosePage.bind(this, 'css')}>全局 CSS 样式</a>
						</li>
						<li>
							<a className={cls.component} onClick={this.choosePage.bind(this, 'component')}>组件</a>
						</li>
						<li>
							<a className={cls.js} onClick={this.choosePage.bind(this, 'js')}>JavaScript 插件</a>
						</li>
						<li>
							<a className={cls.marker} onClick={this.choosePage.bind(this, 'marker')}>定制</a>
						</li>
						<li>
							<a href="">网站实例</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})
