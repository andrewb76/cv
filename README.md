
# Simple Vue App for hosting personal CV page

## buttons

### ready

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/andrewb76/cv/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/andrewb76/cv/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/andrewb76/cv/badges/build.png?b=master)](https://scrutinizer-ci.com/g/andrewb76/cv/build-status/master)

[![System Status](https://img.shields.io/pingpong/status/sp_d84e88bad9b74d83878e0b498ef2fa4b)](https://butov.pingpong.host/)
[![System Uptime](https://img.shields.io/pingpong/uptime/sp_d84e88bad9b74d83878e0b498ef2fa4b)](https://butov.pingpong.host/)

[![Known Vulnerabilities](https://snyk.io/test/github/andrewb76/cv/badge.svg)](https://snyk.io/test/github/andrewb76/cv)

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=bugs)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=andrewb76_cv&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=andrewb76_cv)

[![Code Climate issues](https://img.shields.io/codeclimate/issues/andrewb76/cv)](https://codeclimate.com/github/andrewb76/cv/issues)
[![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/andrewb76/cv)](https://codeclimate.com/github/andrewb76/cv/issues)
[![Code Climate maintainability](https://badges.hiptest.com:/codeclimate/maintainability/andrewb76/cv)](https://codeclimate.com/github/andrewb76/cv/issues)
[![Maintainability](https://api.codeclimate.com/v1/badges/0c8ff6ee0e0903d3f081/maintainability)](https://codeclimate.com/github/andrewb76/cv/maintainability)

[![CodeFactor](https://www.codefactor.io/repository/github/andrewb76/cv/badge)](https://www.codefactor.io/repository/github/andrewb76/cv)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/andrewb76/cv/master)](https://www.codefactor.io/repository/github/andrewb76/cv/master)

[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/6672/badge)](https://bestpractices.coreinfrastructure.org/projects/6672)
[![CII Best Practices Tiered Percentage](https://img.shields.io/cii/percentage/6672)](https://bestpractices.coreinfrastructure.org/en/projects/6672)
![CII Best Practices Level](https://img.shields.io/cii/level/6672)
![CII Best Practices Summary](https://img.shields.io/cii/summary/6672)

![W3C Validation](https://badges.hiptest.com:/w3c-validation/html?targetUrl=https%3A%2F%2Fbutov.online)
![GitHub language count](https://img.shields.io/github/languages/count/andrewb76/cv)


### Integrations
--------------------------------------
- https://sonarcloud.io/project/overview?id=andrewb76_cv
- https://uptimerobot.com/dashboard.php#793043159
- https://codeclimate.com/github/andrewb76/cv
- https://www.codefactor.io/repository/github/andrewb76/cv
- https://scrutinizer-ci.com/g/andrewb76/cv/?branch=master
- https://butov.pingpong.host/
- https://snyk.io/test/github/andrewb76/cv
--------------------------------------

## 😂 Here is a random joke that'll make you laugh!
![Jokes Card](https://readme-jokes.vercel.app/api)
## CLI

### SNYK check dependencies and generate html report file

```bash
npx snyk test --json > reports/snyk_results && npx snyk-to-html -i reports/snyk_results.json -o reports/snyk_results.html -s
```

### BDD configured cypress for e2e tests

```bash
npx cypress run
```

### Project setup

```bash
yarn
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
npx mega-linter-runner --flavor salesforce -e 'ENABLE=,DOCKERFILE,MARKDOWN,YAML' -e 'SHOW_ELAPSED_TIME=true'
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
