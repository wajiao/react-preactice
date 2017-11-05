// 定义规范
fis.hook('commonjs')

// 编译jsx
fis.match("**.jsx", {
	parser: 'babel2',
	rExt: '.js',
	packTo: 'static/js/modules.js',
	isMod: true

})
// 编译less
fis.match('**.less', {
	parser: 'less',
	rExt: '.css',
	packTo: 'static/css/modules.css'
})
// 打包库文件
fis.match('css/**.css', {
	packTo: 'static/css/lib.css'
})
fis.match('lib/**.js', {
	packTo: 'static/js/lib.js'
})
// 加指纹，压缩
fis.match('**.{js,jsx}', {
	useHash: true,
	optimizer: 'uglify-js'
})
fis.match('**.{css,less}', {
	useHash: true,
	optimizer: 'clean-css'
})

// 打包
fis.match('::package', {
	postpackager: 'loader'
})