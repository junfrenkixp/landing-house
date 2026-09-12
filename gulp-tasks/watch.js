import gulp from 'gulp';
import browserSync from 'browser-sync';

import twig   from './twig.js';
import style  from './style.js';
import video  from './video.js';
import images from './images.js';
import sprite from './sprite.js';
import fonts  from './fonts.js';

const bs = browserSync.create();

const reload = (done) => {
  bs.reload();
  done();
};

export default function watch() {
  bs.init({
    browser: 'Chrome',
    port: 5000,
    open: true,
    server: {
      baseDir: './public/',
    },
  });

  gulp.watch([
    './src/index.twig',
    './src/common/templates/**/*.twig',
    './src/pages/**/*.twig',
  ], gulp.series(twig, reload));

  gulp.watch([
    './src/common/styles/**/*.scss',
    './src/styles/**/*.scss',
  ], gulp.series(style, reload));

  gulp.watch('./src/common/video/**/*', gulp.series(video, reload));

  gulp.watch(
    './src/common/images/**/*.{jpg,jpeg,png}',
    gulp.series(images, reload)
  );

  gulp.watch(
    './src/common/fonts/**/*.{eot,svg,ttf,woff,woff2}',
    gulp.series(fonts, reload)
  );

  gulp.watch(
    './src/common/sprite/**/*.svg',
    gulp.series(sprite, reload)
  );
}
