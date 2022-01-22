# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.4.4](https://github.com/dnb-org/dnb-hugo-debug/compare/v1.4.3...v1.4.4) (2022-01-22)


### Features

* add formatting partial for empty values ([cd16107](https://github.com/dnb-org/dnb-hugo-debug/commit/cd1610770dd0ff5b128993e510f7e654f06eedc5))
* add separate debugging formatters for int/int64/float64 ([27278ee](https://github.com/dnb-org/dnb-hugo-debug/commit/27278eeb64327b984853db1432f6f58b31d5cf34)), closes [#76](https://github.com/dnb-org/dnb-hugo-debug/issues/76)
* **deprecation:** Page.Hugo is deprecated, removed in debugpage.html ([85e70ba](https://github.com/dnb-org/dnb-hugo-debug/commit/85e70bae377a6b2e3911537aad7a3a3a1ac34326))
* **fix:** remove quotation marks from string debugging ([14ff521](https://github.com/dnb-org/dnb-hugo-debug/commit/14ff5216f0291570f565f0afadba1b342bbf5fe3))
* **fix:** remove table from time formatter ([6376297](https://github.com/dnb-org/dnb-hugo-debug/commit/6376297da8c77a7406f5e25cb2430a9da8041289))
* **fix:** rework debugging table for dependency type ([f8e2cc0](https://github.com/dnb-org/dnb-hugo-debug/commit/f8e2cc056ece323bfd57a9bbdbef030bd72d3ace))


### Bug Fixes

* optimise table layout for dependency type ([3e0f02f](https://github.com/dnb-org/dnb-hugo-debug/commit/3e0f02f043c0c6a95bc32ed49e274f29e5d5462e))


### Build System

* **lint:** remove CHANGELOG.md from markdown linting ([95068c7](https://github.com/dnb-org/dnb-hugo-debug/commit/95068c78d72dcfc1995fdf202234226855d967e0))


### Documentation

* add repo image to README.md ([50cc714](https://github.com/dnb-org/dnb-hugo-debug/commit/50cc7143bccc70a9a92bd2812c6e1498ea4623fc))
* rewrite README.md ([e757ffe](https://github.com/dnb-org/dnb-hugo-debug/commit/e757ffe04d08c3f31cffd00f3090e33201a25769))


### Chore

* cleanup bin layout and fix paths in package.json ([cf2ecbc](https://github.com/dnb-org/dnb-hugo-debug/commit/cf2ecbcd760b514689f14b8d25abad1ea80d0cd9))
* **config:** cleanup and fixes to dev site ([8af6c02](https://github.com/dnb-org/dnb-hugo-debug/commit/8af6c020c524aea3b7b3d8b97d1501b780e9e710))
* **config:** require 0.92.0 for dependency graph debugging ([3709884](https://github.com/dnb-org/dnb-hugo-debug/commit/3709884317537a6fca244816570257a9a3607efd))
* **config:** update header images ([695fc9d](https://github.com/dnb-org/dnb-hugo-debug/commit/695fc9d4f2c60ff14f4a0d15c8574dfabde30334))
* **config:** update module configuration ([df9bf65](https://github.com/dnb-org/dnb-hugo-debug/commit/df9bf65dbd6e6626344c3cdc084032dc375ca650))
* **deps:** update dependencies ([2917dfa](https://github.com/dnb-org/dnb-hugo-debug/commit/2917dfac888e51ebe04cb4a8021e2194cd718ab6))
* fix typo ([650a1d1](https://github.com/dnb-org/dnb-hugo-debug/commit/650a1d1e89d2f6a264a420b334a62a4a417170b2))
* remove vscode configuration ([342a4d7](https://github.com/dnb-org/dnb-hugo-debug/commit/342a4d795c5ae1d59e30eef2bfc9bff2e24c35f4))
* update go version ([6b99970](https://github.com/dnb-org/dnb-hugo-debug/commit/6b99970f7b211ba2ceeb3cae5d8e8ae5bd56b892))
* update repository files ([6911704](https://github.com/dnb-org/dnb-hugo-debug/commit/69117044d9e47747cb80d176aea41c91524f7638))

### [1.4.3](https://github.com/dnb-org/dnb-hugo-debug/compare/v1.4.2...v1.4.3) (2021-12-04)


### Features

* **formatters:** add formatters feature and formatters for int, pager, position (WIP) ([73a1dc9](https://github.com/dnb-org/dnb-hugo-debug/commit/73a1dc98f1a1c9119ab0c22efb2ab93404270eb3)), closes [#73](https://github.com/dnb-org/dnb-hugo-debug/issues/73)
* **formatters:** add formatters for all existing debugging types ([71118a1](https://github.com/dnb-org/dnb-hugo-debug/commit/71118a19d3c4935601985d18882853bbc7d6db03))
* **formatters:** add weight parameter for formatters ([40e3230](https://github.com/dnb-org/dnb-hugo-debug/commit/40e3230638b4de2216697a2017b3a710892916e4))
* **formatters:** fix default formatter ([96f20e3](https://github.com/dnb-org/dnb-hugo-debug/commit/96f20e3fc2b2cf3fa934e51cfdec16a413e493d6))
* **formatters:** fix orderedtaxonomyentry and resource formatter ([01fff37](https://github.com/dnb-org/dnb-hugo-debug/commit/01fff374e1b51f53c5e41e883fc630bdad20632b))
* **formatters:** use internal reflect functions to eval maps and slices ([fffaf0f](https://github.com/dnb-org/dnb-hugo-debug/commit/fffaf0fe820f8444caf1e9179df7d2e3a25b9b7f))
* **layouts:** adding eval layout (WIP) ([f4789cd](https://github.com/dnb-org/dnb-hugo-debug/commit/f4789cd59afe5c6a259fc79f8fbc5114bd5fefa5))


### Bug Fixes

* disable final printing attempt if formatter ran before ([d97d48e](https://github.com/dnb-org/dnb-hugo-debug/commit/d97d48e9b8a85db53413380d86b7a05150b32aa5)), closes [#73](https://github.com/dnb-org/dnb-hugo-debug/issues/73)
* naming errors in map partial ([4e1ee38](https://github.com/dnb-org/dnb-hugo-debug/commit/4e1ee386b119e1da20db02169bd89b76fe7bdcdf))
* not evaluating single booleans for being booleans ([fd2ae6a](https://github.com/dnb-org/dnb-hugo-debug/commit/fd2ae6a76321804eb611742abb4ad401ee596ce4))
* **typo:** formatters archetype ([550f30e](https://github.com/dnb-org/dnb-hugo-debug/commit/550f30e09e37b1bbd5ddd1cc9557e32ff66b40ea))
* wrong context in page formatter ([9b49ab2](https://github.com/dnb-org/dnb-hugo-debug/commit/9b49ab25289b900fdeb6b1094d315ef57cb3b966))


### Documentation

* add bootstrap pipe and developer font to dev site ([1b8d3e8](https://github.com/dnb-org/dnb-hugo-debug/commit/1b8d3e859b585c9a7b243788270e16b7a56ca12a))
* add codacy note to contribution section ([38cb7f4](https://github.com/dnb-org/dnb-hugo-debug/commit/38cb7f49914194b6c47bf74f5203f10cbbec494f))
* update README.md with contribution info, typos and docs ([a1a7f7f](https://github.com/dnb-org/dnb-hugo-debug/commit/a1a7f7fe0c92018725280e65fc2445f318d22f9e))


### Build System

* add replacements to pre release script ([79a77c8](https://github.com/dnb-org/dnb-hugo-debug/commit/79a77c8a05aa610f3adb10290089a00ce8d9f929))
* **docs:** add readme creation script ([0d0cb45](https://github.com/dnb-org/dnb-hugo-debug/commit/0d0cb45e15a52937c7742498f5302793c9f41f16))


### Chore

* add development and testing server setup ([6d2747d](https://github.com/dnb-org/dnb-hugo-debug/commit/6d2747d136a02218adb85d28283e6b72c2680ac6))
* **build:** add linting and server scripts ([82e026e](https://github.com/dnb-org/dnb-hugo-debug/commit/82e026ecb7afb173619a016977a7704238147257))
* **config:** add archetype for formatters ([aa80a56](https://github.com/dnb-org/dnb-hugo-debug/commit/aa80a563b247a527481b200a6ac59f0e00aec8f5))
* **config:** add eslint configuration for cypress ([39f9a95](https://github.com/dnb-org/dnb-hugo-debug/commit/39f9a95c4b3b30357e5fa0dce44050f452268d1c))
* **config:** add module cache to git pages workflow ([1d7ec96](https://github.com/dnb-org/dnb-hugo-debug/commit/1d7ec963a61d9532bcd9a31df5d5a2ffb1c6149f))
* **config:** add npm install to dev site workflow ([513fd75](https://github.com/dnb-org/dnb-hugo-debug/commit/513fd751f7e80b894b1fc1b40f2ceaca83a57af4))
* **config:** add package-lock.json to repo ([e3f6ee0](https://github.com/dnb-org/dnb-hugo-debug/commit/e3f6ee00183ee7a8531ab0299fb223ad97811345))
* **config:** add sample file for .env configuration ([3d6ba1b](https://github.com/dnb-org/dnb-hugo-debug/commit/3d6ba1b8cda93075722710c678f2e9f2f0f515aa))
* **config:** add scratch directory to gitignore ([1889308](https://github.com/dnb-org/dnb-hugo-debug/commit/1889308b5abe635a470f909ebe4d6d9c974d20b5))
* **config:** add vscode configuration ([cace462](https://github.com/dnb-org/dnb-hugo-debug/commit/cace462ceac51e3b71d2f115b4d4fc224443f878))
* **config:** configure standard-version to save version number in data folder ([58aec71](https://github.com/dnb-org/dnb-hugo-debug/commit/58aec716bb773b4931f7ea7ad3c4016a8de61a4d))
* **config:** enable manually triggered workflow run ([af86266](https://github.com/dnb-org/dnb-hugo-debug/commit/af862664b46aca7b493db2a13ab45c5a60eabb47))
* **config:** fix build command for git pages workflow ([d708a47](https://github.com/dnb-org/dnb-hugo-debug/commit/d708a47d87691e6c38a8e8e53e5deb8b8043a15a))
* **config:** fix typo in dev site config ([9ed0f80](https://github.com/dnb-org/dnb-hugo-debug/commit/9ed0f80ba77cc4f35352b54550aa1fd8e21b2a76))
* **config:** move .hugo_build.lock into gitignore ([77b2bb6](https://github.com/dnb-org/dnb-hugo-debug/commit/77b2bb6d5e36bf62fb0013cff0d57eee212e5769))
* **config:** put proper directories and files into clean:hugo script ([10fa25b](https://github.com/dnb-org/dnb-hugo-debug/commit/10fa25bb14bada606b0060f516e9ad43e5ef6d72))
* **config:** reconfigure dependabot ([bba4939](https://github.com/dnb-org/dnb-hugo-debug/commit/bba4939f94001940351803690094c5e8efef6ff4))
* **config:** setup github pages for dev site ([84e9ec0](https://github.com/dnb-org/dnb-hugo-debug/commit/84e9ec02e56130487de99624b7bdff3e365b5953))
* **config:** update npm scripts ([20b3fda](https://github.com/dnb-org/dnb-hugo-debug/commit/20b3fdaedc9b6572094f0dca625a20b5fc734eb2))
* **deps:** add mem to solve security warnings ([743b35e](https://github.com/dnb-org/dnb-hugo-debug/commit/743b35e4de164d2ff3e3240ecddd2980fd61db80))
* **deps:** update dependencies ([d184183](https://github.com/dnb-org/dnb-hugo-debug/commit/d184183b977301e00d1e925f4f4e2694089b93e2))
* **deps:** update dependencies ([a884aeb](https://github.com/dnb-org/dnb-hugo-debug/commit/a884aeb2d00cf036645a22be621c5c977646e5b5))
* **fix:** add public dev directory to gitignore ([25fd1f5](https://github.com/dnb-org/dnb-hugo-debug/commit/25fd1f55e54cf4e9d7cb104c05f3aa380e89b84e))
* **fix:** add updated build file to release script ([404c5a5](https://github.com/dnb-org/dnb-hugo-debug/commit/404c5a5f8edef181c0d0e8cc6a9996c226a0ccef))
* re-setup to new repo name ([0b3faf1](https://github.com/dnb-org/dnb-hugo-debug/commit/0b3faf1ac2fbdc5a812a5a818d6e57abbc05f9bd))

### [1.4.2](https://github.com/dnb-org/debug/compare/v1.4.1...v1.4.2) (2021-11-11)


### Features

* add debugtype partial for printing out the type of a value ([0ece61e](https://github.com/dnb-org/debug/commit/0ece61e1158fab08f252674514ae5ad66d5e66b6))
* **formatter:** add formatter for page.Pager ([ae4c15c](https://github.com/dnb-org/debug/commit/ae4c15c693ee7a57d186b8afd6185681005ca5ee))

### [1.4.1](https://github.com/dnb-org/debug/compare/v1.4.0...v1.4.1) (2021-10-31)


### Chore

* **config:** remove old data directory configuration ([9abd7a3](https://github.com/dnb-org/debug/commit/9abd7a3ae3a726adfc76cc22b46a4856722c5a6f))

## [1.4.0](https://github.com/dnb-org/debug/compare/v1.3.6...v1.4.0) (2021-10-31)


### Features

* rework config setup and add more documentation ([96f8d49](https://github.com/dnb-org/debug/commit/96f8d49b5fc35cfda28c0a769ecb57bb31838a2f))

### [1.3.6](https://github.com/dnb-org/debug/compare/v1.3.5...v1.3.6) (2021-10-31)


### Features

* **fix:** add tables around single string debugging ([209ec67](https://github.com/dnb-org/debug/commit/209ec679f8f50a78b4f5c4cbb984619a7bb71df5)), closes [#69](https://github.com/dnb-org/debug/issues/69)


### Documentation

* update README.md ([c2df7b7](https://github.com/dnb-org/debug/commit/c2df7b71e98d4e9135e5110bdf7a6e523ddf5d05))


### Chore

* **config:** cleanup configuration ([d85f422](https://github.com/dnb-org/debug/commit/d85f4229f6fce4d8bd2bf9815ad18e741abab9e4))
* **config:** remove unused packages ([53e4637](https://github.com/dnb-org/debug/commit/53e463708501fe4f76deeeda8e38052e9d1757ed))

### [1.3.4](https://github.com/dnb-org/debug/compare/v1.3.3...v1.3.4) (2021-10-15)


### Build System

* optimize build scripts ([150053f](https://github.com/dnb-org/debug/commit/150053fce5c7d2db981ea1adf0c7ced326279827))


### Chore

* **deps:** update dependencies ([0c3a1dc](https://github.com/dnb-org/debug/commit/0c3a1dc84b5f86d04becf7b191c32e1c2035d43c))

### [1.3.3](https://github.com/dnb-org/debug/compare/v1.3.2...v1.3.3) (2021-10-08)


### Chore

* remove lint script from release scripts ([d26d129](https://github.com/dnb-org/debug/commit/d26d1290bb2d2e0fec56d1cc32e1e96592e7a7c3))

### [1.3.2](https://github.com/dnb-org/debug/compare/v1.3.1...v1.3.2) (2021-10-08)


### Chore

* **deps-dev:** bump @dnb-org/all from 3.2.22 to 3.2.25 ([#63](https://github.com/dnb-org/debug/issues/63)) ([4daa21a](https://github.com/dnb-org/debug/commit/4daa21a6e6d97b93de49d3efe10c4ef8bf41d6a8))
* **deps:** update dependencies and fix package.json ([a450066](https://github.com/dnb-org/debug/commit/a45006639f350fe3a3c7783b9ea8ee47c43bbcda))

### [1.3.1](https://github.com/dnb-org/debug/compare/v1.3.0...v1.3.1) (2021-09-17)

## [1.3.0](https://github.com/dnb-org/debug/compare/v1.2.4...v1.3.0) (2021-07-13)


### Chore

* change dnb-hugo to dnb-org organisation ([6e23bf1](https://github.com/dnb-org/debug/commit/6e23bf1c912fff0536c2cb43c4b49994f2d7e788))
* **deps:** update dependencies ([63dec88](https://github.com/dnb-org/debug/commit/63dec8827635d23a518729beefd914e9e3a5c210))

### [1.2.4](https://github.com/dnb-org/debug/compare/v1.2.3...v1.2.4) (2021-07-11)


### Bug Fixes

* disable ignore errors via slug, not working yet ([c101fef](https://github.com/dnb-org/debug/commit/c101fefa4a8eeda57cc2395b1b279c814574cced))

### [1.2.3](https://github.com/dnb-org/debug/compare/v1.2.2...v1.2.3) (2021-07-10)


### Chore

* cleanup setup ([0c2739c](https://github.com/dnb-org/debug/commit/0c2739c33051f196fc919f8ac1799da60864e8c8))
* **deps:** update dependencies ([ea57092](https://github.com/dnb-org/debug/commit/ea57092ad7ab9e5e9e41867ca9e8fa89c9fbaedb))
* **deps:** update dependencies ([098d9cf](https://github.com/dnb-org/debug/commit/098d9cff20346cae21e5b95c700a05219c1ef60f))

### [1.2.1](https://github.com/dnb-org/debug/compare/v1.2.0...v1.2.1) (2021-07-06)


### Bug Fixes

* call to partial in docs of debug.html ([f76d86a](https://github.com/dnb-org/debug/commit/f76d86af3e52cb30a41dd127d2cd45a90efe6784))

## [1.2.0](https://github.com/dnb-org/debug/compare/v1.0.16...v1.2.0) (2021-07-06)


### Chore

* rename package to debug ([b6b5b01](https://github.com/dnb-org/debug/commit/b6b5b013692de8bf98f572c57f0795bd98d96c6c))

### [1.0.16](https://github.com/dnb-org/debugprint/compare/v1.0.15...v1.0.16) (2021-06-23)


### Chore

* remove max version restraint from config ([3ad7266](https://github.com/dnb-org/debugprint/commit/3ad726634be3b93765d827e2be67fdd91e5bff74))

### [1.0.15](https://github.com/dnb-org/debugprint/compare/v1.0.14...v1.0.15) (2021-06-22)


### Features

* adding templatenotes partial ([52c531f](https://github.com/dnb-org/debugprint/commit/52c531f824006892e327384efbaa6209879bdad9))


### Chore

* update dependabot configuration ([66284cb](https://github.com/dnb-org/debugprint/commit/66284cb1dfc685afb91679a7ba80699adcc68fe8))
* update README and configurations ([bdd2056](https://github.com/dnb-org/debugprint/commit/bdd2056b605cab635d19a0881f37330fae803da5))
* **deps:** update dependencies ([27b6186](https://github.com/dnb-org/debugprint/commit/27b6186037cf895832410328067f597d2a7e3849))
* **deps-dev:** bump @dnb-hugo/browserslist-config from 2.2.9 to 2.2.11 ([#33](https://github.com/dnb-org/debugprint/issues/33)) ([074d9cb](https://github.com/dnb-org/debugprint/commit/074d9cb4408502242cfebdeb7f1a5cf10992a87a))
* **deps-dev:** bump @dnb-hugo/remark-config from 2.0.11 to 2.0.13 ([#35](https://github.com/dnb-org/debugprint/issues/35)) ([1bb9068](https://github.com/dnb-org/debugprint/commit/1bb9068969c2bc7afe24de99c96d0f7abb5e36bc))
* **deps-dev:** bump @dnb-hugo/standard-version-config ([#34](https://github.com/dnb-org/debugprint/issues/34)) ([3c63f94](https://github.com/dnb-org/debugprint/commit/3c63f94f0987e7fc3fbe8f59dccf592829d86394))
* **deps-dev:** bump @dnb-hugo/stylelint-config from 2.0.24 to 2.0.26 ([#32](https://github.com/dnb-org/debugprint/issues/32)) ([9d18b6b](https://github.com/dnb-org/debugprint/commit/9d18b6bd415ecc4154ac33c79f962650f3845397))
