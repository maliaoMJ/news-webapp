echo "================== Install Package =================="
yarn
echo "================== Begin Build Project =================="
yarn run build
echo "================== Begin Stop And Delete Old Project =================="
pm2 stop start
pm2 delete start
echo "================== Begin Deploy New Project =================="
pm2 start start.js
echo "================== Begin Project Success =================="
