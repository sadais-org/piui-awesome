const gulp = require('gulp')
const sftp = require('gulp-sftp-up4')

gulp.task('upload:release', () =>
  gulp.src('dist/build/h5/**').pipe(
    sftp({
      host: '120.79.208.202',
      port: '22',
      user: 'sadaisgulp',
      pass: '1b88ab6d!@#',
      remotePath: `/mnt/suntrip_h5`
    })
  )
)

gulp.task('upload:images', () =>
  gulp.src('src/static/image/**').pipe(
    sftp({
      host: '120.79.208.202',
      port: '22',
      user: 'sadaisgulp',
      pass: '1b88ab6d!@#',
      remotePath: `/mnt/suntrip_h5/static/image`
    })
  )
)
