import { src, dest } from 'gulp';
import gulpSize from "gulp-size";

export default function video() {
    return src('./src/common/video/**/*.{mp4,webm}', {
		base: './src/common/video',
		encoding: false
	})
	.pipe(gulpSize({showFiles: true, showTotal: true, pretty: true}))
	.pipe(dest('./public/assets/video/'))
}
