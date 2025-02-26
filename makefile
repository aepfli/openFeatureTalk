
DOCKER_CMD := docker run -it -u $(id -u ${USER}):$(id -g ${USER}) -v $(CURDIR):/documents/ asciidoctor/docker-asciidoctor
ASCIIDOC_PARAMS := -r asciidoctor-diagram -r asciidoctor-kroki

revealjs: 
	git clone -b 3.9.2 --depth 1 https://github.com/hakimel/reveal.js.git revealjs

build: revealjs
	${DOCKER_CMD} asciidoctor-revealjs ${ASCIIDOC_PARAMS} presentation.adoc

serve: build
	docker run --name my-nginx -p 8080:80 -v $(CURDIR)/presentation.html:/usr/share/nginx/html/index.html:ro -d nginx