docker build --no-cache -f SQL\Dockerfile.PostgreSql -t cooking/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t cooking/app ../..
