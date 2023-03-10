all:
	yarn build react/index,react-dom/index --type=UMD

test:
	yarn test

install:
	yarn

open:
	open fixtures/packaging/babel-standalone/dev.html