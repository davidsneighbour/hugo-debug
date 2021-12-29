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

## Installation

Add the following code to your configuration:

```toml
[module]
[[module.imports]]
path = "github.com/dnb-org/dnb-hugo-debug"
disabled = false
```

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
- **context:** The context to debug to, typically the dot. There is currently nothing else than the dot expected, we have explicit debugging on the todo list where the context can be something to debug to the CLI.
- **severity:** Slug marking the severity level. one of debug, info (default), warn, error or fatal.
- **level:** 1 to 10 for the severity level. Can be used to have a more fine grained control over severity levels.
- **slug:** (not implemented, keep an eye on #71) an ID to use so users can silence errors (level 7 and up)
- **namespace:** (not implemented as partial option, see configuration section) namespace slug to differentiate yourself from others (default dnb)

The resulting error message will look like this:

`[namespaceslug/severity-level] message`

*Note:* GoHugo's error printing is weird, to put it friendly. All messages that occure more than once will printed only once. This applies to identical error messages. To work around this (if you wish to for instance notify the user about multiple image transformations not working) you will need to add an identifier (the image url? the resource id?) to the debugging message.

### (BETA) Debug page information in a comprehensive format

While all other debugging options above are flexible options to debug any value our `debugpage` partial opts to show a bunch of interesting information about the page it is called on. It's quite specific and tries to cut out the noise. This is work in progress and might change without notice in subsequent releases.

You can try it by adding the following partial to a layout file:

```go-template
{{ partialCached "debugpage.html" . . }}
```

or by using the following shortcode in your content file:

```markdown
{{< debugpage >}}
```

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

<!--- ELEMENTS BEGIN --->
## Other elements in DNB Org for GoHugo

[Hugo elements by David's Neighbour](https://github.com/dnb-org) are modules that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [components](https://github.com/dnb-org/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [configurations](https://github.com/dnb-org/configurations) | A collection of configuration packages used in dnb-org |
| [debug](https://github.com/dnb-org/debug) | Debugging for your Hugo layout files. |
| [hooks](https://github.com/dnb-org/hooks) | Template hooks for Hugo themes |
| [libraries](https://github.com/dnb-org/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-org/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-org/testcontent) | Testcontent is a collection of testing content. Obviously. |
<!--- ELEMENTS END --->
