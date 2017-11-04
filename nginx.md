server {
   listen 80;
   server_name xxx;

   root /usr/local/www/deploy/dist;
   index index.html index.html;
   
   location / {
     try_files $uri $uri/ /index.html;
   }

   location /api {
     proxy_pass http://127.0.0.1:8080;
   }
}