import { src, dest } from 'gulp';
import gulp_size from "gulp-size";
import gulp_twig from "gulp-twig";
import gulp_posthtml from "gulp-posthtml";
import gulp_posthtml_alt_always from "posthtml-alt-always";
import gulp_rename from "gulp-rename";

export default function twig() {
	return src(["index.twig", "pages/**/*.twig", "!pages/**/_*.twig"], {
		cwd: './src/',
		base: './src/'
	})
		.pipe(gulp_twig({
			base: './src/'
		}))
		.pipe(gulp_rename(function(file) {
			if (file.dirname.startsWith('pages')) {
				file.dirname = file.dirname.replace('pages', '');
				if (file.dirname === '' || file.dirname === '/') {
					file.dirname = '.';
				}
			}
			return file;
		}))
		.pipe(gulp_posthtml([gulp_posthtml_alt_always()]))
		.pipe(gulp_size({showFiles: true, showTotal: true, pretty: true}))
		.pipe(dest('public/'))
}
