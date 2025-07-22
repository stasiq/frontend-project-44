install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

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

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
