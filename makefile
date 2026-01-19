# Inicialização rápida do projeto Personal Trainer IA

.PHONY: backend mobile infra dev

backend:
	cd backend && uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

mobile:
	cd mobile && npx react-native run-android

infra:
	docker-compose up

dev:
	# Roda backend e mobile em paralelo
	make -j2 backend mobile