Ionic Modular Seed
==================

## What is in here? ##

This project is an application skeleton for a typical development [Ionic Framework](http://ionicframework.com), the Advanced HTML5 Hybrid Mobile App Framework, a front-end SDK for developing hybrid mobile apps with HTML5.

This seed main features are:

* [AngularJS modularity](https://github.com/johnpapa/ng-demos/tree/master/modular) development guidelines, with the [AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide) by [John Papa](http://www.johnpapa.net).
* [SMACSS (Scalable and Modular Architecture for CSS)](http://smacss.com) style guide based on the [SMACSS + SCSS starter](https://github.com/jonathanpath/SASS-SMACSS)
* Ionic starter blank template, with some views to show examples of modularity.


## Main libraries

The following libraries are used in this project:

*   [Ionic framework](http://ionicframework.com) (v1.1.0)
*   [AngularJS](http://angularjs.org) (v1.4.3)
*   [Gulp](http://gulpjs.com)
*   [Sass](http://sass-lang.com)
*   [Jasmine](http://jasmine.github.io)


## Prerequisites

To start the project, firstly they are needed the following requirements:

*   You need [Git](http://git-scm.com) to clone the ionic-modular-seed repository.
*   [node.js](http://nodejs.org) and its package manager (npm)
*   [Ruby](https://www.ruby-lang.org)
*   [Sass](http://sass-lang.com) ( ruby gem )
*


## IDE Plugins recommended to use

The Ionic Modular Seed has some files preconfigured and ready to use if you decide are a good choice for your development:

*   [EditorConfig](http://editorconfig.org/) to help developers define and maintain consistent coding styles between different editors and IDEs.
*   [JSHint](http://jshint.com/about/) to detect errors and potential problems in JavaScript code.
*   [ctags](http://ctags.sourceforge.net/) to generate an index file of language objects found in source files that allows these items to be quickly and easily located by a text editor or other utility.


## Install

1. Install prerequisites
2. `git clone https://github.com/manudefrutosvila/ionic-modular-seed.git <project>`
3. `cd <project>`
4. `npm -g install bower gulp`
5. `npm -g install ionic cordova`
6. `npm install`
7. `ionic setup sass`


## Run dev server

To start a developer server, you should use [Ionic CLI](http://ionicframework.com/docs/cli/)

    cd <project>
    ionic serve

It will be opened a browser with the address `http://localhost:8100`. Ionic will start the server with live reload and the [Gulp](http://gulpjs.com) tasks for watch changes and compile Sass files if needed.

## Emulate a device

Since with Ionic we are building a native or hybrid app, we can and should test it as one. You can check [Ionic CLI FAQ](http://ionicframework.com/docs/ionic-cli-faq/) to see common pitfalls.

#### iOS device

You'll need to sign up for an [Apple Developer](https://developer.apple.com/) account to test as a native app on a iOS device.

Once yu have an account and have set up XCode with your certificates to enable device testing you can either open directly the ios simulator with Ionic CLI. You probably will need to instal ios-sim `npm install -g ios-sim`

    ionic emulate ios
    ionic run ios

Or you can open a XCode project from your project folder `platform/ios/` and start testing from XCode.

#### Android device

You'll need to install [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and [Android SDK](https://developer.android.com/sdk/index.html). Then you can either launch the Android Studio emulator

    ionic emulate android

Or plug your device in and install the app. Make sure you have [USB debugging enabled](http://developer.android.com/tools/device.html) on your device

    ionic run android


## Ionic utilities

Appart from emulate and run, [Ionic CLI](http://ionicframework.com/docs/cli/) has a various set of utilities. A interesting one is to restore the Ionic environment set in `package.json`, which will restore the platforms and plugins:

    ionic state restore

## Ionic Crosswalk

If you want to improve the performance of your app in different old android devices (With versions 4.1 to 4.4 the improvement is woouh), you can do it using crosswalk with ionic. Crosswalk allows you to bundle a Chromido navigator v8 as the container of your app even you can set which version you will use (NOTE: the size of your app will increase because it encapsulates a concrete web navigator inside the app).

To use crosswalk you will need a node version 0.12 or higher.

1. `ionic browser list` #Find the version of Crosswalk you want.
2. `ionic browser add crosswalk@10.39.235.15` #Install stable version 10.39.235.15 and will change ionic.project file. If you don't have crosswalk, different libraries will be downloaded
3. `ionic build android` # it will generate the apk in the path
