#!/bin/bash
find . -type f -iregex .*\.html$ | while read line
do
  printf 'Converting >>>%s<<<\n' "$line"
  P_MD=${line%".html"}.markdown
  pandoc --ignore-args -r html -w markdown < "${line}" | awk 'NR > 130' | sed '/<div class="site-info">/,$d'  > "${P_MD}"
done
