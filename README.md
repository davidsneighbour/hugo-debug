[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6f080031f82149f0a2f8e7ebdccfcc9f)](https://www.codacy.com/gh/dnb-hugo/debugprint/dashboard)

Hugo's missing debugging partial.

## Notes

- This is not a standalone theme. This is a Hugo module to use while you are developing your theme or website.
- The original of this module can be found at [kaushalmodi/hugo-debugprint](https://github.com/kaushalmodi/hugo-debugprint). 
- This version is adapted to work with dnb-hugo themes and components.
- If in doubt, use [@kaushalmodi's version](https://github.com/kaushalmodi/hugo-debugprint).

## Installation

Add the following code to your configuration:

```toml
[module]
[[module.imports]]
path = "github.com/dnb-hugo/debugprint"
disabled = false
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

Debugging from within Markdown requires very explicit configuration in the shortcode template. [Open a new issue](https://github.com/dnb-hugo/debugprint/issues/new) if you require a specific debugging subject.

## Other elements in DNB Hugo

DNB Hugo are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-hugo/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-hugo/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [debugprint](https://github.com/dnb-hugo/debugprint) | Hugo's missing debugging partial. |
| [hooks](https://github.com/dnb-hugo/hooks) | Template hooks for Hugo. |
| [libraries](https://github.com/dnb-hugo/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-hugo/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-hugo/testcontent) | Testcontent is a collection of testing content. Obviously. |
