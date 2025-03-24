# Trasmoz – [Try Ghost](https://ghost.org?lmref=1166)


> A [Ghost](https://ghost.org/) theme focused on content based on [Medium](https://medium.com) design/ux.

Completely based on [Ghostium](https://github.com/oswaldoacauan/ghostium/) by Oswaldo Acauan, adaptingly to use on newer versions of Ghost, adding dark mode and other functions.

## Table of contents

* [Installing](#installing)
* [Configuring](#configuring)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [History](#history)
* [License](#license)

## Installing

### Using Git
1. Navigate to your Ghost theme directory `ghost/content/themes`
2. Clone the theme repository using the command below
  ```sh
  $ git clone https://github.com/KilFer/trasmoz/ "trasmoz"
  ```
3. Restart ghost and log in to your dashboard
4. In settings under themes select **trasmoz** and save
5. That's all, now its time to [configure](#configuring) your theme


### Manually
1. Download the files using the [GitHub .zip download](https://github.com/KilFer/trasmoz/archive/master.zip) option
2. Unzip the files and rename the folder to `trasmoz`
4. Copy the folder into your Ghost theme directory `ghost/content/themes`
5. Restart ghost and log in to your dashboard
6. In settings under themes select **trasmoz** and save
7. That's all, now its time to [configure](#configuring) your theme

## Building from source

### Prerequisites

* Ruby >= 2.4
* Bundler (`gem install bundler`)
* Sass (`gem install sass`)
* Node >= 8.9
* Bower (`npm install -g bower`)
* Run `npm install`


### Build

```
npm run build
```

Compiles all assets into the `build/` directrory.

### Zip

```
npm run zip
```

This creates the `trasmoz.zip` bundle ready for upload through the UI. It generates with the actual date, so it doesn't overwrites previous generations.

## Configuring

All configurable files are located in `src/partials/custom`.

#### config.hbs

Configurable javascript identifiers.

* `ga_ua`: Your [Google Analitycs](https://support.google.com/analytics/answer/1032385) account identifier
* `disqus_shortname`: Your [Disqus](http://help.disqus.com/customer/portal/articles/466208) unique identifier
* `bluesky_shortname`: Your [Bluesky](https://bsky.app/) unique identifier. If declared, the comments would be all responses to the publication where you link the published post.

#### meta.hbs

Configurable meta tags.

* `twitter:site`: Used for [Twitter Card](https://dev.twitter.com/docs/cards/markup-reference) identification, the twitter @username of the owner of this card's domain
* `twitter:creator`: Used for [Twitter Card](https://dev.twitter.com/docs/cards/markup-reference) identification, the twitter @username of the author of this content
* `google-site-verification`: Used for [Google Webmaster Tools](https://support.google.com/webmasters/answer/35179) identification
* `fb:admins`: Used for [Facebook Insights](https://developers.facebook.com/docs/insights/‎) identification

#### navigation.hbs

Your site navigation items, markup template below.
```html
<li class="drawer-list-item">
  <a href="#" title="My awesome menu">
    My menu
  </a>
</li>
```

## Contributing

If you want to help, please read the [Contributing](https://github.com/KilFer/trasmoz/blob/master/CONTRIBUTING.md) guide.

## History

For detailed history, see the Changelog of both [Trasmoz](https://github.com/KilFer/trasmoz/blob/master/CHANGELOG.md) and [Ghostium](https://github.com/oswaldoacauan/ghostium/blob/master/CHANGELOG.md).

## License

[MIT License](http://oswaldoacauan.mit-license.org/) © Fernando Belaza

[![Try Ghost](https://img.shields.io/static/v1.svg?label=Try&message=Ghost&color=46a5db)](https://ghost.org?lmref=1166)
