const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const log = require('fancy-log');

const paths = {
  react_src: 'src/main/ui/dist/**/*',
  react_dist: 'src/main/resources/static/'
};

function clean()  {
  log('removing the old files in the directory')
  return del('src/main/resources/static/**', {force:true});
}

function copyVueCodeTask() {
  log('copying Vue code into the directory')
  return src(`${paths.react_src}`)
        .pipe(dest(`${paths.react_dist}`));
}

exports.default = series(
  clean,
  copyVueCodeTask
);