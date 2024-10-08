if pm2 list | grep -q avl_bot; then
    echo 'Stopping pm2' >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
    pm2 stop avl_bot >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
else
    echo 'avl_bot is not running.' >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
fi

DEPLOY_DIR=/home/ec2-user/avl_bot

if [ -d "$DEPLOY_DIR" ]; then
    echo 'Removing old directory' >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
    rm -rf "$DEPLOY_DIR/*"
else
    echo 'Directory does not exist' >> /home/ec2-user/avl_bot_logs/DeployLog.txt 
fi
    # echo 'Nothing to stop' >> /home/ec2-user/avl_bot_logs/DeployLog.txt 