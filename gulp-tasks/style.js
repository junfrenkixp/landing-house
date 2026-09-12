import { src, dest } from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import gulpClean from 'gulp-clean-css';
import gulpSize from 'gulp-size';
import gulpFlatten from 'gulp-flatten';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sassCompiler = gulpSass(sass);

export default function style() {
  return src([
      './src/common/styles/**/*.scss',
      './src/styles/**/*.scss',
      '!./src/**/_*.scss'
    ], {
      base: './src/'
    })
    .pipe(
      sassCompiler({
        outputStyle: 'compressed',
        loadPaths: [join(__dirname, '..', 'src')],
      }).on('error', sassCompiler.logError)
    )
    .pipe(gulpClean({ level: 2 }))
    .pipe(gulpFlatten())
    .pipe(gulpSize({ showFiles: true, showTotal: true, pretty: true }))
    .pipe(dest('public/assets/css/'));
}
