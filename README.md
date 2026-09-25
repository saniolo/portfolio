# Deploy
Hosting URL: https://samuelbruno.com
```
    npm run build
    firebase deploy
```
# carico i file su una cartella “staging” nella home dell’utente
rsync -avz --delete -e "ssh -p 2222" ./build/ sam@192.168.1.61:/home/sam/portfolio_build/

# sul server, sostituisce i file
ssh -p 2222 sam@192.168.1.61 \
"sudo rsync -a --delete /home/sam/portfolio_build/ /var/www/portfolio/ && \
 sudo chown -R www-data:www-data /var/www/portfolio"