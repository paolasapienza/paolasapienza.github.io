Instructions:

```bash
# first ensure you have ruby 3.2.2
brew install ruby # can also be done through rbenv
# setup conda env
conda create -n website python=3.11
conda activate website
gem install bundler jekyll
jekyll new . --force
bundle install
```

```bash
# to launch
bundle exec jekyll serve --port 4001
```
