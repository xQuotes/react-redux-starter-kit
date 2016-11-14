setup: static install

static:
	@git submodule update --init

install:
	@npm run install

static_init:
	cd dist && git init
	cd dist && git remote add origin git@git.ifengidc.com:fuyin/web-deploy.git

static_push:
	cd dist && git add .
	cd dist && git commit -m "deploy"
	cd dist && git checkout -b switches
	cd dist && git push origin HEAD -f

push:
	cd dist && git add .
	cd dist && git commit -m "deploy"
	cd dist && git push origin HEAD -f

release_init: deploy static_init static_push

release: deploy push

dev:
	export NODE_ENV=development && node server

deploy: 
	export NODE_ENV=production && webpack -p --config webpack.config.js

delete:
	git checkout -- .
	rm -rf src/route/cmdb/