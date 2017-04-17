#!/usr/bin/env ruby

# ![https://github.com/nosir/cleave.js](https://img.shields.io/github/stars/nosir/cleave.js.svg?style=social&label=Star) https://github.com/nosir/cleave.js
require 'uri'

links = '
https://github.com/nosir/cleave.js
https://github.com/text-mask/text-mask
https://github.com/igorescobar/jQuery-Mask-Plugin
https://github.com/fernandofleury/vanilla-masker
https://github.com/angular-ui/ui-mask
https://github.com/insin/inputmask-core
https://github.com/niksmr/vue-masked-input
https://github.com/probil/v-mask
https://github.com/moip/awesome-mask
https://github.com/the-darc/string-mask
https://github.com/romulobrasil/PureMask.js
https://github.com/devindex/vue-mask
https://github.com/plentz/jquery-maskmoney
https://github.com/flaviosilveira/Jquery-Price-Format
https://github.com/kevinongko/vue-numeric
'

links.strip.split("\n").each do |line|
  uri = URI(line)
  user = uri.path[1..-1]
  puts "1. ![#{uri}](https://img.shields.io/github/stars/#{user}.svg?style=social&label=Star) #{uri}"
end

puts
puts '<ol>'

links.strip.split("\n").each do |line|
  puts '  <li>'
  uri = URI(line)
  user = uri.path[1..-1]
  puts %(    <img src="https://img.shields.io/github/stars/#{user}.svg?style=social&label=Star">)
  puts %(    <a href="#{uri}">#{uri}</a>)
  puts '  </li>'
end

puts '</ol>'
