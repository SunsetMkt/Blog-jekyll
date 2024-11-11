source "https://rubygems.org"
# gemspec cause error on Cf Pages
gem "jekyll", ">= 3.7", "< 5.0"
gem "jekyll-paginate", "~> 1.1"
gem "jekyll-sitemap", "~> 1.3"
gem "jekyll-gist", "~> 1.5"
gem "jekyll-feed", "~> 0.1"
gem "jekyll-include-cache", "~> 0.1"
gem "bundler"
gem "rake", ">= 12.3.3"

# https://github.com/jekyll/jekyll/pull/9225
# Fix Cloudflare Pages build error
gem "jekyll-sass-converter", "~> 2.0"

# https://jekyllrb.com/docs/installation/windows/
# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo", ">= 1", "< 3"
    gem "tzinfo-data"
end
# Please add the following to your Gemfile to avoid polling for changes:
gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?

# https://github.com/jekyll/jekyll/issues/9544
# gem "github-pages", "=228"
# no idea

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-algolia"
  gem "jekyll-git-hash"
  gem "jekyll-webp"
  gem 'jekyll-loading-lazy'
  gem 'liquid-md5'
  gem 'jekyll-redirect-from'
  gem 'jekyll-target-blank'
  gem 'jekyll_random_hex'
  gem 'jekyll-last-modified-at'
end
