import { src, dest } from 'gulp';
import gulpSize from "gulp-size";

export default function fonts() {
	return src(["**/*.{eot,svg,ttf,woff,woff2,json}"], {
		cwd: './src/common/fonts/',
        encoding: false
	})
	.pipe(gulpSize({showFiles: true, showTotal: true, pretty: true}))
	.pipe(dest('public/assets/fonts/'))
}
