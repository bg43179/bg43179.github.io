---
title: Shell Script
date: "2020-07-26"
template: "note"
draft: false
slug: "shell-script"
note: "Shell Script"
---
## Array

  Initialize arry

  ```bash
  # declare variable, with a type -a array
  declare -a arr=("command1" "command2" "command3")

  for cond in "${arr[@]}"
  do
    ${cond}
  done
  ```

### Positional parameter
  - `> some_program word1 word2 word3`

    `$0` = some_program<br/>
    `$1` = word_1<br/>
    `$2` = word_2<br/>
    `$3` = word_3<br/>
  - `$#` ~= `arguments.length`, is the number of items on the command line not include ($0)

## Comamnd

###
```bash
# add prefix to all file in folders
for FILENAME in *; do mv $FILENAME prefix_$FILENAME; done

# remvoe prefix from all files in folders
for FILENAME in prefix_*; do mv $FILENAME "${FILENAME#prefix_}"; done
```

### `shift`
  - is a shell builtin that operates on the positional parameters.
  - Each time you invoke shift, it "shifts" all the positional parameters down by one. $2 becomes $1, $3 becomes $2, $4 becomes $3

  ```bash
  # Loop until all parameters are used up
  while [ "$1" != "" ]; do
    echo "Parameter 1 equals $1"
    echo "You now have $# positional parameters"

    # Shift all the parameters down by one
    shift
  done
  ```
