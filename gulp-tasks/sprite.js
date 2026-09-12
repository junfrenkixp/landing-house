import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import merge from 'merge-stream';
import { readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const spriteRoot = join(__dirname, '..', 'src', 'common', 'sprite');

export default function sprite() {
  const folders = readdirSync(spriteRoot).filter((name) =>
    statSync(join(spriteRoot, name)).isDirectory()
  );

  const streams = folders.map((folder) => {
    return src(join(spriteRoot, folder, '*.svg'))
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              dest: '.',
              sprite: `${folder}.svg`,
              bust: false,
              example: false,
            },
          },
        })
      )
      .pipe(dest('public/assets/sprite/'));
  });

  return merge(...streams);
}
