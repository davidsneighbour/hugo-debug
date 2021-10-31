[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6f080031f82149f0a2f8e7ebdccfcc9f)](https://www.codacy.com/gh/dnb-org/debug/dashboard)

This module for GoHugo adds debugging partials for many use cases.

## Notes

- This is a GoHugo module to use while you are developing your theme or website.
- The original of this module can be found at [kaushalmodi/hugo-debugprint](https://github.com/kaushalmodi/hugo-debugprint). 
- This version is adapted to work with dnb-org themes and components and adds more ways to debug.
- It also adds Bootstrap 5 classes for a nicer look (Tailwind classes are in the works).
- If in doubt, use [@kaushalmodi's version](https://github.com/kaushalmodi/hugo-debugprint).

## Installation

Add the following code to your configuration:

```toml
[module]
[[module.imports]]
path = "github.com/dnb-org/debug"
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
          {{ partial "debugprint.html" . }}
          {{ partial "debugprint.html" .Params }}
          {{ partial "debugprint.html" .Site }}
          {{ partial "debugprint.html" .Site.Menus }}
          {{ partial "debugprint.html" .Resources }}
          {{ partial "debugprint.html" .File }}
          {{ $layoutTrace := .Scratch.Get "trace" }}
          {{ with $layoutTrace }}
            {{ partial "debugprint.html" . }}
          {{ end }}
        </div>
      </div>
    </div>
  </footer>
{{- end -}}
```

## Usage

### In layout files

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

### In content files

To debug page data from within a Markdown file:

```markdown
{{< debugprint >}} <!-- the same as -->
{{< debugprint "page" >}} <!-- debugs page variable -->
{{< debugprint "params" >}} <!-- debugs page params -->
{{< debugprint "site" >}} <!-- debug sites params -->
{{< debugprint param="bla" >}} <!-- debugs .Params.bla -->
```

Debugging from within Markdown requires very explicit configuration in the shortcode template. [Open a new issue](https://github.com/dnb-org/debug/issues/new) if you require a specific debugging subject.

## Styling

A simple Bootstrap 5 based SASS style is mounted into `assets/scss/_debugprint.scss` to be used via `@import "debugprint";`. Depending on your own styles you will probably have to add your own markup.

## Other elements in DNB Org for GoHugo

Elements are GoHugo tools that enhance and simplify your daily work with [GoHugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-org/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-org/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [debug](https://github.com/dnb-org/debug) | GoHugo's missing debugging partial. |
| [hooks](https://github.com/dnb-org/hooks) | Template hooks for GoHugo. |
| [libraries](https://github.com/dnb-org/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for GoHugo. |
| [shortcodes](https://github.com/dnb-org/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-org/testcontent) | Testcontent is a collection of testing content. Obviously. |
