source "https://rubygems.org"
gemspec

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

gem "jekyll-git-hash"
gem "jekyll-webp"
gem 'jekyll-loading-lazy'
gem 'liquid-md5'
gem 'jekyll-redirect-from'
gem 'jekyll-target-blank'