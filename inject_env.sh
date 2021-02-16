echo "Populating environment variables ..."
export ENV=$1
export USER_POOL_ID=$(aws ssm get-parameters --names /tss/$ENV/cognito/pool_id | jq '.Parameters[0].Value' -r)
export USER_POOL_CLIENT_ID=$(aws ssm get-parameters --names /tss/$ENV/cognito/app_client_id | jq '.Parameters[0].Value' -r)
export APP_API_URL=$(aws ssm get-parameters --names /tss/$ENV/core/endpoints/backend_api | jq '.Parameters[0].Value' -r)
export USER_POOL_REGION=$(aws ssm get-parameters --names /tss/$ENV/cognito/region | jq '.Parameters[0].Value' -r)
envsubst < environment.prod.js > environment.ci.js
cp environment.ci.js environment.prod.js
cat environment.prod.js
echo "Completed"
