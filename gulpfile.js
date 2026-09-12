import gulp from 'gulp';
import { series, parallel } from 'gulp';

import twig   from './gulp-tasks/twig.js';
import style  from './gulp-tasks/style.js';
import fonts  from './gulp-tasks/fonts.js';
import images   from './gulp-tasks/images.js';
import video  from './gulp-tasks/video.js';
import sprite  from './gulp-tasks/sprite.js';
import watch  from './gulp-tasks/watch.js';

export { twig, style, fonts, images, video, watch, sprite };

const allTasks = [twig, style, fonts, images, video, watch, sprite];
export default series(...allTasks);

export const dev = series(
  parallel(twig, style),
  parallel(fonts),
  parallel(images),
  parallel(video),
  parallel(sprite),
  watch
);
