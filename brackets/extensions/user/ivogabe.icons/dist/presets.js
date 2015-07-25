define(["require", "exports", './icon'], function (require, exports, icon_1) {
    function setExtensions(set) {
        // XML
        set('xml', (_a = {},
            _a[icon_1.IconSet.ColorLight] = '#ff6600',
            _a[icon_1.IconSet.IconIon] = 'ion-code',
            _a[icon_1.IconSet.IconDev] = 'devicons devicons-code',
            _a
        ));
        set(['html', 'htm'], (_b = {},
            _b[icon_1.IconSet.ColorLight] = '#e34c26',
            _b[icon_1.IconSet.IconIon] = 'ion-code',
            _b[icon_1.IconSet.IconDev] = 'devicons devicons-html5',
            _b
        ));
        set('haml', (_c = {},
            _c[icon_1.IconSet.ColorLight] = '#0270b9',
            _c[icon_1.IconSet.IconIon] = 'ion-code',
            _c[icon_1.IconSet.IconDev] = 'devicons devicons-code',
            _c
        ));
        set('hbs', (_d = {},
            _d[icon_1.IconSet.ColorLight] = '#f38709',
            _d[icon_1.IconSet.IconIon] = 'ion-code',
            _d[icon_1.IconSet.IconDev] = 'devicons devicons-code',
            _d
        ));
        // Stylesheets
        set('css', (_e = {},
            _e[icon_1.IconSet.ColorLight] = '#0270b9',
            _e[icon_1.IconSet.IconIon] = ['ion-pound', 12],
            _e[icon_1.IconSet.IconDev] = 'devicons devicons-css3_full',
            _e
        ));
        set(['scss', 'sass'], (_f = {},
            _f[icon_1.IconSet.ColorLight] = '#cb6899',
            _f[icon_1.IconSet.IconIon] = ['ion-pound', 12],
            _f[icon_1.IconSet.IconDev] = 'devicons devicons-sass',
            _f
        ));
        set('less', (_g = {},
            _g[icon_1.IconSet.ColorLight] = '#2b5086',
            _g[icon_1.IconSet.IconIon] = ['ion-pound', 12],
            _g[icon_1.IconSet.IconDev] = 'devicons devicons-less',
            _g
        ));
        set('styl', (_h = {},
            _h[icon_1.IconSet.ColorLight] = '#b3d107',
            _h[icon_1.IconSet.IconIon] = ['ion-pound', 12],
            _h[icon_1.IconSet.IconDev] = 'devicons devicons-stylus',
            _h
        ));
        // JavaScript
        set('js', (_j = {},
            _j[icon_1.IconSet.ColorLight] = '#e5a228',
            _j[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _j[icon_1.IconSet.IconDev] = 'devicons devicons-javascript',
            _j
        ));
        set('es6', (_k = {},
            _k[icon_1.IconSet.ColorLight] = '#4321a9',
            _k[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _k[icon_1.IconSet.IconDev] = 'devicons devicons-javascript',
            _k
        ));
        set('babel.js', (_l = {},
            _l[icon_1.IconSet.ColorLight] = '#f5da55',
            _l[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _l[icon_1.IconSet.IconDev] = 'devicons devicons-javascript',
            _l
        ));
        set('ts', (_m = {},
            _m[icon_1.IconSet.ColorLight] = '#0074c1',
            _m[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _m[icon_1.IconSet.IconDev] = 'devicons devicons-javascript',
            _m
        ));
        set('d.ts', (_o = {},
            _o[icon_1.IconSet.ColorLight] = '#0b8f9e',
            _o[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _o[icon_1.IconSet.IconDev] = 'devicons devicons-javascript',
            _o
        ));
        set('coffee', (_p = {},
            _p[icon_1.IconSet.ColorLight] = '#425d99',
            _p[icon_1.IconSet.IconIon] = 'ion-coffee',
            _p[icon_1.IconSet.IconDev] = 'devicons devicons-coffeescript',
            _p
        ));
        set('json', (_q = {},
            _q[icon_1.IconSet.ColorLight] = '#e5a228',
            _q[icon_1.IconSet.IconIon] = 'ion-ios-gear',
            _q[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _q
        ));
        set('ls', (_r = {},
            _r[icon_1.IconSet.ColorLight] = '#369bd7',
            _r[icon_1.IconSet.IconIon] = 'ion-beaker',
            _r[icon_1.IconSet.IconDev] = 'devicons devicons-javascript',
            _r
        ));
        // Server side
        set('php', (_s = {},
            _s[icon_1.IconSet.ColorLight] = '#6976c3',
            _s[icon_1.IconSet.IconIon] = 'ion-code-working',
            _s[icon_1.IconSet.IconDev] = 'devicons devicons-php',
            _s
        ));
        set('ctp', (_t = {},
            _t[icon_1.IconSet.ColorLight] = '#417282',
            _t[icon_1.IconSet.IconIon] = 'ion-code-working',
            _t[icon_1.IconSet.IconDev] = 'devicons devicons-php',
            _t
        ));
        set('sql', (_u = {},
            _u[icon_1.IconSet.ColorLight] = '#c67f07',
            _u[icon_1.IconSet.IconIon] = 'ion-soup-can-outline',
            _u[icon_1.IconSet.IconDev] = 'devicons devicons-database',
            _u
        ));
        // Java
        set(['java', 'class'], (_v = {},
            _v[icon_1.IconSet.ColorLight] = '#5382a1',
            _v[icon_1.IconSet.IconIon] = 'ion-coffee',
            _v[icon_1.IconSet.IconDev] = 'devicons devicons-java',
            _v
        ));
        set('scala', (_w = {},
            _w[icon_1.IconSet.ColorLight] = '#72d0eb',
            _w[icon_1.IconSet.IconIon] = 'ion-navicon-round file-icon-rotated',
            _w[icon_1.IconSet.IconDev] = 'devicons devicons-scala',
            _w
        ));
        set('groovy', (_x = {},
            _x[icon_1.IconSet.ColorLight] = '#4298b8',
            _x[icon_1.IconSet.IconIon] = 'ion-ios-star',
            _x[icon_1.IconSet.IconDev] = ['devicons devicons-groovy', 18],
            _x
        ));
        set('mf', (_y = {},
            _y[icon_1.IconSet.ColorLight] = '#2f5796',
            _y[icon_1.IconSet.IconIon] = 'ion-ios-gear',
            _y[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _y
        ));
        // Lua
        set('lua', (_z = {},
            _z[icon_1.IconSet.ColorLight] = '#00207d',
            _z[icon_1.IconSet.IconIon] = ['ion-record', 14],
            _z
        ));
        // Clojure
        set('clj', (_0 = {},
            _0[icon_1.IconSet.ColorLight] = '#63b132',
            _0[icon_1.IconSet.IconIon] = 'ion-aperture',
            _0[icon_1.IconSet.IconDev] = 'devicons devicons-clojure',
            _0
        ));
        // Visual Basic
        set('vb', (_1 = {},
            _1[icon_1.IconSet.ColorLight] = '#486dae',
            _1[icon_1.IconSet.IconIon] = 'ion-ios-infinite',
            _1[icon_1.IconSet.IconDev] = 'devicons devicons-visualstudio',
            _1
        ));
        set('vbs', (_2 = {},
            _2[icon_1.IconSet.ColorLight] = '#3d047e',
            _2[icon_1.IconSet.IconIon] = 'ion-ios-infinite',
            _2[icon_1.IconSet.IconDev] = 'devicons devicons-visualstudio',
            _2
        ));
        // C-family
        set('hx', (_3 = {},
            _3[icon_1.IconSet.ColorLight] = '#ea8220',
            _3[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _3
        ));
        set('pl', (_4 = {},
            _4[icon_1.IconSet.ColorLight] = '#a4c5eb',
            _4[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _4
        ));
        set('c', (_5 = {},
            _5[icon_1.IconSet.ColorLight] = '#a8b9cc',
            _5[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _5
        ));
        set('cpp', (_6 = {},
            _6[icon_1.IconSet.ColorLight] = '#ffd232',
            _6[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _6
        ));
        set('cs', (_7 = {},
            _7[icon_1.IconSet.ColorLight] = '#5bb552',
            _7[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _7[icon_1.IconSet.IconDev] = 'devicons devicons-visualstudio',
            _7
        ));
        set('swift', (_8 = {},
            _8[icon_1.IconSet.ColorLight] = '#f16830',
            _8[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _8[icon_1.IconSet.IconDev] = 'devicons devicons-swift',
            _8
        ));
        set('dart', (_9 = {},
            _9[icon_1.IconSet.ColorLight] = '#36bfb6',
            _9[icon_1.IconSet.IconIon] = ['file-icon-c', 13],
            _9[icon_1.IconSet.IconDev] = 'devicons devicons-dart',
            _9
        ));
        // Ruby
        set(['rb', 'erb', 'rdoc'], (_10 = {},
            _10[icon_1.IconSet.ColorLight] = '#9b111e',
            _10[icon_1.IconSet.IconIon] = 'ion-heart',
            _10[icon_1.IconSet.IconDev] = ['devicons devicons-ruby', 14],
            _10
        ));
        set('feature', (_11 = {},
            _11[icon_1.IconSet.ColorLight] = '#4e8b39',
            _11[icon_1.IconSet.IconIon] = 'ion-chatbox-working',
            _11[icon_1.IconSet.IconDev] = ['devicons devicons-ruby', 14],
            _11
        ));
        // Python
        set(['py', 'pyw'], (_12 = {},
            _12[icon_1.IconSet.ColorLight] = '#f8c63d',
            _12[icon_1.IconSet.IconIon] = 'ion-social-python',
            _12[icon_1.IconSet.IconDev] = 'devicons devicons-python',
            _12
        ));
        // Qt Quick
        set('qml', (_13 = {},
            _13[icon_1.IconSet.ColorLight] = '#42ed0e',
            _13[icon_1.IconSet.IconIon] = 'ion-code',
            _13[icon_1.IconSet.IconDev] = 'devicons devicons-code',
            _13
        ));
        // Shell and friends
        set('sh', (_14 = {},
            _14[icon_1.IconSet.ColorLight] = '#008d00',
            _14[icon_1.IconSet.IconIon] = 'ion-android-list',
            _14[icon_1.IconSet.IconDev] = 'devicons devicons-terminal',
            _14
        ));
        set('bat', (_15 = {},
            _15[icon_1.IconSet.ColorLight] = '#60c910',
            _15[icon_1.IconSet.IconIon] = 'ion-android-list',
            _15[icon_1.IconSet.IconDev] = 'devicons devicons-terminal',
            _15
        ));
        // Applications
        set('exe', (_16 = {},
            _16[icon_1.IconSet.ColorLight] = '#57a084',
            _16[icon_1.IconSet.IconIon] = 'ion-social-windows',
            _16[icon_1.IconSet.IconDev] = 'devicons devicons-windows',
            _16
        ));
        set('dll', (_17 = {},
            _17[icon_1.IconSet.ColorLight] = '#709ead',
            _17[icon_1.IconSet.IconIon] = 'ion-social-windows',
            _17[icon_1.IconSet.IconDev] = 'devicons devicons-windows',
            _17
        ));
        // Templating
        set('jade', (_18 = {},
            _18[icon_1.IconSet.ColorLight] = '#00a57a',
            _18[icon_1.IconSet.IconIon] = 'ion-egg',
            _18
        ));
        // Images
        set('png', (_19 = {},
            _19[icon_1.IconSet.ColorLight] = '#dbb1a9',
            _19[icon_1.IconSet.IconIon] = 'ion-image',
            _19[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _19
        ));
        set(['jpeg', 'jpg'], (_20 = {},
            _20[icon_1.IconSet.ColorLight] = '#dedfa3',
            _20[icon_1.IconSet.IconIon] = 'ion-image',
            _20[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _20
        ));
        set('tiff', (_21 = {},
            _21[icon_1.IconSet.ColorLight] = '#ff4000',
            _21[icon_1.IconSet.IconIon] = 'ion-image',
            _21[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _21
        ));
        set('ico', (_22 = {},
            _22[icon_1.IconSet.ColorLight] = '#b6d2d1',
            _22[icon_1.IconSet.IconIon] = 'ion-image',
            _22[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _22
        ));
        set('svg', (_23 = {},
            _23[icon_1.IconSet.ColorLight] = '#c0c5eb',
            _23[icon_1.IconSet.IconIon] = 'ion-image',
            _23[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _23
        ));
        set('gif', (_24 = {},
            _24[icon_1.IconSet.ColorLight] = '#aaecc0',
            _24[icon_1.IconSet.IconIon] = 'ion-images',
            _24[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _24
        ));
        // Videos
        set(['mp4', 'webm', 'ogg'], (_25 = {},
            _25[icon_1.IconSet.ColorLight] = '#008d00',
            _25[icon_1.IconSet.IconIon] = 'ion-ios-videocam',
            _25[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _25
        ));
        // Audio
        set(['mp3', 'wav'], (_26 = {},
            _26[icon_1.IconSet.ColorLight] = '#921100',
            _26[icon_1.IconSet.IconIon] = 'ion-volume-medium',
            _26[icon_1.IconSet.IconDev] = 'devicons devicons-html5_multimedia',
            _26
        ));
        // Fonts
        set('ttf', (_27 = {},
            _27[icon_1.IconSet.ColorLight] = '#b42950',
            _27[icon_1.IconSet.IconIon] = 'ion-social-tumblr',
            _27
        ));
        set('eot', (_28 = {},
            _28[icon_1.IconSet.ColorLight] = '#b36908',
            _28[icon_1.IconSet.IconIon] = 'ion-social-tumblr',
            _28
        ));
        set(['woff', 'woff2'], (_29 = {},
            _29[icon_1.IconSet.ColorLight] = '#7f4bb2',
            _29[icon_1.IconSet.IconIon] = 'ion-social-tumblr',
            _29
        ));
        set('otf', (_30 = {},
            _30[icon_1.IconSet.ColorLight] = '#7f4bb2',
            _30[icon_1.IconSet.IconIon] = 'ion-social-tumblr',
            _30
        ));
        // Readme
        set(['md', 'markdown'], (_31 = {},
            _31[icon_1.IconSet.ColorLight] = '#b94700',
            _31[icon_1.IconSet.IconIon] = ['ion-social-markdown', 12],
            _31[icon_1.IconSet.IconDev] = 'devicons devicons-markdown',
            _31
        ));
        // Git
        set('gitignore', (_32 = {},
            _32[icon_1.IconSet.ColorLight] = '#cd5439',
            _32[icon_1.IconSet.IconIon] = ['ion-minus-circled', 14],
            _32[icon_1.IconSet.IconDev] = 'devicons devicons-git_commit',
            _32
        ));
        set('gitmodules', (_33 = {},
            _33[icon_1.IconSet.ColorLight] = '#f64d27',
            _33[icon_1.IconSet.IconIon] = ['ion-fork-repo', 17],
            _33[icon_1.IconSet.IconDev] = 'devicons devicons-git_branch',
            _33
        ));
        // Webservers
        set('htaccess', (_34 = {},
            _34[icon_1.IconSet.ColorLight] = '#93a8be',
            _34[icon_1.IconSet.IconIon] = ['ion-ios-unlocked', 18],
            _34
        ));
        set('htpasswd', (_35 = {},
            _35[icon_1.IconSet.ColorLight] = '#6c369c',
            _35[icon_1.IconSet.IconIon] = ['ion-ios-locked', 18],
            _35
        ));
        set('conf', (_36 = {},
            _36[icon_1.IconSet.ColorLight] = '#009900',
            _36[icon_1.IconSet.IconIon] = 'ion-ios-gear',
            _36[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _36
        ));
        // Archive
        set('zip', (_37 = {},
            _37[icon_1.IconSet.ColorLight] = '#008858',
            _37[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _37[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _37
        ));
        set('rar', (_38 = {},
            _38[icon_1.IconSet.ColorLight] = '#005888',
            _38[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _38[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _38
        ));
        set('7z', (_39 = {},
            _39[icon_1.IconSet.ColorLight] = '#880058',
            _39[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _39[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _39
        ));
        set('tgz', (_40 = {},
            _40[icon_1.IconSet.ColorLight] = '#7900bc',
            _40[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _40[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _40
        ));
        set('tar', (_41 = {},
            _41[icon_1.IconSet.ColorLight] = '#885800',
            _41[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _41[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _41
        ));
        set('gz', (_42 = {},
            _42[icon_1.IconSet.ColorLight] = '#588800',
            _42[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _42[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _42
        ));
        set('bzip', (_43 = {},
            _43[icon_1.IconSet.ColorLight] = '#884300',
            _43[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _43[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _43
        ));
        set('msi', (_44 = {},
            _44[icon_1.IconSet.ColorLight] = '#6f8696',
            _44[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _44[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _44
        ));
        set('dmg', (_45 = {},
            _45[icon_1.IconSet.ColorLight] = '#6f8696',
            _45[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _45[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _45
        ));
        set('xpi', (_46 = {},
            _46[icon_1.IconSet.ColorLight] = '#5bac0d',
            _46[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _46[icon_1.IconSet.IconDev] = ['devicons devicons-netbeans', 17],
            _46
        ));
        // Settings
        set([
            'project',
            'jscsrc',
            'jshintrc',
            'csslintrc',
            'htmlhintrc',
            'xmlhintrc',
            'todo',
            'classpath',
            'properties',
            'bowerrc',
            'gruntrc',
            'jsrc',
            'pro',
            'editorconfig',
            'iml'
        ], (_47 = {},
            _47[icon_1.IconSet.ColorLight] = '#777777',
            _47[icon_1.IconSet.IconIon] = 'ion-ios-gear',
            _47[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _47
        ));
        set('csproj', (_48 = {},
            _48[icon_1.IconSet.ColorLight] = '#5bb552',
            _48[icon_1.IconSet.IconIon] = ['ion-ios-paper-outline', 18],
            _48[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _48
        ));
        set('vbproj', (_49 = {},
            _49[icon_1.IconSet.ColorLight] = '#486dae',
            _49[icon_1.IconSet.IconIon] = ['ion-ios-paper-outline', 18],
            _49[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _49
        ));
        set('sln', (_50 = {},
            _50[icon_1.IconSet.ColorLight] = '#87c5de',
            _50[icon_1.IconSet.IconIon] = ['ion-ios-paper-outline', 18],
            _50[icon_1.IconSet.IconDev] = 'devicons devicons-aptana',
            _50
        ));
        // Other text files
        set('txt', (_51 = {},
            _51[icon_1.IconSet.ColorLight] = '#4192c1',
            _51[icon_1.IconSet.IconIon] = 'ion-document-text',
            _51
        ));
        set('log', (_52 = {},
            _52[icon_1.IconSet.ColorLight] = '#225dc9',
            _52[icon_1.IconSet.IconIon] = 'ion-clipboard',
            _52
        ));
        set('npmignore', (_53 = {},
            _53[icon_1.IconSet.ColorLight] = '#cb3837',
            _53[icon_1.IconSet.IconIon] = ['ion-minus-circled', 14],
            _53[icon_1.IconSet.IconDev] = 'devicons devicons-npm',
            _53
        ));
        set('slugignore', (_54 = {},
            _54[icon_1.IconSet.ColorLight] = '#0da064',
            _54[icon_1.IconSet.IconIon] = ['ion-minus-circled', 14],
            _54
        ));
        set('dockerignore', (_55 = {},
            _55[icon_1.IconSet.ColorLight] = '#0296C9',
            _55[icon_1.IconSet.IconIon] = ['ion-minus-circled', 14],
            _55
        ));
        set('jpmignore', (_56 = {},
            _56[icon_1.IconSet.ColorLight] = '#5bac0d',
            _56[icon_1.IconSet.IconIon] = ['ion-minus-circled', 14],
            _56
        ));
        set(['yml', 'yaml'], (_57 = {},
            _57[icon_1.IconSet.ColorLight] = '#008000',
            _57[icon_1.IconSet.IconIon] = ['ion-navicon', 14],
            _57
        ));
        set('sqf', (_58 = {},
            _58[icon_1.IconSet.ColorLight] = '#b9e11f',
            _58[icon_1.IconSet.IconIon] = 'ion-wand',
            _58
        ));
        // LaTeX
        set(['tex', 'bib', 'sty'], (_59 = {},
            _59[icon_1.IconSet.ColorLight] = '#262686',
            _59[icon_1.IconSet.IconIon] = 'ion-document-text',
            _59
        ));
        //Singular Types
        set('applescript', (_60 = {},
            _60[icon_1.IconSet.ColorLight] = '#afafaf',
            _60[icon_1.IconSet.IconIon] = 'ion-social-apple',
            _60[icon_1.IconSet.IconDev] = 'devicons devicons-apple',
            _60
        ));
        set('textile', (_61 = {},
            _61[icon_1.IconSet.ColorLight] = '#6f8696',
            _61[icon_1.IconSet.IconIon] = 'ion-quote',
            _61
        ));
        set('matlab', (_62 = {},
            _62[icon_1.IconSet.ColorLight] = '#014495',
            _62[icon_1.IconSet.IconIon] = 'ion-clipboard',
            _62
        ));
        set('lisp', (_63 = {},
            _63[icon_1.IconSet.ColorLight] = '#f8c63d',
            _63[icon_1.IconSet.IconIon] = 'ion-ios-paperplane',
            _63
        ));
        set('xsl', (_64 = {},
            _64[icon_1.IconSet.ColorLight] = '#68217a',
            _64[icon_1.IconSet.IconIon] = 'ion-code',
            _64[icon_1.IconSet.IconDev] = 'devicons devicons-code',
            _64
        ));
        set('tcl', (_65 = {},
            _65[icon_1.IconSet.ColorLight] = '#c3b15f',
            _65[icon_1.IconSet.IconIon] = 'ion-code',
            _65[icon_1.IconSet.IconDev] = 'devicons devicons-code',
            _65
        ));
        set('rst', (_66 = {},
            _66[icon_1.IconSet.ColorLight] = '#6f8696',
            _66[icon_1.IconSet.IconIon] = 'ion-ios-paper',
            _66[icon_1.IconSet.IconDev] = ['devicons devicons-rust', 18],
            _66
        ));
        set('d', (_67 = {},
            _67[icon_1.IconSet.ColorLight] = '#960000',
            _67[icon_1.IconSet.IconIon] = 'ion-contrast',
            _67
        ));
        set('r', (_68 = {},
            _68[icon_1.IconSet.ColorLight] = '#8495C0',
            _68[icon_1.IconSet.IconIon] = 'ion-ios-analytics',
            _68
        ));
        set('map', (_69 = {},
            _69[icon_1.IconSet.ColorLight] = '#e0591f',
            _69[icon_1.IconSet.IconIon] = 'ion-ios-photos-outline',
            _69
        ));
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69;
    }
    exports.setExtensions = setExtensions;
    function setPrefixes(set) {
        set(['spec', 'test'], (_a = {},
            _a[icon_1.IconSet.ColorLight] = '#146ae3',
            _a[icon_1.IconSet.IconIon] = 'ion-android-radio-button-on',
            _a
        ));
        set('min', (_b = {},
            _b[icon_1.IconSet.ColorLight] = '#f28b1d',
            _b[icon_1.IconSet.IconIon] = ['ion-minus-circled', 14],
            _b
        ));
        var _a, _b;
    }
    exports.setPrefixes = setPrefixes;
    function setFullFileNames(set) {
        set('Dockerfile', (_a = {},
            _a[icon_1.IconSet.ColorLight] = '#0296C9',
            _a[icon_1.IconSet.IconIon] = ['ion-navicon', 14],
            _a[icon_1.IconSet.IconDev] = ['devicons devicons-docker', 18],
            _a
        ));
        var _a;
    }
    exports.setFullFileNames = setFullFileNames;
    function setFileNames(set) {
        set('package', ['json'], (_a = {},
            _a[icon_1.IconSet.ColorLight] = '#cb3837',
            _a[icon_1.IconSet.IconIon] = 'ion-briefcase',
            _a[icon_1.IconSet.IconDev] = 'devicons devicons-npm',
            _a
        ));
        set(['.brackets', 'brackets'], ['json'], (_b = {},
            _b[icon_1.IconSet.ColorLight] = '#0083e8',
            _b[icon_1.IconSet.IconDev] = 'devicons devicons-brackets',
            _b
        ));
        set('gulpfile', ['js', 'ts', 'coffee', 'babel.js'], (_c = {},
            _c[icon_1.IconSet.ColorLight] = '#eb4a4b',
            _c[icon_1.IconSet.IconIon] = 'ion-hammer',
            _c[icon_1.IconSet.IconDev] = 'devicons devicons-gulp',
            _c
        ));
        set('gruntfile', ['js'], (_d = {},
            _d[icon_1.IconSet.ColorLight] = '#fba919',
            _d[icon_1.IconSet.IconIon] = 'ion-hammer',
            _d[icon_1.IconSet.IconDev] = 'devicons devicons-grunt',
            _d
        ));
        var _a, _b, _c, _d;
    }
    exports.setFileNames = setFileNames;
    function getDefault() {
        return (_a = {},
            _a[icon_1.IconSet.IconIon] = 'ion-document',
            _a[icon_1.IconSet.IconDev] = 'devicons devicons-code_badge',
            _a
        );
        var _a;
    }
    exports.getDefault = getDefault;
});
