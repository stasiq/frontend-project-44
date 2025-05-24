install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

run:
	bin/nodejs-package.js 10

deps-install:
	npm ci

deps-update:
	npx ncu -u

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

.PHONY: test

all: build test

build:
	@echo "Сборка проекта"
	npx run build

test:
	@echo "Запуск тестов"
	npm test

clean:
	@echo "Очистка временных файлов"
	rm -rf build
