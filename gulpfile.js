var elixir = require('laravel-elixir'),
    replace = require('gulp-replace'),
    prompt = require('gulp-prompt');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass([
        'vendor/datetimepicker/jquery.datetimepicker.css',
        'scss/cuztom.scss',
    ], 'assets/css/cuztom.min.css', 'resources/assets/');

    mix.scripts([
        'vendor/vue/dist/vue.js',
        'vendor/datetimepicker/build/jquery.datetimepicker.full.js',
        'js/cuztom-open.js',
        'js/cuztom-ui.js',
        'js/components/sortable.js',
        'js/components/repeatable.js',
        'js/components/bundle.js',
        'js/components/bundle.js',
        'js/components/media.js',
        'js/components/file.js',
        'js/components/image.js',
        'js/cuztom-vue.js',
        'js/cuztom-close.js',
    ], 'assets/js/cuztom.min.js', 'resources/assets/');
});

gulp.task('prefix', function(){
    gulp.src('./src/**')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'prefix',
            message: 'Prefix?'
        }, function(result) {
            gulp.src('./src/**')
                .pipe(replace('Gizburdt', result.prefix))
                .pipe(gulp.dest('./src'));
        }));
});