<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# DNB GoHugo Component / Debug - debug everything

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6f080031f82149f0a2f8e7ebdccfcc9f)](https://www.codacy.com/gh/dnb-org/dnb-hugo-debug/dashboard)

This module for GoHugo adds debugging partials for many use cases.

## Notes

- This is a GoHugo module to use while you are developing your theme or website. It will slow down the build process. Knowledge about variables in our template and NOT speed is our main priority.
- This module is based on the work in [kaushalmodi/hugo-debugprint](https://github.com/kaushalmodi/hugo-debugprint).

<!--- THINGSTOKNOW BEGIN --->
## Some things you need to know

These are notes about conventions in this README.md. You might want to make yourself acquainted with them if this is your first visit.

<details>

<summary>:heavy_exclamation_mark: A note about proper configuration formatting. Click to expand!</summary>

The following documentation will refer to all configuration parameters in TOML format and with the assumption of a configuration file for your project at `/config.toml`. There are various formats of configurations (TOML/YAML/JSON) and multiple locations your configuration can reside (config file or config directory). Note that in the case of a config directory the section headers of all samples need to have the respective section title removed. So `[params.dnb.something]` will become `[dnb.something]` if the configuration is done in the file `/config/$CONFIGNAME/params.toml`.

</details>
<!--- THINGSTOKNOW END --->

<!--- INSTALLUPDATE BEGIN --->
## Installing

First enable modules in your own repository:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in config.toml.

```toml
[module]

[[module.imports]]
path = "github.com/dnb-org/dnb-hugo-debug"

```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```shell
# update this module
hugo mod get -u github.com/dnb-org/dnb-hugo-debug
# update all modules
hugo mod get -u ./...
```
<!--- INSTALLUPDATE END --->

## Usage

Either add `disabled = true` to your live server configuration or check, if you are on a development server by using `{{- if site.IsServer -}}` around your calls to the partials.

A quick sample for it's usage is the following partial that I use in my footer area:

```go
{{- if site.IsServer -}}
  <footer id="debugging">
    <div class="container">
      <div class="row">
        <div class="col-12">
          {{- partial "debugprint.html" . -}}
          {{- partial "debugprint.html" .Params -}}
          {{- partial "debugprint.html" .Site -}}
          {{- partial "debugprint.html" .Site.Menus -}}
          {{- partial "debugprint.html" .Resources -}}
          {{- partial "debugprint.html" .File -}}
          {{- $layoutTrace := .Scratch.Get "trace" -}}
          {{- with $layoutTrace -}}
            {{- partial "debugprint.html" . -}}
          {{- end -}}
        </div>
      </div>
    </div>
  </footer>
{{- end -}}
```

## Usage

### Debug from within layouts

To print a variable in one of your layouts:

```gotemplate
{{ partial "debugprint" . }}
{{ partial "debugprint" .Params }}
{{ partial "debugprint" site }}
{{ partial "debugprint" site.Menus }}
{{ partial "debugprint" .GitInfo }}
{{ partial "debugprint" .Resources }}
{{ partial "debugprint" .File }}

{{/* in shortcodes */}}
{{ partial "debugprint" . }} <!-- this will debug the internals of the shortcode -->
{{ partial "debugprint" .Position }} <!-- this will show where the shortcode was called -->
```

Exchange the context `.` with whatever variable you want to debug. Sub-collections or sub-slices might require extra setup to be debugged, depending on the structure and type of the values.

### Debug from within markdown (content) files

To debug page data from within a Markdown file:

```markdown
{{< debugprint >}} <!-- the same as -->
{{< debugprint "page" >}} <!-- debugs page variable -->
{{< debugprint "params" >}} <!-- debugs page params -->
{{< debugprint "site" >}} <!-- debug sites params -->
{{< debugprint param="bla" >}} <!-- debugs .Params.bla -->
```

Debugging from within Markdown requires very explicit configuration in the shortcode template. [Open a new issue](https://github.com/dnb-org/dnb-hugo-debug/issues/new) if you require a specific debugging subject.

### Debug from your layout file into the CLI/server log

Some times we developers want to inform and warn our users, or even throw an error. The debug partial is your connection to the CLI with some more options than GoHugo's internal error functionality.

```go-template
{{- partial "debug.html"
      (dict
        "message" "going into PostProcessing"
        "context" .
        "severity" "warn"
        "level" 4
        "slug" dnb-some-error
      )
-}}
```

*Note:* Multiline layout functions are supported since Hugo 0.81.0. In older versions remove the new lines in these samples.

The dictionary options are as follows:

- **message:** The message to print. It will be prefixed with the datetime and the severity slug.
- **context:** The context to debug, typically the dot. There is currently nothing else than the dot expected, we have explicit debugging on the todo list where the context can be something to debug to the CLI.
- **severity:** Slug marking the severity level. one of debug, info (default), warn, error or fatal.
- **level:** 1 to 10 for the severity level. Can be used to have a more fine grained control over severity levels.
- **slug:** (not implemented, keep an eye on #71) an ID to use so users can silence errors (level 7 and up)
- **namespace:** (not implemented as partial option, see configuration section) namespace slug to differentiate yourself from others (default dnb)

The resulting error message will look like this:

`SEVERITY TIMESTAMP [namespaceslug/severity-level] message`

*Note:* GoHugo will print all messages that occure more than once will printed only once. This applies to identical error messages. To work around this (if you wish to for instance notify the user about multiple image transformations not working) you should add an identifier (the image url? the resource id?) to the debugging message.

*Note2:* Hugo makes only ERROR and WARN levels available, so all `SEVERITY` stamps in the beginning of each log line will be either a red ERROR (from errors and fatals --- 1 to 4) or a yellow WARN for all others (debug to warn --- 5 to 10).

### Debug pages in a comprehensive format

While all other debugging options above are flexible options to debug any value, the `debugpage` partial opts to show a bunch of interesting information about the page object it is called on. It's quite specific and tries to cut out the noise.

You can add the following call to any layout file:

```go-template
{{ partialCached "debugpage.html" . . }}
```

or by using the following shortcode in your Markdown:

```markdown
{{< debugpage >}}
```

The Markdown shortcode will take the context of the currently parsed page while the template call will take what you hand over.

## Configuration

The debug component is configurable via the `params` section in your configuration. The following samples will assume your configuration lives in `config/_default/params.toml`. If you are using a root level configuration don't forget to add `params.` in front of each section and put it at the right place.

```toml
[dnb.debug]
namespace = "dnb"
debuglevel = 8
disablenote = false
```

- **namespace:** (string) namespace slug for your plugin/theme. keep it short. three characters are enough. There is no restriction on this, but think about the look of the loglines with longer namespaces.
- **debuglevel:** (number, 0 to 10) set the severity level that should maximally be shown. The higher the more info/debug on your CLI. 10 is maximum and can be helpful to debug issues.
- **disablenote:** (boolean) disables the note at the beginning that dnb-org's debug module is used.

## Styling

A simple Bootstrap 5 based SASS style is mounted into `assets/scss/_debugprint.scss` to be used via `@import "debugprint";`. Depending on your own styles you will probably have to add your own markup.

## Formatters

Formatters are dedicated layout files for a certain type. The component offers reusable templates for any structural need (two column, three column tables or plain print) and takes over the markup and styling of the output. The following subsections will explain the procedure by use of some samples.

### Configuring formatter

### Adding formatter layout

## Development

### Setup development environment

- copy `.env.sample` to `.env` and fill with your local information
- run `npm install` to install all dependencies
- run `npm run server` to start the server and see the documentation

The development server includes testing via Cypress and examples for (hopefully at the end) all debugging formatters we have added. Every formatter should have a testing page with at least introductory explanations to it's functions.

### Running tests

- to be implemented

### Contributing to _GoHugo Debug_

#### Reporting issues

If you have found a bug in _GoHugo Debug_ or miss some documentation, please use the issue tracker to report. If it's a support request you can do the same, but please note that this is an open source project and I might not be able to invest much time in getting your problem solved.

Whatever your issue is, please be as precise as possible and add enough information to reproduce your problem/suggestion.

#### Submitting pull requests

I welcome contributions in form of pull requests. There are no guidelines yet as to how a pull request should be done, so please be as extensive as possible about the reasoning behind your changes and why you think it will be a good addition. Typos of course can be merged without too much discussion.

DNB Org uses Codacy to keep some modest code quality. Keep an eye on your pull requests Codacy badge (on the README.md top of your branch). "If it's not A it's not Ok" ;)

## FAQ

Should there be frequently asked questions then they will appear here.

<!--- COMPONENTS BEGIN --->
## Other [GoHugo](https://gohugo.io/) components by [@dnb-org](https://github.com/dnb-org/)

<!-- prettier-ignore -->
| Component | Description |
| :--- | :--- |
| [dnb-hugo-auditor](https://github.com/dnb-org/dnb-hugo-auditor) | |
| [dnb-hugo-debug](https://github.com/dnb-org/dnb-hugo-debug) :mage_man: | Debug EVERYTHING in GoHugo. |
| [dnb-hugo-errors](https://github.com/dnb-org/dnb-hugo-errors) | A Hugo module that adds more versatile error pages to a site. |
| [dnb-hugo-feeds](https://github.com/dnb-org/dnb-hugo-feeds) | Implements various configurable feed formats. |
| [dnb-hugo-functions](https://github.com/dnb-org/dnb-hugo-functions) | A Hugo theme component with helper functions for other projects. |
| [dnb-hugo-giscus](https://github.com/dnb-org/dnb-hugo-giscus) | The Giscus comment system layout for GoHugo. |
| [dnb-hugo-head](https://github.com/dnb-org/dnb-hugo-head) | A GoHugo theme component that solves the old question of "What tags belong into the `<head>` tag of my website?" |
| [dnb-hugo-hooks](https://github.com/dnb-org/dnb-hugo-hooks) | GoHugo's missing hook system for template extensions. |
| [dnb-hugo-humans](https://github.com/dnb-org/dnb-hugo-humans) | Your site is made by humans. Humans.txt is naming them. |
| [dnb-hugo-icons](https://github.com/dnb-org/dnb-hugo-icons) | Icons for your Hugo website. |
| [dnb-hugo-internals](https://github.com/dnb-org/dnb-hugo-internals) | Better internal templates for GoHugo |
| [dnb-hugo-netlification](https://github.com/dnb-org/dnb-hugo-netlification) | a collection of tools that optimize your site on Netlify |
| [dnb-hugo-opensearch](https://github.com/dnb-org/dnb-hugo-opensearch) | configuration for Open Search |
| [dnb-hugo-pictures](https://github.com/dnb-org/dnb-hugo-pictures) | |
| [dnb-hugo-pwa](https://github.com/dnb-org/dnb-hugo-pwa) | Automatically turns your site into a PWA |
| [dnb-hugo-renderhooks](https://github.com/dnb-org/dnb-hugo-renderhooks) | render hooks for Markdown markup |
| [dnb-hugo-robots](https://github.com/dnb-org/dnb-hugo-robots) | Add a customizable robots.txt to your website. |
| [dnb-hugo-schema](https://github.com/dnb-org/dnb-hugo-schema) | |
| [dnb-hugo-search-algolia](https://github.com/dnb-org/dnb-hugo-search-algolia) | |
| [dnb-hugo-security](https://github.com/dnb-org/dnb-hugo-security) | Add a security.txt to your site with information about your preferred procedures to notify the developer team about security issues. |
| [dnb-hugo-sitemap](https://github.com/dnb-org/dnb-hugo-sitemap) | |
| [dnb-hugo-social](https://github.com/dnb-org/dnb-hugo-social) | |
| [dnb-hugo-workflows](https://github.com/dnb-org/dnb-hugo-workflows) | A collection of Github Actions/Workflows to optimise your work with GoHugo. |
| [dnb-hugo-youtube](https://github.com/dnb-org/dnb-hugo-youtube) | A shortcode and partial for lite youtube embeds. |

<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->
