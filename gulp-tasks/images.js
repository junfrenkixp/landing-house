import { src, dest } from 'gulp';
import sharpOptimizeImages from 'gulp-sharp-optimize-images';
import gulpSize from "gulp-size";

export default function images() {
    return src('./src/common/images/**/*.{jpg,jpeg,png}', {
        base: './src/common/images/'
    })
    .pipe(sharpOptimizeImages({
        webp: {
            quality: 80,
            lossless: false,
            alsoProcessOriginal: true
        },
        avif: {
            quality: 70,
            effort: 4,
            alsoProcessOriginal: true
        },
    }))
    .pipe(gulpSize({ showFiles: true, showTotal: true, pretty: true }))
    .pipe(dest('./public/assets/images/'));
};
