#!/bin/bash

wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh

cat > ~/.netrc << EOF
machine api.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_KEY
machine git.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_KEY
EOF

heroku git:remote -a $HEROKU_APP