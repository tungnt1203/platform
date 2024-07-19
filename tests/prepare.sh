#!/usr/bin/env bash

docker compose -p sanity kill
docker compose -p sanity down --volumes
docker compose -p sanity up -d --force-recreate --renew-anon-volumes
docker_exit=$?
if [ ${docker_exit} -eq 0 ]; then
    echo "Container started successfully"
else
    echo "Container started with errors"
    exit ${docker_exit}
fi

if [ "x$DO_CLEAN" == 'xtrue' ]; then
    echo 'Do docker Clean'
    docker system prune -a -f
fi

./wait-elastic.sh 9201

# Create workspace record in accounts
./tool.sh create-workspace sanity-ws -w SanityTest
# Create user record in accounts
./tool.sh create-account user1 -f John -l Appleseed -p 1234
./tool.sh create-account user2 -f Kainin -l Dirak -p 1234
./tool.sh assign-workspace user1 sanity-ws
./tool.sh assign-workspace user2 sanity-ws
./tool.sh set-user-role user1 sanity-ws OWNER
./tool.sh set-user-role user2 sanity-ws OWNER
# Make user the workspace maintainer
./tool.sh confirm-email user1
./tool.sh confirm-email user2

./restore-workspace.sh