
# Simple Vue App for hosting personal CV page

## buttons

### ready

### raw

![PingPong status](https://badges.hiptest.com:/pingpong/status/sp_d84e88bad9b74d83878e0b498ef2fa4b?style=for-the-badge)
![W3C Validation](https://badges.hiptest.com:/w3c-validation/html?style=for-the-badge&targetUrl=https%3A%2F%2Fbutov.online)

![Snyk Vulnerabilities for GitHub Repo](https://badges.hiptest.com:/snyk/vulnerabilities/github/andrewb76/cv?style=for-the-badge)

![GitHub language count](https://img.shields.io/github/languages/count/andrewb76/cv?style=for-the-badge)

![Code Climate issues](https://img.shields.io/codeclimate/issues/andrewb76/cv?style=for-the-badge)
![Code Climate technical debt](https://img.shields.io/codeclimate/tech-debt/andrewb76/cv?style=for-the-badge)
![Code Climate maintainability](https://badges.hiptest.com:/codeclimate/maintainability/andrewb76/cv?style=for-the-badge)

![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/andrewb76/cv/master?style=for-the-badge)
![CII Best Practices Level](https://img.shields.io/cii/level/6672?style=for-the-badge)
![CII Best Practices Tiered Percentage](https://img.shields.io/cii/percentage/6672?style=for-the-badge)
![CII Best Practices Summary](https://img.shields.io/cii/summary/6672)

----------------------------------------------
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/andrewb76/cv/master?style=for-the-badge)
![CodeFactor Grade](https://www.codefactor.io/repository/github/andrewb76/cv)


![Scrutinizer code quality (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/quality/g/andrewb76/cv/master?style=for-the-badge)

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
