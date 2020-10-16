// @ts-ignore
/* eslint-disable */
const gulp = require('gulp')
const sftp = require('gulp-sftp-up4')

// 上传商城静态资源
gulp.task('upload:release', () =>
  gulp.src('dist/build/h5/**').pipe(
    sftp({
      host: '120.79.19.132',
      port: '22',
      user: 'sadaisgulp',
      pass: '1b88ab6d!@#',
      remotePath: '/mnt/piui/piui-awesome'
    })
  )
)
