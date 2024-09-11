#!/bin/bash
source ~/.nvm/nvm.sh

cd /home/ec2-user/avl_bot/dist
~/.nvm/versions/node/v20.17.0/bin/npm install >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
~/.nvm/versions/node/v20.17.0/bin/npm install pm2 -g >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
