# Lonely or not

This repository contains an Nx monorepo with two applications. The applications contain the smae feature, once written with NgModules and once with standalone components.

Each app contains two lazy loaded routes to display a home page and a list page.

![](https://raw.githubusercontent.com/kreuzerk/lonely-or-not/master/doc/home-page.png)

![](https://raw.githubusercontent.com/kreuzerk/lonely-or-not/master/doc/list-page.png)

## Getting started

- To start the NgModules app you can type `npm run start`.

- To start the standalone components app you can type `npm run start:standalone` 

## Bundle size

To analyze the bundle size of both applications we added two analyze scripts. 

- To analyze the NgModules app you can type `npm run analyze:modules`
- To analyze the standalone application you can run `npm run analyze:standalone`

### Bundle analyzer output for the NgModules page

![](https://raw.githubusercontent.com/kreuzerk/lonely-or-not/master/doc/ng-modules-bundle.png)

### Bundle analyzer output for the standalone components page

![](https://raw.githubusercontent.com/kreuzerk/lonely-or-not/master/doc/standalone-bundle.png)
