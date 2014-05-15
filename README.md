# grunt-xdns

> grunt task for xdns

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xdns --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xdns');
```

## The "xdns" task

### Overview
In your project's Gruntfile, add a section named `xdns` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xdns: {
    options: {
        dns:'8.8.8.8',
        keepalive:true,
        hostsArr:['$en0$ www.qq.com']
    },
  },
});
```

### Options

#### options.dns
Type: `IP Address`
Default value: `your system dns`

The remote dns server.


#### options.keepalive
Type: `Boolean`
Default value: `false`

Keep the server alive indefinitely. Note that if this option is enabled, any tasks specified after this task will never run. By default, once grunt's tasks have completed, the web server stops. This option changes that behavior.

#### options.hostsArr
Type: `Array`
Default value: `[]`

The hosts array .  see [xdns readme](https://github.com/allenm/xdns#xdnsinitconfig-%E5%90%AF%E5%8A%A8%E4%B8%80%E4%B8%AA-xdns)


### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  xdns: {
    options: {},
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  xdns: {
    online:{
        options: {
            dns:'8.8.8.8',
            keepalive:true,
            hostsArr:['$en0$ www.qq.com']
        }
    },
    pre:{
        options: {
            dns:'8.8.4.4',
            keepalive:true,
            hostsArr:['$en0$ www.qq.com']
        }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
