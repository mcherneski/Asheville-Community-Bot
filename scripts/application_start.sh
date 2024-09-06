#!/bin/bash
source ~/.nvm/nvm.sh
~/.nvm/versions/node/v20.17.0/bin/pm2 startOrRestart /home/ec2-user/avl_bot/dist/ecosystem.config.js